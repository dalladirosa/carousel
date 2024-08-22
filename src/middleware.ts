import authConfig from '@/auth.config';
import NextAuth from 'next-auth';

const { auth } = NextAuth(authConfig);

export const authRoutes = ['/sign-in', '/password-reset'];
export const userRoutes = ['/account'];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isUserRoute = userRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/account', nextUrl));
    }
    return null;
  }

  if (isUserRoute) {
    if (!isLoggedIn) {
      return Response.redirect(new URL('/sign-in', nextUrl));
    }
    return null;
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
