'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

function Page() {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div className="flex h-screen flex-col items-center">
      <div className="text-4xl font-medium text-[#111827]">
        software{' '}
        <div className="grid">
          <span
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onMouseMove={mouseMoveHandler}
            onTouchStart={mouseEnterHandler}
            onTouchEnd={mouseLeaveHandler}
            onTouchMove={touchMoveHandler}
            ref={cardRef}
            className={cn(
              'relative overflow-hidden text-purple-40 [grid-area:1/1]',
            )}
          >
            super-powers
          </span>{' '}
          <motion.div
            style={{
              width: '100%',
            }}
            animate={
              isMouseOver
                ? {
                    opacity: widthPercentage > 0 ? 1 : 0,
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
                : {
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
            }
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="z-20 grid will-change-transform [grid-area:1/1]"
          >
            <span className="bg-clip-text text-transparent [background-image:linear-gradient(180deg,#6050D7_0%,#E3E0FB_100%)] [grid-area:1/1]">
              super-powers
            </span>
            <span
              aria-hidden="true"
              className="bg-clip-text text-transparent [background-image:linear-gradient(180deg,#6050D7_0%,#E3E0FB_100%)] [filter:blur(clamp(30px,2vw,60px))_saturate(2)] [grid-area:1/1]"
            >
              super-powers
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page;
