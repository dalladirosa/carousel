'use client';

import Bank from '@/icons/bank';
import CorpFinance from '@/icons/corp_finance';
import Finance from '@/icons/finance';
import Presentation from '@/icons/presentation';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';

type NavigationsProps = React.PropsWithChildren<{
  scrollProgress: number;
  setScrollProgress: React.Dispatch<React.SetStateAction<number>>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}>;

const Navigations = ({
  scrollProgress,
  setScrollProgress,
  current,
  setCurrent,
}: NavigationsProps) => {
  const NAVIGATIONS = [
    {
      title: 'Investment Banking',
      tags: ['M&A', 'ECM', 'DCM', 'Corporate Banking', 'Private Placements'],
      icon: <Bank width={32} height={32} className="mr-3" />,
    },
    {
      title: 'Management Consulting',
      tags: [
        'Strategy',
        'Operations',
        'Technology',
        'Human Capital',
        'Risk Management',
      ],
      icon: <Presentation width={32} height={32} className="mr-3" />,
    },
    {
      title: 'Investment Management',
      tags: [
        'Private Equity',
        'Private Credit',
        'Hedge Funds',
        'Asset Managers',
      ],
      icon: <Finance width={32} height={32} className="mr-3 fill-black-30" />,
    },
    {
      title: 'Corporate Finance',
      tags: ['FP&A', 'Board Decks', 'Investor Presentations', 'M&As'],
      icon: (
        <CorpFinance width={32} height={32} className="mr-3 fill-black-30" />
      ),
    },
  ];

  const updateProgress = React.useCallback(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 10000;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsedTime = time - startTime;
      const newProgress = Math.max(-100 + (elapsedTime / duration) * 100, -100);

      setScrollProgress(newProgress);

      if (elapsedTime < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setScrollProgress(-100);
        setCurrent((prev) =>
          prev + 1 > NAVIGATIONS.length - 1 ? 0 : prev + 1,
        );
        startTime = null;

        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [current]);

  const handleClick = (index: number) => {
    setScrollProgress(-100);
    setCurrent(index);
  };

  useEffect(() => {
    const cleanup = updateProgress();
    return cleanup;
  }, [updateProgress]);

  return (
    <div className="flex flex-col gap-2">
      {NAVIGATIONS.map((nav, i) => (
        <div
          className="relative flex flex-row items-start p-4"
          key={i}
          role="button"
          onClick={() => handleClick(i)}
        >
          {nav.icon}
          <div>
            <p
              className={cn(
                'text-lg font-bold',
                current >= i ? 'text-primary-purple-80 ' : 'text-gray-990',
              )}
            >
              {nav.title}
            </p>
            <div className="mt-2 flex flex-row flex-wrap items-center gap-1">
              {nav.tags.map((tag, tagIndex) => (
                <div
                  className={cn(
                    'w-fit rounded-2xl border px-2 py-0.5 text-xs font-bold',
                    current >= i
                      ? 'border-primary-purple-30 bg-primary-purple-10 text-primary-purple-70'
                      : 'border-gray-300 bg-gray-100 text-gray-900',
                  )}
                  key={tagIndex}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div
            dir="ltr"
            className="absolute -bottom-4 left-8 h-3/5 w-0.5 overflow-hidden rounded-full bg-black-30 py-3 duration-300 ease-in-out hover:bg-slate-300 rtl:right-1.5"
            aria-hidden="true"
          >
            <div
              className="embla__progress__bar !left-0"
              style={{
                transform: `translateY(${current === i ? scrollProgress : current > i ? 0 : -100}%)`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navigations;
