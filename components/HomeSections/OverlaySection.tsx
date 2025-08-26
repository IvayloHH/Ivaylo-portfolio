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
  const textXPercent = useTransform(progress, [0, 1], [0, 10]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0, 0]);
  return (
    <motion.section
      style={{ opacity: bgOpacity }}
      ref={containerRef}
      className="h-[240vh] bg-black text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="fixed left-[clamp(100px,3vw,40px)] top-[clamp(12px,3vw,40px)] select-none uppercase tracking-[0.08em] text-[12px] text-white/70 border border-white/15 rounded-full bg-white/5 backdrop-blur px-3 py-2">
          <Badge
            variant="default"
            className="md:px-8 md:py-4 rounded-full text-xl text-muted-foreground flex justify-between items-center"
          >
            <span className="blink_me"></span>{' '}
            <span className="pl-4">NOW BOOKING — WORLDWIDE</span>
          </Badge>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl md:text-4xl tracking-wider p-4 text-gray-100/70 w-[85vw] text-center">
            BETWEEN STARS AND CODE:
          </div>
          <motion.p
            className="pointer-events-none select-none text-6xl font-extrabold font-orbitron leading-none md:text-[11vw]"
            style={{
              originX: 0.47,
              originY: 0.5,
              scale: textScale,
              translateX: textXPercent,
            }}
          >
            IVAYLOVERSE
          </motion.p>

          <div className="w-full md:w-[85vw] flex flex-col mt-10 space-y-4">
            <p className="text-2xl md:text-4xl p-4 text-gray-100/70 leading-10">
              Open to new projects worldwide — I build fast, polished web apps
              that leave a mark.
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start w-full flex-wrap gap-2">
              {[
                'Landing Pages',
                'Dashboards',
                'E‑commerce',
                'AI Integrations',
              ].map((label) => (
                <span
                  key={label}
                  className="border border-white/15 bg-white/5 text-white/70 uppercase tracking-wider rounded-full px-10 py-4"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col md:flex-row mt-20 w-full items-center justify-center">
              <CustomButton />
              <p className="text-3xl lg:text-6xl md:text-4xl font-bold self-center md:self-end w-full py-5 text-center md:text-end">
                BUILD SOMETHING REAL
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OverlaySection;
