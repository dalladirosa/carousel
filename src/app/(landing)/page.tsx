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
import React, { Suspense, useEffect, useRef, useState } from 'react';

// const FAQS = [
//   {
//     title:
//       'How does Carousel integrate with my current PowerPoint and Excel workflows?',
//     description:
//       "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
//   },
//   {
//     title: 'Can Carousel help me manage changes when working with large teams?',
//     description:
//       "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
//   },
//   {
//     title:
//       "How does Carousel's change tracking improve over the built-in version history in Office 365?",
//     description:
//       "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
//   },
//   {
//     title:
//       'I’m working on sensitive decks & models. Is my data secure when using Carousel?',
//     description:
//       "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
//   },
//   {
//     title:
//       'How can Carousel reduce errors and improve the accuracy of our deliverables?',
//     description:
//       "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
//   },
//   {
//     title:
//       'What are the system requirements for Carousel, and is there a trial version available?',
//     description:
//       "Carousel effortlessly blends into your existing PowerPoint and Excel routines. Once installed, it operates quietly in the background, automatically logging every change you make as soon as you save your file. This means there's no additional steps required from you to start tracking changes.",
//   },
// ];
//
// const BoxWithSvg = () => {
//   const boxRef = useRef(null);
//   const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
//
//   useEffect(() => {
//     // Update the size of the box
//     const updateSize = () => {
//       if (boxRef.current) {
//         setBoxSize({
//           width: boxRef.current.offsetWidth,
//           height: boxRef.current.offsetHeight,
//         });
//       }
//     };
//
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//
//   return (
//     <div style={{ position: 'relative', display: 'inline-block' }}>
//       <svg
//         width={boxSize.width}
//         height={boxSize.height}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           pointerEvents: 'none',
//         }}
//       >
//         <defs>
//           <mask id="mask" x="0" y="0" width="100%" height="100%">
//             <rect
//               x="0"
//               y="0"
//               width="100%"
//               height="100%"
//               fill="white"
//               stroke="black"
//               strokeWidth="10"
//             />
//           </mask>
//         </defs>
//         <rect
//           x="0"
//           y="0"
//           width="100%"
//           height="100%"
//           fill="none"
//           stroke="black"
//           strokeWidth="10"
//           mask="url(#mask)"
//         />
//       </svg>
//       <div
//         ref={boxRef}
//         style={{
//           width: '300px', // Example width
//           height: '200px', // Example height
//           backgroundColor: 'lightblue',
//         }}
//       >
//         Your Content
//       </div>
//     </div>
//   );
// };
//
// const DynamicSVGBox = () => {
//   const boxRef = useRef(null);
//   const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
//
//   useEffect(() => {
//     if (boxRef.current) {
//       const { offsetWidth, offsetHeight } = boxRef.current;
//       setBoxSize({ width: offsetWidth, height: offsetHeight });
//     }
//   }, []);
//
//   return (
//     <div
//       style={{
//         position: 'relative',
//         width: '50%',
//         height: '200px',
//         margin: '50px auto',
//       }}
//     >
//       <svg
//         width={boxSize.width}
//         height={boxSize.height}
//         viewBox={`0 0 ${boxSize.width} ${boxSize.height}`}
//         style={{ position: 'absolute', top: 0, left: 0 }}
//       >
//         <rect
//           x="0"
//           y="0"
//           width={boxSize.width}
//           height={boxSize.height}
//           fill="none"
//           stroke="black"
//           strokeWidth="2"
//           mask="url(#mask)"
//         />
//         <defs>
//           <mask id="mask">
//             {/* Customize your mask here */}
//             <rect x="0" y="0" width="100%" height="100%" fill="white" />
//           </mask>
//         </defs>
//       </svg>
//       <div
//         ref={boxRef}
//         style={{ width: '100%', height: '100%', backgroundColor: 'lightblue' }}
//       >
//         Test
//       </div>
//     </div>
//   );
// };
//
// const SVGMask = () => (
//   <svg width="0" height="0">
//     <defs>
//       <mask id="rectangleMask">
//         <rect x="0" y="0" width="200%" height="100%" fill="white">
//           <animate
//             attributeName="x"
//             values="-200%;0"
//             dur="2s"
//             repeatCount="indefinite"
//           />
//         </rect>
//         <rect x="0" y="0" width="200%" height="100%" fill="black">
//           <animate
//             attributeName="x"
//             values="-150%;50%"
//             dur="2s"
//             repeatCount="indefinite"
//           />
//         </rect>
//       </mask>
//     </defs>
//   </svg>
// );
//
// const WrappedBox = ({ children }) => {
//   const boxRef = useRef(null);
//   const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
//
//   useEffect(() => {
//     const updateSize = () => {
//       if (boxRef.current) {
//         setBoxSize({
//           width: boxRef.current.offsetWidth,
//           height: boxRef.current.offsetHeight,
//         });
//       }
//     };
//
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//
//   return (
//     <div className="wrapped-box-container">
//       <svg
//         width={boxSize.width + 20}
//         height={boxSize.height + 20}
//         className="svg-wrapper"
//       >
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="white" stopOpacity="0">
//               <animate
//                 attributeName="offset"
//                 values="0;1"
//                 dur="2s"
//                 repeatCount="indefinite"
//               />
//             </stop>
//             <stop offset="100%" stopColor="white" stopOpacity="1">
//               <animate
//                 attributeName="offset"
//                 values="0;1"
//                 dur="2s"
//                 repeatCount="indefinite"
//               />
//             </stop>
//           </linearGradient>
//           <mask id="mask">
//             <rect width="100%" height="100%" fill="url(#gradient)" />
//           </mask>
//         </defs>
//         <rect
//           x="1"
//           y="1"
//           width={boxSize.width + 18}
//           height={boxSize.height + 18}
//           className="animated-rectangle"
//           mask="url(#mask)"
//         />
//       </svg>
//       <div ref={boxRef} className="box">
//         {children}
//       </div>
//     </div>
//   );
// };
//
// const DynamicSVGWrapper = ({ children }) => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const boxRef = useRef(null);
//
//   useEffect(() => {
//     const updateDimensions = () => {
//       if (boxRef.current) {
//         const { width, height } = boxRef.current.getBoundingClientRect();
//         setDimensions({ width, height });
//       }
//     };
//
//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);
//
//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []);
//
//   const padding = 10;
//   const lineHeight = 20;
//   const borderRadius = 2; // Added border radius
//
//   return (
//     <div className="relative inline-block">
//       <svg
//         width={dimensions.width + padding * 2}
//         height={dimensions.height + padding * 2}
//         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded"
//       >
//         <defs>
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//           <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
//             {/*<stop offset="0%" stopColor="#00ff00" stopOpacity="0" />*/}
//             <stop offset="50%" stopColor="#00ff00" stopOpacity="1" />
//             {/*<stop offset="100%" stopColor="#00ff00" stopOpacity="0" />*/}
//           </linearGradient>
//         </defs>
//         {/* Background rectangle */}
//         <rect
//           x={padding}
//           y={padding}
//           width={dimensions.width}
//           height={dimensions.height}
//           fill="none"
//           stroke="#00ff00"
//           strokeWidth="2"
//           strokeOpacity="0.2"
//           rx={borderRadius}
//           ry={borderRadius}
//         />
//         {/* Animated paths */}
//         <path
//           d={`M${padding + dimensions.width / 2} 0
//              V${padding + borderRadius}
//              Q${padding} ${padding} ${padding} ${padding + borderRadius}
//              V${dimensions.height + padding - borderRadius}
//              Q${padding} ${dimensions.height + padding} ${padding + borderRadius} ${dimensions.height + padding}
//              H${padding + dimensions.width / 2}
//              V${dimensions.height + padding * 2}`}
//           fill="none"
//           stroke="url(#grad)"
//           strokeWidth="2"
//           filter="url(#glow)"
//           className="animate-glow"
//         />
//         <path
//           d={`M${padding + dimensions.width / 2} 0
//              V${padding + borderRadius}
//              Q${padding + dimensions.width} ${padding} ${padding + dimensions.width} ${padding + borderRadius}
//              V${dimensions.height + padding - borderRadius}
//              Q${padding + dimensions.width} ${dimensions.height + padding} ${padding + dimensions.width - borderRadius} ${dimensions.height + padding}
//              H${padding + dimensions.width / 2}
//              V${dimensions.height + padding * 2}`}
//           fill="none"
//           stroke="url(#grad)"
//           strokeWidth="2"
//           filter="url(#glow)"
//           className="animate-glow"
//         />
//       </svg>
//       <div ref={boxRef} className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );
// };

