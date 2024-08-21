'use client';

import { getQueryClient } from '@/app/get-query-client';
import MainFooter from '@/components/main-footer';
import MainNav from '@/components/main-nav';
import FaqSection from '@/modules/download/faq';
import FeaturesSection from '@/modules/download/features';
import PlansSection from '@/modules/download/plans';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';

export default function Home() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex min-h-screen flex-col items-center gap-6 md:gap-10">
        <MainNav />
        <PlansSection />
        <FeaturesSection />
        <FaqSection />
      </main>

      <MainFooter />
    </HydrationBoundary>
  );
}
