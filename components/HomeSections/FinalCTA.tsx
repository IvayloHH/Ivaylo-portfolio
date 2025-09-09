'use client';
import React from 'react';
import CTAButton from '../CTAButton';

const FinalCTA = () => {
  return (
    <section className="w-full bg-zinc-900/50 backdrop-blur-xs text-white px-6 md:px-16 py-32 text-center flex flex-col items-center justify-center gap-10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          You’ve seen the work. Now let’s talk about yours.
        </h2>
        <p className="text-lg md:text-2xl text-zinc-400">
          Whether you’re building from scratch or scaling what’s working,
          <br className="hidden md:block" />I bring clarity, speed, and a
          product-first mindset.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-8">
        <CTAButton
          value="Ready When You Are"
          className="w-full h-15 md:w-54 md:h-18"
          href="/contact"
        />
        <CTAButton
          value="See how I work →"
          className="w-full h-15 md:w-54 md:h-18 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white hover:ring-0"
          href="/services"
        />
      </div>
    </section>
  );
};

export default FinalCTA;
