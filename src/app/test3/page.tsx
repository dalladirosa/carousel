'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

function Page() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener('mousemove', updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          'mousemove',
          updateMousePosition,
        );
      }
    };
  }, []);
  let maskSize = isHovered ? 40 : 40;

  return (
    <div className="flex h-screen flex-col items-center">
      <div className="text-4xl font-medium text-[#111827]">
        software{' '}
        <div ref={containerRef} className="grid">
          <motion.div
            className="z-20 will-change-transform [grid-area:1/1] [mask-image:url(/icons/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
            animate={{
              WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
                mousePosition.y - maskSize / 2
              }px`,
              WebkitMaskSize: `${maskSize}px`,
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
          >
            <span className="bg-clip-text text-transparent [background-image:linear-gradient(180deg,#6050D7_0%,#E3E0FB_100%)] [grid-area:1/1] [text-stroke:1px_#fff]">
              super-powers
            </span>
          </motion.div>

          <div className="text-purple-40 [grid-area:1/1]">super-powers</div>
        </div>
      </div>
    </div>
  );
}

export default Page;
