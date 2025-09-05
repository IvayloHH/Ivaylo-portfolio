'use client';
import { useEffect } from 'react';

export function ViewportHeightFix() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH(); // Set once

    // Recalculate on resize, orientation change, AND scroll
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    window.addEventListener('scroll', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
      window.removeEventListener('scroll', setVH);
    };
  }, []);

  return null;
}
