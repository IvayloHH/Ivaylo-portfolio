'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';

const FinalCTA = () => {
  return (
    <section className="py-20 px-6 bg-transparent text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let’s build something real.
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          {
            'Got an idea? Let’s shape it together into a motion-first product with scalable code and unforgettable experience.'
          }
        </p>
        <Link href="/start">
          <Button className="text-base">Start Your Project</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
