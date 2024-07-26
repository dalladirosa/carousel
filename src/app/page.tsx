'use client';

import MainFooter from '@/components/main-footer';
import MainNav from '@/components/main-nav';
import ProtectedSection from '@/components/protected-section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ActionSection from '@/modules/home/action';
import EnterpriseSection from '@/modules/home/enterprise';
import FeaturesSection from '@/modules/home/features';
import HeroSection from '@/modules/home/hero';
import ReviewSection from '@/modules/home/review';
import SecuritySection from '@/modules/home/security';
import SolutionsSection from '@/modules/home/solutions';
import React, { Suspense } from 'react';

const FAQS = [
  {
    title:
      'How does Carousel integrate with my current PowerPoint and Excel workflows?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title: 'Can Carousel help me manage changes when working with large teams?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title:
      "How does Carousel's change tracking improve over the built-in version history in Office 365?",
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title:
      'I’m working on sensitive decks & models. Is my data secure when using Carousel?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title:
      'How can Carousel reduce errors and improve the accuracy of our deliverables?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
  {
    title:
      'What are the system requirements for Carousel, and is there a trial version available?',
    description:
      "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
  },
];

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

        <section className="container mb-20 xl:max-w-4xl">
          <div className="mb-2 flex justify-center">
            <div className="flex items-center gap-1 rounded-2xl border border-purple-15 bg-white px-2 py-1">
              <span className="text-sm font-bold text-primary-purple-70">
                Need answers?
              </span>
            </div>
          </div>
          <div>
            <div className="mb-10 pt-3 text-center text-5xl font-medium">
              Frequently Asked Questions
            </div>
            {FAQS.map((faq, i) => (
              <Accordion type="single" collapsible key={i} className="my-4">
                <AccordionItem value={`${i}`}>
                  <AccordionTrigger>{faq.title}</AccordionTrigger>
                  <AccordionContent className="text-gray-800">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>
      </main>

      <MainFooter />
    </Suspense>
  );
}
