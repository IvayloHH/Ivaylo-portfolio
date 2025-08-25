'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

const NAV_ITEMS = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
] as const;

type NavId = (typeof NAV_ITEMS)[number]['id'];

export default function AnimatedNavbarResponsive() {
  const [active, setActive] = useState<NavId>('home');

  const handleSelect = (id: NavId) => {
    setActive(id);
  };

  return (
    <header className="w-full text-white flex items-start justify-center p-8">
      <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur p-3 shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-2 px-1">
          <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
          <span className="text-sm font-semibold tracking-wide text-neutral-200">
            brand
          </span>
        </div>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => handleSelect(item.id)}
                    className={[
                      'relative z-10 rounded-xl font-medium capitalize bg-transparent',
                      'px-4 py-2 outline-none transition-colors hover:bg-transparent hover:text-white cursor-pointer',
                      isActive ? 'text-white' : 'text-neutral-300',
                    ].join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Button>
                  {isActive && (
                    <motion.div
                      layoutId="active-pill-desktop"
                      className="absolute inset-0 rounded-xl bg-white/10 ring-1 ring-white/15"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 40,
                        mass: 1,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-neutral-200 bg-transparent"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-neutral-900 border-white/10 text-neutral-100"
            >
              <SheetHeader className="mb-4">
                <SheetTitle className="text-neutral-200">Navigation</SheetTitle>
              </SheetHeader>

              <nav aria-label="Mobile" className="w-full">
                <ul className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <li key={item.id} className="relative">
                        <SheetClose asChild>
                          <Button
                            variant="ghost"
                            onClick={() => handleSelect(item.id)}
                            className={[
                              'relative z-10 w-full rounded-xl font-medium capitalize text-left bg-transparent',
                              'px-4 py-3 outline-none transition-colors',
                              isActive ? 'text-white' : 'text-neutral-300',
                            ].join(' ')}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {item.label}
                          </Button>
                        </SheetClose>
                        {isActive && (
                          <motion.div
                            layoutId="active-pill-mobile"
                            className="absolute inset-0 rounded-xl bg-white/10 ring-1 ring-white/15"
                            transition={{
                              type: 'spring',
                              stiffness: 500,
                              damping: 40,
                              mass: 1,
                            }}
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
