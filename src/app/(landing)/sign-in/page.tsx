import MainFooter from '@/components/main-footer';
import MainNav from '@/components/main-nav';
import SignIn from '@/modules/sign-in';
import React from 'react';

export default function Signin() {
  return (
    <main className="flex flex-col">
      <MainNav />
      <SignIn />
      <MainFooter />
    </main>
  );
}
