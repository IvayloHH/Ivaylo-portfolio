'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion';

import type { MotionValue } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';
import CTAButton from '../CTAButton';

const OverlaySection = () => {
  const { scrollY } = useScroll();
  const [isBehind, setIsBehind] = useState(false);

  useMotionValueEvent(scrollY, 'change', (value) => {
    const previous = scrollY.getPrevious();
    setIsBehind(value > (previous || 0) && value > 150);
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth scrubbing so a fast flick doesn't skip the reveal
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.1,
  });
  const textScale = useTransform(progress, [0, 1], [1, 90]);
  const textXPercent = useTransform(progress, [0, 1], [0, 10]);
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [1, 1, 0, -1]
  );
  const bgOpacityInner = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0, -1]);
  const bgOpacityVideo = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [1, 0.3, -1]
  );

  const MotionDiv = ({
    children,
    className,
    innerOp,
  }: {
    children: React.ReactNode;
    className?: string;
    innerOp?: MotionValue<number>;
  }) => (
    <motion.div
      className={className}
      style={{
        originX: 0.47,
        originY: 0.5,
        scale: textScale,
        translateX: textXPercent,
        opacity: innerOp,
      }}
    >
      {children}
    </motion.div>
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 4.8) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <motion.section
      style={{ opacity: bgOpacity }}
      ref={containerRef}
      className={`h-[240vh] overflow-hidden text-zinc-100 w-full fixed top-0 ${
        isBehind ? '-z-10' : 'z-0'
      }`}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.video
          style={{ opacity: bgOpacityVideo }}
          ref={videoRef}
          src="/I_logo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full -z-40 object-cover sm:max-h-none max-h-[100vh]"
        />
        <div className="flex justify-center flex-col h-4/3 pb-5 space-y-6 md:space-y-20 lg:space-y-24">
          <div className="flex flex-col">
            <MotionDiv
              className="text-6xl font-extrabold font-orbitron md:text-[12vw] bg-gradient-to-br from-zinc-700 from-10% via-white to-zinc-700 to-95% bg-clip-text text-transparent self-center scale-y-125 pointer-events-none select-none
             "
              //  from-zinc-900 from-10% via-red-800 to-zinc-900 to-95%
            >
              IVAYLOVERSE
            </MotionDiv>

            <MotionDiv className="w-full pt-2 md:p-10" innerOp={bgOpacityInner}>
              <p className="text-2xl md:text-3xl lg:text-4xl p-4 font-inter">
                Full‑stack experiences. Designed to scale. Built to move.
              </p>
              <p className="text-lg md:text-2xl lg:text-3xl p-4 text-neutral-400 tracking-wide font-roboto-mono">
                Projects done right — and done on time.
              </p>
            </MotionDiv>
          </div>
          <MotionDiv
            innerOp={bgOpacityInner}
            className="max-sm:pt-10 px-20 flex md:justify-between flex-col-reverse md:flex-row items-center"
          >
            <div className="flex gap-8">
              <CTAButton
                value="Get in touch"
                className="text-sm w-30 h-13 md:w-48 md:h-18"
                href="/contact"
              />
              <CTAButton
                value="View Projects"
                className="text-sm w-30 h-13 md:w-48 md:h-18 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white"
                href="/projects"
              />
            </div>
            <p className="text-xl md:text-2xl lg:text-5xl font-semibold tracking-wide py-5 text-zinc-100">
              BUILD SOMETHING REAL
            </p>
          </MotionDiv>
          <motion.div
            style={{ opacity: bgOpacityInner }}
            className="hidden md:flex uppercase flex-col justify-center items-center w-1/8"
          >
            <p>Scroll to Explore</p>
            <ChevronsDown className="animate-bounce w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OverlaySection;
