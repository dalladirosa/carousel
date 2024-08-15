'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { RefObject, useEffect, useId, useState } from 'react';

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>; // Container ref
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#ffaa40',
  gradientStopColor = '#9c40ff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ['90%', '-10%'],
        x2: ['100%', '0%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      }
    : {
        x1: ['10%', '110%'],
        x2: ['0%', '100%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (let entry of entries) {
        updatePath();
      }
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'pointer-events-none absolute left-0 top-0 transform-gpu stroke-2',
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d="M 469.268 20 V 60.0059 h -439.268 C 16.7452 65.0059 6 75.751 6 89.0059 V 234.367 C 6 247.621 16.7452 258.367 34 256 H 250 H 469.268 V 310"
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d="M 469.268 20 V 60.0059 h -439.268 C 16.7452 65.0059 6 75.751 6 89.0059 V 234.367 C 6 247.621 16.7452 258.367 34 256 H 250 H 469.268 V 310"
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <rect
        width="900"
        height="1000"
        x="10"
        y="10"
        rx="20"
        ry="20"
        fill={`url(#${id})`}
      />
      <defs>
        {/*<linearGradient*/}
        {/*  className="transform-gpu"*/}
        {/*  id={id}*/}
        {/*  gradientUnits={'userSpaceOnUse'}*/}
        {/*  x1="0"*/}
        {/*  y1="0%"*/}
        {/*  // initial={{*/}
        {/*  //   x1: '0%',*/}
        {/*  //   x2: '0%',*/}
        {/*  //   y1: '0%',*/}
        {/*  //   y2: '0%',*/}
        {/*  // }}*/}
        {/*  // animate={{*/}
        {/*  //   x1: gradientCoordinates.x1,*/}
        {/*  //   x2: gradientCoordinates.x2,*/}
        {/*  //   y1: gradientCoordinates.y1,*/}
        {/*  //   y2: gradientCoordinates.y2,*/}
        {/*  // }}*/}
        {/*  // transition={{*/}
        {/*  //   delay,*/}
        {/*  //   duration,*/}
        {/*  //   ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo*/}
        {/*  //   repeat: Infinity,*/}
        {/*  //   repeatDelay: 0,*/}
        {/*  // }}*/}
        {/*>*/}
        {/*  <stop*/}
        {/*    offset="32.5%"*/}
        {/*    stopColor={gradientStopColor}*/}
        {/*    stopOpacity="0"*/}
        {/*  ></stop>*/}
        {/*  <stop offset="100%" stopColor={gradientStopColor}></stop>*/}
        {/*  <stop stopColor={gradientStartColor}></stop>*/}
        {/*  <stop stopColor={gradientStartColor} stopOpacity="0"></stop>*/}
        {/*</linearGradient>*/}

        <motion.linearGradient
          className="linear-gradient-animate transform-gpu"
          id={id}
          gradientUnits={'userSpaceOnUse'}
          initial={{
            x1: '0%',
            x2: '0%',
            y1: '0%',
            y2: '5%',
          }}
          animate={{
            x1: ['0%', '100%'],
            x2: 0,
            y1: ['0', '10%'],
            y2: ['5%', '20%'],
          }}
          transition={{
            delay,
            duration: 10,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop offset="32.5%" stop-color="#9c40ff" stop-opacity="0"></stop>
          <stop offset="100%" stop-color="#9c40ff"></stop>
          <stop stop-color="transparent"></stop>
          <stop stop-color="transparent" stop-opacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
