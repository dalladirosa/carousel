'use client';

import MainFooter from '@/components/main-footer';
import MainNav from '@/components/main-nav';
import ProtectedSection from '@/components/protected-section';
import ActionSection from '@/modules/home/action';
import EnterpriseSection from '@/modules/home/enterprise';
import FaqSection from '@/modules/home/faq';
import FeaturesSection from '@/modules/home/features';
import HeroSection from '@/modules/home/hero';
import ReviewSection from '@/modules/home/review';
import SecuritySection from '@/modules/home/security';
import SolutionsSection from '@/modules/home/solutions';
import PasswordReset from '@/modules/password-reset';
import React, { Suspense, useEffect, useRef, useState } from 'react';

export default function Home() {
  return (
    <Suspense>
      <main className="flex min-h-[70vh] flex-col items-center gap-10">
        <MainNav />

        <PasswordReset />
      </main>

      <MainFooter />
    </Suspense>
  );
}
