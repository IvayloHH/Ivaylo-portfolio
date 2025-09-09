'use client';
import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const paragraph =
  'A product-minded builder who sees beyond the UI — from UX to system design, every decision shaped by years building for scale, speed, and long-term clarity.';

const AboutDemo = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = paragraph.split(' ');

  const Characters = ({
    children,
    range,
  }: {
    children: string;
    range: number[];
  }) => {
    const opacity = useTransform(scrollYProgress, range, [0, 1]);
    return (
      <span>
        <span className="absolute opacity-[0.3]">{children}</span>
        <motion.span style={{ opacity }}>{children}</motion.span>
      </span>
    );
  };

  const Word = ({ children, range }: { children: string; range: number[] }) => {
    const characters = children.split('');
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className="mr-4 mt-3 relative">
        {characters.map((character, idx) => {
          const start = range[0] + step * idx;
          const end = range[0] + step * (idx + 1);
          return (
            <Characters key={idx} range={[start, end]}>
              {character}
            </Characters>
          );
        })}
      </span>
    );
  };

  return (
    <section className="h-full md:min-h-[120vh] py-20 px-10 lg:px-20">
      <div className="md:p-28 text-zinc-100 font-extrabold">
        <h1 className="text-zinc-400 text-5xl md:text-6xl mb-15 md:mb-25 font-bold">
          Who’s behind Ivayloverse?
        </h1>
        <p
          ref={element}
          className="flex flex-wrap text-4xl md:text-7xl 2xl:text-8xl text-zinc-100 font-semibold leading-8 md:leading-25 tracking-wider"
        >
          {words.map((word, idx) => {
            const start = idx / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={idx} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
        <p className="mt-10 text-lg md:text-3xl text-zinc-400">
          Formed through real deadlines, real clients, and the kind of feedback
          you don’t forget.
        </p>
      </div>
    </section>
  );
};

export default AboutDemo;
