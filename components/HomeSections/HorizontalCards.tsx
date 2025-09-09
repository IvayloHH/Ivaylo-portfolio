'use client';
import { PROJECT_CARDS } from '@/lib/constants';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const HorizontalCards = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['50%', '-100%']);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  return (
    <section className="bg-transparent">
      <div className="h-[500vh]" ref={targetRef}>
        <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute top-20 left-10 right-10 md:inset-20 lg:inset-30 text-4xl md:text-5xl text-zinc-400 w-full md:pl-28"
          >
            RECENT PROJECTS
          </motion.div>
          <motion.div style={{ x }} className="flex gap-4">
            {PROJECT_CARDS.map((card) => (
              <div
                key={card.id}
                className="group relative h-[45vh] w-[80vw] md:h-[50vh] md:w-[30vw] rounded-lg overflow-hidden border mx-10 md:mx-40"
              >
                <div
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                >
                  <Image src={card.image} alt={card.title} fill />
                </div>

                <div className="absolute inset-0 z-10 grid place-content-end">
                  <p className="bg-gradient-to-br from-zinc-900/20 to-white/0 p-8 text-3xl xl:text-5xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCards;
