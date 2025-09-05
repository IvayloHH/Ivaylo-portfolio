'use client';
import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-zinc-700  to-zinc-900 text-white">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-10 text-xl">
        <div className="flex items-center justify-center flex-col md:pl-12">
          <p className="p-5 text-2xl lg:w-full">Ivaylo Hristov</p>
          <div className="h-full p-5 max-w-[250px]">
            Crafting digital ecstasies with code, creativity (& a bit of
            caffiene of course!). Thanks for stopping by!
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="p-5 text-2xl">Quick Links</p>
          <div className="flex flex-col h-full gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="p-5 text-2xl">Get In Touch</p>
          <div className="flex flex-col h-full gap-4">
            <p className="flex gap-2">
              <Mail /> dev@ivayloverse.com
            </p>
            <p className="flex gap-2">
              <MapPin /> Sofia, Bulgaria
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="p-5 text-2xl">Connect</p>
          <div className="flex h-full gap-4">
            <Github />
            <Linkedin />
            <Twitter />
          </div>
        </div>
      </section>
      <p className="p-5 flex items-center justify-center text-sm border-t w-full">
        Designed & built by Ivaylo Hristov. © {currentYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