export default function Home() {
  return (
    <Suspense>
      {/*<div className="p-8">*/}
      {/*  <div className="border-black flex h-[500px] w-[500px] border">*/}
      {/*    <div className="test-10 flex h-full w-full self-stretch">*/}
      {/*      <div className="h-full w-full bg-black-90 text-white">test</div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="p-8">*/}
      {/*  <DynamicSVGWrapper>*/}
      {/*    <div className="h-[500px] w-[500px] rounded bg-blue-200 p-4">*/}
      {/*      <h2 className="mb-2 text-xl font-bold">Dynamic Box Content</h2>*/}
      {/*      <p>This content can change size, and the SVG will adapt!</p>*/}
      {/*      <p>Now with glowing vertical lines at the top and bottom.</p>*/}
      {/*    </div>*/}
      {/*  </DynamicSVGWrapper>*/}
      {/*</div>*/}

      {/*<div className="p-8">*/}
      {/*  <WrappedBox>*/}
      {/*    <h2>Dynamic Content</h2>*/}
      {/*    <p>This box will be wrapped with an animated rectangle.</p>*/}
      {/*  </WrappedBox>*/}
      {/*</div>*/}

      {/*<div className="p-8">*/}
      {/*  <BoxWithSvg />*/}
      {/*</div>*/}

      {/*<div className="p-8">*/}
      {/*  <DynamicSVGBox />*/}
      {/*</div>*/}

      <main className="flex min-h-screen flex-col items-center gap-10">
        <MainNav />

        <HeroSection />

        <ProtectedSection type="professional">
          <FeaturesSection />
        </ProtectedSection>

        <ProtectedSection type="enterprise">
          <SolutionsSection />
        </ProtectedSection>

        <ProtectedSection type="enterprise">
          <EnterpriseSection type="enterprise" />
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
