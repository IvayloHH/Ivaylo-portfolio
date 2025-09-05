'use client';
import React from 'react';
import { Button } from '../ui/button';

const AboutDemo = () => {
  return (
    <section className="h-screen my-20 grid grid-cols-1 md:grid-cols-2 items-center py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-zinc-900  to-zinc-700 text-zinc-100">
      <div className="space-y-8 h-full flex flex-col">
        <h1 className="text-4xl md:text-6xl font-bold">
          Who’s behind Ivayloverse?
        </h1>
        <p className="text-lg md:text-2xl text-zinc-300 max-w-4xl">
          A product-minded builder who sees beyond the UI — from UX to system
          design, every decision shaped by years building for scale, speed, and
          long-term clarity.
        </p>

        <p className="text-lg md:text-xl text-zinc-400">
          Formed through real deadlines, real clients, and the kind of feedback
          you don’t forget.
        </p>

        <div className="mt-16 max-w-4xl flex flex-col justify-center items-center">
          <Button variant="default" size="lg">
            See how I work →
          </Button>
        </div>
      </div>
      <div className="h-full flex justify-center">
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-400">
          Tech Stack
        </h2>
      </div>
    </section>
    // <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-zinc-900 to-red-950 text-white">
    //   <div className="max-w-5xl mx-auto flex flex-col items-start space-y-12">
    //     <div className="space-y-4">
    //<h2 className="text-4xl md:text-6xl font-bold">
    //         Who’s behind Ivayloverse?
    //       </h2>

    //       <p className="text-lg md:text-xl text-zinc-300 max-w-3xl">
    //         A product-minded builder who sees beyond the UI — from UX to system
    //         design, every decision shaped by years building for scale, speed,
    //         and long-term clarity.
    //       </p>

    //       <p className="text-base md:text-lg text-zinc-400">
    //         Formed through real deadlines, real clients, and the kind of
    //         feedback you don’t forget.
    //       </p>

    //       <Button variant="default" size="lg">
    //         See how I work →
    //       </Button>
    //     </div>

    //     <div className="space-y-4">
    //       <h3 className="text-lg tracking-wider text-zinc-400 uppercase">
    //         Working With
    //       </h3>

    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //         className="flex flex-wrap gap-3"
    //       >
    //         {techStack.map((tech) => (
    //           <Badge
    //             key={tech}
    //             className="bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 transition"
    //           >
    //             {tech}
    //           </Badge>
    //         ))}
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default AboutDemo;
