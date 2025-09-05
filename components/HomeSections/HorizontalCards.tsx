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

  const x = useTransform(scrollYProgress, [0, 1], ['40%', '-100%']);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  return (
    <section className=" bg-transparent">
      <div className="h-[500vh]" ref={targetRef}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute inset-40 text-5xl text-zinc-400 w-full pl-28"
          >
            RECENT PROJECTS
          </motion.div>
          <motion.div style={{ x }} className="flex gap-4">
            {PROJECT_CARDS.map((card) => (
              <div
                key={card.id}
                // h-[650px] w-[550px]
                // h-[65vh] w-[35vw]
                className={`group relative h-[35vh] w-[65vw] md:h-[65vh] md:w-[35vw] rounded-lg overflow-hidden border mx-40 ${card.bgColor}`}
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
                  <p className="bg-gradient-to-br from-zinc-900/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
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
