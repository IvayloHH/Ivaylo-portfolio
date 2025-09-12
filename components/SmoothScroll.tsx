'use client';

import { useEffect, useRef, createContext, useContext } from 'react';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';

const LenisContext = createContext<React.RefObject<LenisRef | null> | null>(null);

export const useLenis = () => {
  const context = useContext(LenisContext);
  return context?.current?.lenis || null;
};

const SmoothScroll = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
    <LenisContext.Provider value={lenisRef}>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
};

export default SmoothScroll;
