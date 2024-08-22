'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { isRedirectError } from 'next/dist/client/components/redirect';

export const login = async (email: string, password: string) => {
  try {
    await signIn('credentials', { email, password, redirectTo: '/account' });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof Error) {
      const { type, cause } = error as AuthError;

      switch (type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        case 'CallbackRouteError':
          return cause?.err?.toString();
        default:
          return 'Something went wrong.';
      }
    }

    throw error;
  }
};
