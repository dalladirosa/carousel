import { Button } from '@/components/ui/button';
import Enterprise from '@/icons/enterprise.svg';
import WebSecurity from '@/icons/web_security.svg';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type EnterpriseSectionProps = {
  type: 'professional' | 'enterprise' | '' | null;
};

const EnterpriseSection = ({ type }: EnterpriseSectionProps) => {
  const router = useRouter();

  const SECTIONS = [
    {
      title: 'Bank-level Security',
      description:
        'Carousel can be deployed entirely on-premise, so no data ever leaves your company’s ecosystem.',
      icon: <WebSecurity />,
    },
    {
      title: 'ROI Guarantee',
      description:
        "If you don't see faster deliverable turnaround and increased deal capacity within 60 days, you keep the software for free.",
      icon: (
        <Image
          src="/images/Speed@2x.png"
          alt=""
          width={64}
          height={64}
          className="h-16 w-16"
        />
      ),
    },
    {
      title: 'Customize Functionality',
      description:
        'Carousel can design & build custom toolkits for your team that integrate with your existing data providers.',
      icon: (
        <Image
          src="/images/raphael_wrench@2x.png"
          alt=""
          width={64}
          height={64}
          className="h-16 w-16"
        />
      ),
    },
    {
      title: '24/7 Support',
      description:
        'Your associates & analysts are up all night making models and decks. We’ll stay up with them.',
      icon: (
        <Image
          src="/images/7%20support@2x.png"
          alt=""
          width={64}
          height={64}
          className="h-16 w-16"
        />
      ),
    },
  ];

  return (
    <section className="container rounded-3xl p-0 lg:px-8">
      <div
        className={cn(
          'flex w-full flex-col items-center rounded-[40px] p-6 lg:p-10',
          type === 'enterprise'
            ? 'bg-primary-purple-5 lg:border-0'
            : 'border-black-30 lg:border lg:bg-gray-100',
        )}
      >
        <div className="rounded-[40px]">
          <div className="flex justify-center">
            <div className="flex items-center gap-1 rounded-2xl border border-purple-15 bg-white px-2 py-1">
              <Enterprise />
              <span className="text-sm font-bold text-primary-purple-70">
                Enterprise
              </span>
            </div>
          </div>
          <div className="my-4 text-center text-3xl font-medium lg:text-5xl">
            Carousel for Enterprise
          </div>
          <p className="mt-4 text-center">
            Carousel builds custom software for investment bankers, consultants,
            & investors. <br />
            <br />
            Our productivity management platform enables your team to manage
            twice as <br /> many deals & clients sacrificing the speed and
            quality of deliverables.
          </p>
        </div>
        <div className="my-10 grid gap-3 lg:grid-cols-4 lg:gap-6">
          {SECTIONS.map((section, index) => (
            <div
              className={cn(
                'flex flex-col items-center justify-center rounded-2xl border px-6 py-10',
                type === 'enterprise'
                  ? 'border-white bg-primary-purple-10'
                  : 'border-[#F1F0FF] bg-white',
              )}
              key={index}
            >
              {section.icon}
              <div className="my-4 text-center text-xl font-bold lg:py-0 lg:text-2xl">
                {section.title}
              </div>
              <div className="text-center">{section.description}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center gap-3">
          <Button className="bg-gradient-to-b from-[#8479E2] to-[#6050D7] text-white">
            Get in Touch
          </Button>

          {/*TODO: Update component*/}
          {type !== 'enterprise' && (
            <Button
              className="bg-gradient-to-b from-[#8479E2] to-[#6050D7] text-white"
              onClick={() => router.push('/?type=enterprise')}
            >
              See Enterprise
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
