'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Badge } from '../ui/badge';

import type { MotionValue } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

const OverlaySection = () => {
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
  const textScaleHelper = useTransform(progress, [0, 1], [1, 100]);
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
    [0.8, 0.1, -1]
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
      className="h-[240vh] text-white w-full fixed top-0 z-10"
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
          className="absolute w-full h-screen -z-10 object-cover opacity-30"
        />
        <div className="flex justify-around flex-col md:pt-30 h-screen pb-5">
          <MotionDiv
            innerOp={bgOpacityInner}
            className="px-4 md:px-10 py-4 rounded-full text-muted-foreground mb-4 flex flex-col gap-4"
          >
            <Badge
              variant="outline"
              className="hidden md:flex px-4 py-2 items-center"
            >
              <span className="blink_me"></span>{' '}
              <span className="pl-4">BOOKING WORLDWIDE</span>
            </Badge>
            <div className="flex md:hidden items-center gap-2 px-4 py-2 text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>Booking Worldwide</span>
            </div>
            <div className="text-sm md:text-lg">Web Developer & Designer</div>
          </MotionDiv>

          <div className="flex flex-col">
            <MotionDiv className="md:text-4xl tracking-wider md:p-10">
              <motion.p
                className="p-4 font-roboto-mono"
                style={{ scale: textScaleHelper, opacity: bgOpacityInner }}
              >
                BETWEEN STARS AND CODE:
              </motion.p>
            </MotionDiv>
            <MotionDiv
              className="pointer-events-none select-none text-6xl font-extrabold font-orbitron md:text-[12vw] bg-gradient-to-br from-zinc-900 from-10% via-white to-zinc-900 to-95% bg-clip-text text-transparent self-center scale-y-125
             "
              //  from-zinc-900 from-10% via-red-800 to-zinc-900 to-95%
            >
              IVAYLOVERSE
            </MotionDiv>

            <MotionDiv className="w-full md:p-10" innerOp={bgOpacityInner}>
              <p className="md:text-4xl p-4 md:w-2/4 font-inter">
                Full‑stack experiences. Designed to scale. Built to move.
              </p>
              <p className="md:text-3xl p-4 md:w-2/4 text-sm text-neutral-400 tracking-wide font-roboto-mono">
                Projects done right — and done on time.
              </p>

              {/* <div className="grid grid-cols-2 text-center md:flex gap-2 my-4 md:my-8">
                {[
                  'Landing Pages',
                  'Dashboards',
                  'E‑commerce',
                  'AI Integrations',
                ].map((label) => (
                  <span
                    key={label}
                    className="text-sm md:text-xl border border-black bg-white/5  uppercase tracking-wider rounded-full px-4 py-2"
                  >
                    {label}
                  </span>
                ))}
              </div> */}
            </MotionDiv>
          </div>

          <MotionDiv
            innerOp={bgOpacityInner}
            className="flex md:justify-around flex-col md:flex-row items-center"
          >
            <div className="flex gap-4 justify-self-start">
              {/* View Projects (primary) */}
              <button
                className="group relative px-6 py-3 rounded-full font-medium uppercase tracking-wider 
               border border-zinc-600 text-zinc-300 overflow-hidden transition-colors duration-300"
              >
                <span
                  className="absolute inset-0 w-0 bg-gradient-to-r from-zinc-600 via-zinc-900 to-red-900
                 transition-all duration-300 ease-out 
                 sm:group-hover:w-full"
                />
                <span className="relative z-10 transition-colors duration-300 sm:group-hover:text-white">
                  Contact
                </span>
              </button>

              {/* Contact (secondary) */}
              <button
                className="px-6 py-3 rounded-full font-medium uppercase tracking-wider
               border border-zinc-600 text-zinc-300 
               transition duration-300
               sm:hover:border-red-500 sm:hover:text-white sm:hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              >
                View Projects
              </button>
            </div>

            <p className="text-3xl lg:text-5xl font-bold py-5 text-center">
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
