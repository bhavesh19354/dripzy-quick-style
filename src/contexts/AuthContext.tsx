import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
  isAuthenticated: boolean;
  userPhone: string | null;
  login: (phone: string) => void;
  logout: () => void;
  getAuthToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.phoneNumber) {
        setIsAuthenticated(true);
        setUserPhone(user.phoneNumber.replace('+91',''));
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userPhone', user.phoneNumber.replace('+91',''));
      } else {
        setIsAuthenticated(false);
        setUserPhone(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userPhone');
      }
    });
    return () => unsubscribe();
  }, []);

  const login = (phone: string) => {
    // No-op: handled by Firebase callback
  };

  const logout = () => {
    signOut(auth);
    setIsAuthenticated(false);
    setUserPhone(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userPhone');
  };

  const getAuthToken = async (): Promise<string | null> => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        return await currentUser.getIdToken(true);
      } catch (error) {
        console.error("Error getting auth token:", error);
        return null;
      }
    }
    return null;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userPhone, login, logout, getAuthToken }}>
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
