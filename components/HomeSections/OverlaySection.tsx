'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Badge } from '../ui/badge';
import CustomButton from '../CustomButton';

const OverlaySection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth scrubbing so a fast flick doesn't skip the reveal
  const progress = useSpring(scrollYProgress, {
    // stiffness: 100,
    // damping: 30,
    // mass: 0.1,
    stiffness: 100,
    damping: 30,
    mass: 0.1,
  });
  const textScale = useTransform(progress, [0, 1], [1, 90]);
  const textScaleHelper = useTransform(progress, [0, 1], [1, 100]);
  const textXPercent = useTransform(progress, [0, 1], [0, 10]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0, 0]);

  const MotionDiv = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => (
    <motion.div
      className={className}
      style={{
        originX: 0.47,
        originY: 0.5,
        scale: textScale,
        translateX: textXPercent,
      }}
    >
      {children}
    </motion.div>
  );
  return (
    <motion.section
      style={{ opacity: bgOpacity }}
      ref={containerRef}
      className="h-[240vh] bg-zinc-300 text-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* <video
          src="/redPlanet.mp4"
          autoPlay
          muted
          loop
          className="absolute w-full h-screen -z-10"
        /> */}
        <div className="absolute inset-0 flex justify-around flex-col p-4 md:p-10">
          <div className="px-4 md:px-10 py-4 rounded-full text-muted-foreground mb-4 flex flex-col gap-4">
            <Badge variant="outline" className="hidden md:flex px-4 py-2 items-center">
              <span className="blink_me"></span>{' '}
              <span className="pl-4">NOW BOOKING — WORLDWIDE</span>
            </Badge>
            <div className="text-sm md:text-lg px-8">Web Developer & Designer</div>
          </div>

          <div className="flex flex-col">
            <MotionDiv className="md:text-4xl tracking-wider md:p-10">
              <motion.p className="p-4" style={{ scale: textScaleHelper }}>
                BETWEEN STARS AND CODE:
              </motion.p>
            </MotionDiv>
            <MotionDiv className="pointer-events-none select-none text-5xl font-extrabold font-orbitron md:text-[12vw] bg-gradient-to-br from-zinc-900 from-10% via-red-800 to-zinc-900 to-95% bg-clip-text text-transparent animate-in self-center scale-y-125">
              IVAYLOVERSE
            </MotionDiv>
            <MotionDiv className="w-full md:p-10">
              <p className="md:text-4xl p-4 md:w-2/4">
                Open to new projects worldwide
              </p>
              <p className="md:text-4xl p-4 md:w-2/4">
                From idea to launch — clean, scalable, and on time.
              </p>
              <p className="md:text-4xl p-4 md:w-2/4">
                Web apps, dashboards, and modern e-commerce built with Next.js,
                React, and TypeScript. Optimized for speed, SEO, and a great
                user experience.
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

          <div className="flex md:justify-around flex-col md:flex-row items-center">
            <div className="flex gap-4">
              <CustomButton value="Contact" />
              <CustomButton value="View Projects" />
            </div>
            <p className="text-3xl lg:text-5xl font-bold py-5 text-center">
              BUILD SOMETHING REAL
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OverlaySection;
