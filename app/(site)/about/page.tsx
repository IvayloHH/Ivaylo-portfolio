'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';

const AboutPage = () => {
  const stackData = {
    frontend: [
      {
        name: 'Next.js 15 + TypeScript',
        impact:
          'Type-safe, server-rendered applications that load fast and scale smoothly',
      },
      {
        name: 'Tailwind CSS v4',
        impact:
          'Consistent design systems that maintain visual coherence across growth',
      },
      {
        name: 'Framer Motion',
        impact:
          'Purposeful animations that guide user behavior, not distract from it',
      },
      {
        name: 'ShadCN UI',
        impact:
          'Component systems that maintain consistency while enabling rapid iteration',
      },
    ],
    backend: [
      {
        name: 'Appwrite/Prisma + PostgreSQL',
        impact: 'Data architectures that grow with business complexity',
      },
      {
        name: 'React Hook Form + Zod',
        impact: 'Form validation that prevents user frustration and bad data',
      },
    ],
    enhancement: [
      {
        name: 'React Three Fiber',
        impact:
          "When standard UI isn't enough — immersive experiences that differentiate",
      },
    ],
  };

  const projects = [
    {
      title: 'E-commerce Platform',
      challenge: 'Custom cart logic that handles complex pricing rules',
      solution: 'Type-safe state management with optimized checkout flows',
      impact:
        'Cart abandonment reduced through intuitive UX and reliable performance',
    },
    {
      title: 'Travel Intelligence Dashboard',
      challenge: 'Real-time weather integration with secure OAuth flows',
      solution:
        'AI-assisted planning with Google APIs and Appwrite architecture',
      impact: 'Trip planning time reduced while increasing booking confidence',
    },
    {
      title: 'Document Management System',
      challenge: 'Google Drive-level functionality with custom business rules',
      solution: 'Full-stack CRUD operations with real-time sync capabilities',
      impact:
        'Seamless file operations that feel native while meeting security requirements',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100/90">
      <section className="px-6 lg:px-20 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-amber-50/90">
            Where Product Strategy Meets Technical Execution
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-100/90 max-w-4xl leading-relaxed">
            Ivayloverse transforms complex business requirements into scalable
            digital systems. Every line of code serves a business goal. Every
            design decision drives user action.
          </p>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-zinc-900/50 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-amber-50/90">
            Beyond Features: Systems Thinking
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl text-zinc-100/90 mb-8 leading-relaxed">
                Most development focuses on what to build. Ivayloverse focuses
                on how systems should work together.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-zinc-100/90 leading-relaxed">
                Product-minded development means asking the right questions:
              </p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-amber-500 mr-4 text-2xl">•</span>
                <span className="text-xl md:text-2xl lg:text-3xl text-amber-100">
                  How does this scale at 10x traffic?
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-4 text-2xl">•</span>
                <span className="text-xl md:text-2xl lg:text-3xl text-amber-100">
                  What happens when the business model evolves?
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-4 text-2xl">•</span>
                <span className="text-xl md:text-2xl lg:text-3xl text-amber-100">
                  Where will users get confused, and how do we prevent it?
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Philosophy Section */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-gradient-to-b from-zinc-950 from-30% to-red-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-amber-50/90">
            Technology Choices That Matter
          </h2>

          {/* Frontend Stack */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-rose-600">
              Frontend Architecture
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {stackData.frontend.map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-zinc-950/50 rounded-lg border-t border-rose-700/70 hover:border-amber-500/50 transition-colors shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl md:text-2xl font-medium mb-4 text-zinc-100/90">
                    {tech.name}
                  </h4>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {tech.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Stack */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-rose-600">
              Backend Systems
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {stackData.backend.map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-zinc-950/50 rounded-lg border-t border-rose-700/70 hover:border-amber-500/50 transition-colors shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl md:text-2xl font-medium mb-4 text-zinc-100/90">
                    {tech.name}
                  </h4>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {tech.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhancement Stack */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-rose-600">
              Enhancement Layers
            </h3>
            <div className="grid lg:grid-cols-1 gap-6">
              {stackData.enhancement.map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-zinc-950/50 rounded-lg border-t border-rose-700/70 hover:border-amber-500/50 transition-colors shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl md:text-2xl font-medium mb-4 text-zinc-100/90">
                    {tech.name}
                  </h4>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {tech.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Impact Stories */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-zinc-900/50 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-amber-50/90">
            Systems That Scale
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-zinc-950/50 to-zinc-900/50 rounded-lg border-t border-rose-700/70 shadow-2xl"
              >
                <h3 className="text-2xl font-semibold mb-6 text-amber-50/90">
                  {project.title}
                </h3>
                <div className="grid lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-rose-600 mb-3 uppercase tracking-wide">
                      Challenge
                    </h4>
                    <p className="text-lg md:text-xl text-zinc-100/90 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-amber-500 mb-3 uppercase tracking-wide">
                      Solution
                    </h4>
                    <p className="text-lg md:text-xl text-zinc-100/90 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-amber-100 mb-3 uppercase tracking-wide">
                      Impact
                    </h4>
                    <p className="text-lg md:text-xl text-zinc-100/90 leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-gradient-to-b from-zinc-950 from-30% to-red-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-amber-50/90">
            How Ivayloverse Works
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zinc-900">1</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-100/90">
                Discovery & Architecture
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Understanding business goals before writing code. System design
                that anticipates growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zinc-900">2</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-100/90">
                Development & Integration
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Building with proven patterns while innovating where it matters.
                Type-safe, tested, scalable.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zinc-900">3</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-100/90">
                Optimization & Evolution
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Performance monitoring, user feedback integration, iterative
                improvement cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-zinc-900/50 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-amber-50/90">
            Product-Minded Development
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid lg:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-zinc-950/30 rounded-lg border-t border-rose-700/70">
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-muted-foreground">
                  Traditional development asks:
                </h3>
                <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-100/90">
                  {'Does it work?'}
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-rose-600/10 to-amber-500/10 rounded-lg border-t border-amber-500/50">
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-amber-500">
                  Ivayloverse asks:
                </h3>
                <p className="text-2xl md:text-3xl lg:text-4xl text-amber-100">
                  {'Does it solve the business problem elegantly?'}
                </p>
              </div>
            </div>
            <div className="pt-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-amber-100 mb-6 leading-relaxed">
                Every technical decision connects to user experience.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-amber-100 mb-6 leading-relaxed">
                Every performance optimization serves business goals.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-amber-100 leading-relaxed">
                Every design pattern supports long-term maintainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 py-20 lg:py-32 bg-gradient-to-b from-zinc-950 from-30% to-red-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-amber-50/90">
            Ready to Build Systems That Scale?
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your technology strategy with product-minded development
            that delivers business results.
          </p>
          <div>
            <CTAButton
              value="Start Your Next System"
              className="w-64 h-20 text-xl"
              href="/contact"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
