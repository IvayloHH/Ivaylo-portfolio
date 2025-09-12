'use client';
import { Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-zinc-900/50 backdrop-blur-xs text-zinc-100/90">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 max-w-7xl mx-auto p-6 md:p-10">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-100/90">
            Ivayloverse
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-xs">
            Full-stack developer crafting digital experiences with modern web
            technologies.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-zinc-100/90">
            Services
          </h4>
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <Link
              href="/services"
              className="text-lg md:text-xl hover:text-zinc-300 transition-colors"
            >
              Full-Stack Development
            </Link>
            <Link
              href="/services"
              className="text-lg md:text-xl hover:text-zinc-300 transition-colors"
            >
              UI/UX & Frontend
            </Link>
            <Link
              href="/services"
              className="text-lg md:text-xl hover:text-zinc-300 transition-colors"
            >
              System Optimization
            </Link>
            <Link
              href="/about"
              className="text-lg md:text-xl hover:text-zinc-300 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-zinc-100/90">
            Get In Touch
          </h4>
          <div className="flex flex-col space-y-3">
            <Link
              href="mailto:dev@ivayloverse.com"
              className="flex items-center gap-3 text-lg md:text-xl hover:text-zinc-300 transition-colors"
            >
              <Mail size={20} />
              dev@ivayloverse.com
            </Link>
            <div className="flex items-center gap-3 text-lg md:text-xl text-zinc-300">
              <MapPin size={20} />
              Sofia, Bulgaria
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-zinc-100/90">
            Connect
          </h4>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 hover:text-zinc-300 transition-all hover:scale-105"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 hover:text-zinc-300 transition-all hover:scale-105"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="/contact"
              className="p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 hover:text-zinc-300 transition-all hover:scale-105"
            >
              <MessageCircle size={24} />
            </Link>
          </div>
        </div>
      </section>
      <div className="border-t border-zinc-700/50 px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-lg text-zinc-300">
            © {currentYear} Ivaylo Hristov • Full-Stack Developer
          </p>
          <p className="text-lg text-zinc-300">Available for new projects</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
