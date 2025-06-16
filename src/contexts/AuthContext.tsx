
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userPhone: string | null;
  login: (phone: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage for existing authentication
    const authStatus = localStorage.getItem('isAuthenticated');
    const phone = localStorage.getItem('userPhone');
    
    if (authStatus === 'true' && phone) {
      setIsAuthenticated(true);
      setUserPhone(phone);
    }
  }, []);

  const login = (phone: string) => {
    setIsAuthenticated(true);
    setUserPhone(phone);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userPhone', phone);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserPhone(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userPhone');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userPhone, login, logout }}>
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
