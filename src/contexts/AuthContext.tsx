
import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginWithEmailPassword, logoutShopify } from '@/lib/shopify';

interface AuthContextType {
  isAuthenticated: boolean;
  customerAccessToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customerAccessToken, setCustomerAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('customerAccessToken');
    const expiresAt = localStorage.getItem('customerAccessTokenExpiresAt');
    
    if (token && expiresAt) {
      if (new Date(expiresAt) > new Date()) {
        setCustomerAccessToken(token);
      } else {
        localStorage.removeItem('customerAccessToken');
        localStorage.removeItem('customerAccessTokenExpiresAt');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    const result = await loginWithEmailPassword(email, password);
    
    if (result.customerUserErrors.length > 0) {
      const errorMessages = result.customerUserErrors.map((e: any) => e.message).join(', ');
      throw new Error(errorMessages);
    }

    if (result.customerAccessToken) {
      const { accessToken, expiresAt } = result.customerAccessToken;
      setCustomerAccessToken(accessToken);
      localStorage.setItem('customerAccessToken', accessToken);
      localStorage.setItem('customerAccessTokenExpiresAt', expiresAt);
    }
  };

  const logout = async () => {
    if (customerAccessToken) {
      try {
        await logoutShopify(customerAccessToken);
      } catch (error) {
        console.error("Failed to delete Shopify access token:", error);
      }
    }
    setCustomerAccessToken(null);
    localStorage.removeItem('customerAccessToken');
    localStorage.removeItem('customerAccessTokenExpiresAt');
    // For cleanup of old implementation
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userPhone');
  };

  const isAuthenticated = !!customerAccessToken;

  return (
    <AuthContext.Provider value={{ isAuthenticated, customerAccessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
