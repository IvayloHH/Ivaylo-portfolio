'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const InnerSections = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'center center'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-90deg', '0deg']);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ['center end', 'center end'],
  // });

  // const textX = useSpring(useTransform(scrollYProgress, [0, 1], [-500, 0]), {
  //   damping: 30,
  //   stiffness: 80,
  // });
  // const textOpacity = useSpring(
  //   useTransform(scrollYProgress, [0, 0.3], [0, 1]),
  //   { damping: 30, stiffness: 80 }
  // );

  // const imageX = useSpring(useTransform(scrollYProgress, [0, 1], [500, 0]), {
  //   damping: 30,
  //   stiffness: 100,
  // });
  // const imageOpacity = useSpring(
  //   useTransform(scrollYProgress, [0, 0.3], [0, 1]),
  //   { damping: 30, stiffness: 80 }
  // );
  // const bgOpacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 1]), {
  //   damping: 30,
  //   stiffness: 80,
  // });

  return (
    <motion.section
      // style={{ opacity: bgOpacity }}
      style={{ rotateY: y, scale }}
      ref={sectionRef}
      initial={{ scale: 0 }}
      className="overflow-hidden mt-[100vh] h-screen px-10 grid grid-cols-1 md:grid-cols-2 items-center bg-zinc-900/50 backdrop-blur-xs  pt-16 md:pt-48"
    >
      <motion.div
        // style={{ x: textX, opacity: textOpacity }}
        className="order-2 md:order-1 flex flex-col space-y-6 py-4 text-center"
      >
        <h1 className="text-3xl md:text-8xl font-semibold leading-tight text-zinc-100">
          Real products outgrow page builders fast.
        </h1>
        <p className="text-2xl md:text-4xl text-zinc-400 leading-relaxed">
          They need more than pretty screens — they need reliable logic,
          structured design, and decisions made with scale in mind.
        </p>
        <p className="text-2xl md:text-4xl text-zinc-400 leading-relaxed">
          <span className="font-medium text-zinc-100 italic">My role? </span>
          Making sure every layer works — today and as your product scales.
        </p>
        <motion.div className="self-center">
          <Button variant="outline">Let’s build your next thing →</Button>
        </motion.div>
      </motion.div>

      <motion.div
        // style={{ x: imageX, opacity: imageOpacity }}
        // animate={{ rotateZ: [-1, 1, -1], y: [0, 1, 0] }}
        // transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="order-1 md:order-2 flex justify-center items-center"
      >
        <Image
          src="/img101.png"
          alt="code"
          width={1000}
          height={1000}
          className="w-full max-w-xs sm:max-w-md md:max-w-[90%] rounded-xl"
        />
      </motion.div>
    </motion.section>
  );
};

export default InnerSections;
