'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/CTAButton';

const ServicesPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Services data
  const services = [
    {
      id: 'frontend',
      icon: <Code2 size={32} className="text-rose-500" />,
      title: 'Frontend Development',
      description:
        'Modern, responsive user interfaces built with cutting-edge technologies and design systems.',
      features: [
        'React, Next.js 15 & TypeScript',
        'Responsive design & animations',
        'Component libraries & design systems',
      ],
    },
    {
      id: 'backend',
      icon: <Database size={32} className="text-rose-500" />,
      title: 'Backend Development',
      description:
        'Scalable server architectures and APIs that power your applications with reliability.',
      features: [
        'REST & GraphQL APIs',
        'Database design & optimization',
        'Authentication & security',
      ],
    },
    {
      id: 'fullstack',
      icon: <Zap size={32} className="text-rose-500" />,
      title: 'Full-Stack Solutions',
      description:
        'End-to-end development from concept to deployment with seamless integration.',
      features: [
        'Complete application development',
        'Third-party integrations',
        'Performance optimization',
      ],
    },
    {
      id: 'mobile',
      icon: <Smartphone size={32} className="text-rose-500" />,
      title: 'Mobile Development',
      description:
        'Cross-platform mobile applications that deliver native performance and user experience.',
      features: [
        'React Native development',
        'iOS & Android compatibility',
        'App store deployment',
      ],
    },
    {
      id: 'ui-ux',
      icon: <Palette size={32} className="text-rose-500" />,
      title: 'UI/UX Design',
      description:
        'User-centered design that converts visitors into customers through strategic experiences.',
      features: [
        'User interface design',
        'Prototyping & wireframing',
        'User experience optimization',
      ],
    },
    {
      id: 'consulting',
      icon: <Shield size={32} className="text-rose-500" />,
      title: 'Technical Consulting',
      description:
        'Strategic guidance on technology decisions, architecture, and best practices.',
      features: [
        'Technology stack recommendations',
        'Code reviews & audits',
        'Performance consulting',
      ],
    },
  ];

  // Process timeline data
  const processSteps = [
    {
      number: 1,
      title: 'Discovery',
      description:
        'Understanding your business goals and technical requirements.',
      tasks: [
        'Stakeholder interviews & requirement gathering',
        'Market research & competitor analysis',
        'Technical feasibility assessment',
        'Project scope & timeline definition',
        'Budget estimation & proposal creation',
      ],
    },
    {
      number: 2,
      title: 'Planning',
      description: 'Creating a detailed roadmap and technical architecture.',
      tasks: [
        'System architecture design',
        'Technology stack selection',
        'Database schema planning',
        'API design & documentation',
        'Development timeline creation',
      ],
    },
    {
      number: 3,
      title: 'Design',
      description: 'Crafting user experiences and visual interfaces.',
      tasks: [
        'User journey mapping',
        'Wireframing & prototyping',
        'UI design & style guides',
        'Responsive design planning',
        'Design system development',
      ],
    },
    {
      number: 4,
      title: 'Development',
      description:
        'Building robust applications with clean, maintainable code.',
      tasks: [
        'Frontend development & styling',
        'Backend API development',
        'Database implementation',
        'Third-party integrations',
        'Code testing & quality assurance',
      ],
    },
    {
      number: 5,
      title: 'Testing',
      description: 'Ensuring reliability, performance, and user satisfaction.',
      tasks: [
        'Unit & integration testing',
        'Performance optimization',
        'Security vulnerability testing',
        'Cross-browser compatibility',
        'User acceptance testing',
      ],
    },
    {
      number: 6,
      title: 'Launch',
      description: 'Deploying to production and ongoing support.',
      tasks: [
        'Production deployment setup',
        'Domain configuration & SSL',
        'Monitoring & analytics setup',
        'Documentation & training',
        'Ongoing maintenance & support',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100/90">
      {/* Hero Section */}
      <section className="px-6 lg:px-20 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 text-amber-50/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Services That Scale Your Vision
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-zinc-100/90 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From concept to deployment, we build digital experiences that drive
            business results.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-zinc-900/50 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-16 text-amber-50/90 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Deliver
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group p-8 bg-gradient-to-br from-zinc-950/50 to-zinc-900/50 rounded-lg border-t border-rose-700/70 hover:border-amber-500/50 shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="mb-6 p-3 bg-zinc-800/50 rounded-lg w-fit group-hover:bg-zinc-700/50 transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-zinc-100/90 group-hover:text-amber-50/90 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-amber-500 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle
                          size={16}
                          className="text-rose-500 mt-1 flex-shrink-0"
                        />
                        <span className="text-zinc-100/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-700 hover:to-amber-600 text-white border-0 group">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-gradient-to-b from-zinc-950 from-30% to-red-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-16 text-amber-50/90 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Work
          </motion.h2>

          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {processSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-rose-600 to-amber-500 text-white'
                    : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 hover:text-zinc-100'
                }`}
              >
                {step.number}. {step.title}
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-800/30 rounded-lg p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full mb-6">
                <span className="text-2xl font-bold text-white">
                  {processSteps[activeStep].number}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-amber-50/90">
                {processSteps[activeStep].title}
              </h3>
              <p className="text-xl md:text-2xl text-zinc-100/90 leading-relaxed max-w-3xl mx-auto">
                {processSteps[activeStep].description}
              </p>
            </div>

            {/* Tasks List */}
            <div className="max-w-4xl mx-auto">
              <h4 className="text-lg font-semibold text-amber-500 mb-6 text-center uppercase tracking-wide">
                What We Do In This Phase
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {processSteps[activeStep].tasks.map((task, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-zinc-950/30 rounded-lg"
                  >
                    <CheckCircle
                      size={20}
                      className="text-rose-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-zinc-100/90">{task}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 py-20 lg:py-32 bg-zinc-900/50 backdrop-blur-xs">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-8 text-amber-50/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-zinc-100/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let’s discuss how we can bring your vision to life with cutting-edge
            technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CTAButton
              value="Get Started Today"
              className="w-64 h-20 text-xl"
              href="/contact"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
