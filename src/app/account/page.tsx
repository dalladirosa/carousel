'use client';

import MainFooter from '@/components/main-footer';
import Control from '@/modules/account/control';
import Download from '@/modules/account/download';
import Navbar from '@/modules/account/navbar';
import Refer from '@/modules/account/refer';
import Subscription from '@/modules/account/subscription';
import Banner from '@/modules/home/banner';
import React, { Suspense } from 'react';

export default function AccountPage() {
  return (
    <Suspense>
      <Banner />
      <main className="flex min-h-screen flex-col items-center gap-6 md:gap-10">
        <Navbar />
        <div className="container mb-10 max-w-[856px]">
          <h1 className="text-2xl font-bold md:text-4xl">My Subscription</h1>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Subscription />
            <Download />
          </div>
          <Refer />
          <Control />
        </div>
      </main>
      <MainFooter />
    </Suspense>
  );
}
