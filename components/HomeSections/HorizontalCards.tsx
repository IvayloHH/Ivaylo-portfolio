'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    title: 'Title 1',
    id: 1,
  },
  {
    title: 'Title 2',
    id: 2,
  },
  {
    title: 'Title 3',
    id: 3,
  },
  {
    title: 'Title 4',
    id: 4,
  },
  {
    title: 'Title 5',
    id: 5,
  },
  {
    title: 'Title 6',
    id: 6,
  },
  {
    title: 'Title 7',
    id: 7,
  },
];

const HorizontalCards = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['60%', '-100%']);
  return (
    <section ref={targetRef} className="h-[500vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                // h-[650px] w-[550px]
                // h-[65vh] w-[35vw]
                className="group relative h-[35vh] w-[65vw] md:h-[65vh] md:w-[35vw] rounded-lg overflow-hidden border mx-40 bg-rose-950"
              >
                <div
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                ></div>
                <div className="absolute inset-0 z-10 grid place-content-center">
                  <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalCards;
