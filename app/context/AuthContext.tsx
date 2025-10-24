// app/context/AuthContext.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log('Loaded token:', token);
        setIsLoggedIn(!!token);
      } catch (e) {
        console.warn('Failed to read token', e);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async () => {
    console.log('Logging in...');
    await AsyncStorage.setItem('userToken', 'dummy_token');
    const check = await AsyncStorage.getItem('userToken');
    console.log('Token after login:', check);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    console.log('Logging out...');
    await AsyncStorage.removeItem('userToken');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
