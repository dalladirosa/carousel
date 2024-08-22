import { Button } from '@/components/ui/button';
import { useAuthContext } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const scrolled =
  'shadow-[0px_24px_32px_0px_rgba(0,0,0,0.08),0px_16px_24px_0px_rgba(0,0,0,0.06),0px_4px_8px_0px_rgba(0,0,0,0.04),0px_0px_1px_0px_rgba(0,0,0,0.04)] px-8 py-3 rounded-full mt-6';

const Navbar = () => {
  const { isAuthenticated } = useAuthContext();
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
          <div className="mr-6 flex flex-row items-center">
            <Image
              src="/icons/carousel.svg"
              alt="carousel"
              width={32}
              height={32}
              className="mr-1 h-8 w-8"
            />
            <h1 className="text-lg font-bold">Carousel</h1>
          </div>
          <Link href="/" className="text-sm font-bold text-primary-purple-70">
            Home
          </Link>
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
            <Button variant="outline" className="transition-all">
              Sign Out
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
