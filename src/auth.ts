import authConfig from '@/auth.config';
import NextAuth from 'next-auth';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/sgin-in',
  },
  callbacks: {
    async session(params) {
      console.log(params);
      // console.log('session');
      // if (token.sub && session.user) {
      //   session.user.id = token.sub;
      // }
      //
      // if (token.role && session.user) {
      //   session.user.role = token.role as UserRole;
      // }
      //
      // if (session.user) {
      //   session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      //   session.user.name = token.name;
      //   session.user.email = token.email;
      //   session.user.isOAuth = token.isOAuth as boolean;
      // }

      // return session;
    },
    async jwt(params) {
      console.log('jwt', params);
      if (!params.token.sub) return params.token;

      // token.name = existingUser.name;
      // token.email = existingUser.email;
      // token.role = existingUser.role;
      // token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      //
      // return token;
    },
  },
  session: { strategy: 'jwt' },
  ...authConfig,
});
