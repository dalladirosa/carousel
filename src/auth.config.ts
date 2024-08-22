import Auth from '@/networks';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log('authorize');
        const formData = new FormData();
        formData.set('username', credentials.email);
        formData.set('password', credentials.password);

        return await Auth.signIn(formData);
      },
    }),
  ],
} satisfies NextAuthConfig;
