'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import useAuth from '../hooks/useAuth';

type AuthGuardProps = {
  children: ReactNode;
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated } = useAuth();

  const router = useRouter();

  if (!isAuthenticated) {
    router.push('/');
    return null;
  }

  return <>{children}</>;
};
