import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const TABS = [
  {
    title: 'For Professionals',
    url: '/',
    value: 'professional',
  },
  {
    title: 'For Enterprise',
    url: '/?type=enterprise',
    value: 'enterprise',
  },
];

const scrolled =
  'shadow-[0px_24px_32px_0px_rgba(0,0,0,0.08),0px_16px_24px_0px_rgba(0,0,0,0.06),0px_4px_8px_0px_rgba(0,0,0,0.04),0px_0px_1px_0px_rgba(0,0,0,0.04)] px-8 py-3 rounded-full mt-6';

const MainNav = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY !== lastScrollY) {
          setIsSticky(currentScrollY > 0);
          lastScrollY = currentScrollY;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId as number);
    };
  }, []);

  const type = (
    searchParams.get('type') === null && pathname === '/'
      ? 'professional'
      : pathname
  ) as 'professional' | 'enterprise' | null;

  console.log({ type: searchParams.get('type'), pathname });

  return (
    <header
      className={cn(
        'container sticky top-0 z-[9999] bg-transparent transition-all',
        isSticky && 'px-0',
      )}
    >
      <nav
        className={cn(
          'flex w-full flex-1 flex-row items-center bg-white transition-all',
          isSticky && scrolled,
        )}
      >
        <div className="flex w-full flex-row items-center gap-6">
          <div className="flex flex-row items-center">
            <Image
              src="/icons/carousel.svg"
              alt="carousel"
              width={32}
              height={32}
              className="mr-1 h-8 w-8"
            />
            <h1 className="text-lg font-bold">Carousel</h1>
          </div>
          <div className="relative grid w-fit grid-cols-2 items-center justify-center gap-2 overflow-hidden rounded-full bg-gray-100 p-1">
            <motion.div
              className={cn(
                'absolute inset-0 w-1/2 rounded-full bg-primary-purple-10',
                pathname !== '/' && 'hidden',
              )}
              initial={false}
              animate={{ x: type === 'professional' ? 0 : '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            {TABS.map((tab) => (
              <Link
                href={tab.url}
                scroll={false}
                key={tab.title}
                className="relative"
              >
                <button
                  className="relative w-full rounded-full px-4 py-[4.5px] text-center"
                  role="button"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.p
                    animate={{
                      color: type === tab.value ? '#3B28CC' : '#1F2937',
                    }}
                    transition={{ duration: 0 }}
                    className="relative z-10 block py-[2.5px] text-base font-bold leading-normal"
                  >
                    {tab.title}
                  </motion.p>
                </button>

                {/*{type === tab.value && (*/}
                {/*  <motion.div*/}
                {/*    layoutId="clickedbutton"*/}
                {/*    transition={{*/}
                {/*      type: 'spring',*/}
                {/*      bounce: 0.3,*/}
                {/*      duration: 0.6,*/}
                {/*    }}*/}
                {/*    className="absolute inset-0 rounded-full bg-primary-purple-10"*/}
                {/*  />*/}
                {/*)}*/}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-6 transition-all">
          <div>
            {isSticky && (
              <a
                className="px-5 text-sm font-bold text-purple-70 transition-all"
                href="#"
              >
                Earn $50
              </a>
            )}
            <a
              className="px-5 text-sm font-bold text-purple-70 transition-all"
              href="#"
            >
              Request Features
            </a>
            <a
              className="px-5 text-sm font-bold text-purple-70 transition-all"
              href="#"
            >
              Get Help
            </a>
          </div>
          <div>
            {type === 'enterprise' && isSticky && (
              <Button className="mr-3 transition-all">Download</Button>
            )}
            <Button variant="outline" className="transition-all">
              Sign In
            </Button>
            {type === 'professional' && isSticky && (
              <Button className="ml-3 transition-all">Schedule a Demo</Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
