import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const MainNav = () => {
  return (
    <header className="container grid grid-cols-3 py-4">
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
      <div className="flex flex-row items-center justify-center gap-3">
        <a className="text-sm font-bold text-purple-70" href="#">
          Request Features
        </a>
        <a className="text-sm font-bold text-purple-70" href="#">
          Get Help
        </a>
      </div>
      <div className="flex flex-row items-center justify-end gap-3">
        <Button>Download</Button>
        <Button variant="outline">Schedule a Demo</Button>
      </div>
    </header>
  );
};

export default MainNav;
