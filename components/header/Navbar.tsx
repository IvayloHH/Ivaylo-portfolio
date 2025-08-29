'use client';
import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import Link from 'next/link';
import { containerVariants, itemVariants, LINKS } from '@/lib/constants';
import BurgerMenu from './BurgerMenu';

export default function TopSheetNav() {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [customColor, setCustomColor] = useState('');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > (previous || 0) || latest == 0) {
      setCustomColor('bg-zinc-900');
      if (latest > 150) {
        setHidden(true);
      }
    } else {
      setHidden(false);
      setCustomColor('bg-zinc-900');
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-150%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="sticky inset-x-0 top-0 bg-zinc-900 z-50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex md:h-20 items-center justify-between text-white/90  rounded-xl p-6 ${customColor} transition-colors duration-1000 ease-in-out`}
          >
            <div className="min-w-0 flex justify-between items-center w-full md:w-1/3">
              <Link
                href="/"
                className="font-semibold tracking-tight text-lg sm:text-xl md:text-2xl select-none"
              >
                Ivaylo
              </Link>
              <BurgerMenu open={open} setOpen={setOpen} />
            </div>
            <div className="hidden md:flex min-w-0 flex-1 justify-end">
              <motion.p
                variants={itemVariants}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 30,
                }}
                role="none"
                className="text-white/45 "
              >
                <Link href="/project-info" className="fillColorProject">
                  <span className="text-2xl">Start a Project</span>
                </Link>
              </motion.p>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {open && (
          <motion.aside key="sheet" className="fixed inset-0 z-20">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 origin-top overflow-hidden bg-zinc-900 max-sm:h-screen"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-screen md:h-fit flex flex-col-reverse md:flex-row justify-between mx-auto max-w-7xl px-6 md:px-8 pt-24 md:pt-28 pb-20"
              >
                <div className="flex flex-col justify-end md:items-center text-white/45 text-lg gap-2">
                  <p className="hover:text-red-800 cursor-pointer">Facebook</p>
                  <p className="hover:text-red-800 cursor-pointer">Instagram</p>
                  <p className="hover:text-red-800 cursor-pointer">LinkedIn</p>
                </div>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  role="menu"
                  aria-label="Expanded navigation"
                  className="grid md:w-3/4 md:grid gap-4 md:gap-8 group text-white md:text-white/45 pt-15"
                >
                  {LINKS.map(
                    ({ label, href }: { label: string; href: string }) => (
                      <motion.li
                        key={label}
                        variants={itemVariants}
                        whileHover={{ x: 15 }}
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          damping: 30,
                        }}
                        role="none"
                        className="w-full md:w-fit"
                      >
                        <Link
                          href={href}
                          role="menuitem"
                          className="fillColor"
                          onClick={() => setOpen((v) => !v)}
                        >
                          <span className="text-4xl md:text-6xl tracking-wider font-extrabold md:font-semibold lg:text-7xl">
                            {label}
                          </span>
                        </Link>
                      </motion.li>
                    )
                  )}
                </motion.ul>
                <div className="fixed bottom-80 -right-20 rotate-90 flex md:hidden">
                  <Link
                    href="/project-info"
                    className="fillCover text-xl text-white/20"
                  >
                    <p className="text-5xl font-roboto tracking-tighter font-semibold">
                      Start a Project
                    </p>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
