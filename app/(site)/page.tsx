'use client';
import Services from '@/components/HomeSections/Services';
import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import HorizontalCards from '@/components/HorizontalCards';
import StarsBackground from '@/components/StarsBackground';

const HomePage = () => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);
  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <StarsBackground />
      <section className="text-white text-4xl my-12">
        <div className="flex flex-col max-w-[1440px] mx-auto">
          <p className="px-10">Between stars and code:</p>
          <p className="font-orbitron text-4xl sm:text-7xl md:text-[120px] lg:text-[150px] xl:text-[200px] text-center">
            IVAYLOVERSE
          </p>
          <p className="w-full flex items-end justify-end px-10">
            Build something real
          </p>
        </div>
        <div className='flex items-center justify-center mt-80'>
          <h1 className="max-w-7xl text-7xl text-gray-500/50 leading-30">
            I design and build web products that work the way they
            should—simple, fast, and clear. Former data lead turned
            product-minded developer, I turn fuzzy briefs into testable,
            maintainable code and share live previews at each milestone. Expect
            sharp interfaces, smooth flows, and transparent updates.
          </h1>
        </div>
      </section>
      <HorizontalCards />
      <Services />
    </>
  );
};
export default HomePage;
