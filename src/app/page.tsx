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
import React, { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense>
      <main className="flex min-h-screen flex-col items-center gap-10">
        <MainNav />

        <HeroSection />

        <ProtectedSection type="professional">
          <FeaturesSection />
        </ProtectedSection>

        <ProtectedSection type="enterprise">
          <EnterpriseSection type="enterprise" />
        </ProtectedSection>

        <ProtectedSection type="enterprise">
          <SolutionsSection />
        </ProtectedSection>

        <ProtectedSection type="enterprise">
          <SecuritySection />
        </ProtectedSection>

        <ActionSection />

        <ProtectedSection type="professional">
          <EnterpriseSection type="professional" />
        </ProtectedSection>

        <ReviewSection />

        <FaqSection />
      </main>

      <MainFooter />
    </Suspense>
  );
}
