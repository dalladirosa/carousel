'use client';

import useAuth from '@/hooks/useAuth';
import React from 'react';

export const AuthContext = React.createContext({
  isAuthenticated: false,
  isLoading: true,
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => React.useContext(AuthContext);
