'use client'

import React, { JSX, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


export default function BackgroundFadeOnScroll(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  // Track scroll progress of this section. When the bottom of the section hits the top of the viewport, progress = 1
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  // Map progress 0 -> 1 to bg opacity 1 -> 0
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Tall section to demonstrate the fade while scrolling */}
      <section ref={sectionRef} className="relative h-[220vh]">
        {/* Sticky viewport so the overlay/fade stays put while progress advances */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Black background that fades to transparent as you scroll */}
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: bgOpacity, willChange: 'opacity' }}
          />

          {/* Put your content ABOVE the fading bg. You can see the underlying main gradient reveal as the bg fades. */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="text-7xl font-extrabold tracking-tight md:text-[12vw]">IVAYLOVERSE</h1>
          </div>
        </div>
      </section>

      {/* More page content below to show that the section is now transparent */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-3xl font-semibold">Revealed Section</h2>
          <p className="text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida sapien id ultricies facilisis.
            Arcu nibh luctus augue, accumsan tellus risus eget nisl. Sed suscipit dolor convallis, placerat mi mauris
            aliquam. Fermentum pharetra, dictum augue, commodo ridiculus mus, ligula sodales parturient. Curabitur
            pharetra lacinia metus ac congue.
          </p>
        </div>
      </section>
    </main>
  )
}
