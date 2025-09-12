'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MessageCircle,
  Zap,
  Clock,
  CheckCircle2,
  ArrowDown,
  MapPin,
  Mail,
  Calendar,
} from 'lucide-react';
import ContactForm from '@/components/ContactComponents/ContactForm';

const ContactFormPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const benefits = [
    {
      icon: <Zap className="text-rose-500" size={24} />,
      title: 'Quick Response',
      description: 'Typically respond within 24 hours',
    },
    {
      icon: <CheckCircle2 className="text-rose-500" size={24} />,
      title: 'Free Consultation',
      description: 'No-obligation project discussion',
    },
    {
      icon: <Clock className="text-rose-500" size={24} />,
      title: 'Flexible Timeline',
      description: 'Adaptable to your project needs',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24h', label: 'Average Response Time' },
    { number: '5★', label: 'Quality Rating' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  } as const;

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10] as number[],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  } as const;

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-zinc-900 text-zinc-100/90 overflow-hidden"
    >
      {/* Hero Section with Parallax */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-6 lg:px-20"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-600/20 to-amber-500/20 rounded-full blur-xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-amber-500/10 to-rose-600/10 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-rose-500/30 to-amber-400/30 rounded-full blur-lg"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 4 }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-rose-600 to-amber-500 rounded-full mb-8">
              <MessageCircle size={40} className="text-white" />
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-8xl font-bold mb-8 text-amber-50/90"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let’s Build Something
            <span className="block bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-zinc-100/90 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform your vision into reality with cutting-edge technology and
            strategic development.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-4"
            >
              <span className="text-lg text-zinc-400">Start Your Project</span>
              <ArrowDown size={24} className="text-rose-500" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-zinc-900/50 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-16 text-amber-50/90 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Ivayloverse?
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-gradient-to-br from-zinc-950/50 to-zinc-900/50 rounded-lg border-t border-rose-700/70 hover:border-amber-500/50 transition-colors shadow-2xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-800/50 rounded-full mb-6 group-hover:bg-zinc-700/50 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-zinc-100/90 group-hover:text-amber-50/90 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-zinc-950/30 rounded-lg"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-zinc-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Expectations */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-gradient-to-b from-zinc-950 from-30% to-red-950">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-16 text-amber-50/90 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What to Expect
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Process */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-zinc-100/90">
                    Initial Discussion
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Share your project vision, goals, and requirements. We’ll
                    discuss timeline, budget, and technical approach.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-zinc-100/90">
                    Proposal & Planning
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Receive a detailed proposal with project scope, timeline,
                    and investment. We’ll refine the plan together.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-zinc-100/90">
                    Development & Launch
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Regular updates throughout development with iterative
                    feedback and testing until successful launch.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-800/30 rounded-lg p-8"
            >
              <h3 className="text-3xl font-bold mb-8 text-amber-50/90">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-rose-500" size={24} />
                  <div>
                    <p className="text-zinc-300 text-sm">Email</p>
                    <p className="text-xl text-zinc-100/90">
                      dev@ivayloverse.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-rose-500" size={24} />
                  <div>
                    <p className="text-zinc-300 text-sm">Location</p>
                    <p className="text-xl text-zinc-100/90">Sofia, Bulgaria</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Calendar className="text-rose-500" size={24} />
                  <div>
                    <p className="text-zinc-300 text-sm">Availability</p>
                    <p className="text-xl text-zinc-100/90">
                      Currently accepting new projects
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="text-rose-500" size={24} />
                  <div>
                    <p className="text-zinc-300 text-sm">Response Time</p>
                    <p className="text-xl text-zinc-100/90">
                      Typically within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-zinc-900/50 backdrop-blur-xs">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-amber-50/90">
              Ready to Start Your Project?
            </h2>
            <p className="text-2xl md:text-3xl text-zinc-100/90 leading-relaxed">
              Fill out the form below and let’s discuss how we can bring your
              vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-zinc-950/50 to-zinc-900/50 rounded-lg border-t border-rose-700/70 p-8 shadow-2xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactFormPage;
