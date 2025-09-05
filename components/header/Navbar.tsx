'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { containerVariants, itemVariants, LINKS } from '@/lib/constants';
import BurgerMenu from './BurgerMenu';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((v) => !v);
    const el = document.getElementById('scroll-top-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header className="sticky inset-x-0 top-0 bg-transparent z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex md:h-20 items-center justify-end md:justify-between text-white/90 rounded-xl p-6 transition-colors duration-1000 ease-in-out">
            <BurgerMenu open={open} setOpen={setOpen} />
            <div className="hidden md:flex">
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
          <motion.aside key="sheet" className="fixed inset-0 z-10">
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
                  <p className="hover:text-red-950 cursor-pointer">Facebook</p>
                  <p className="hover:text-red-950 cursor-pointer">Instagram</p>
                  <p className="hover:text-red-950 cursor-pointer">LinkedIn</p>
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
                          onClick={handleClick}
                        >
                          <span className="text-4xl md:text-6xl tracking-wider font-extrabold md:font-semibold lg:text-7xl">
                            {label}
                          </span>
                        </Link>
                      </motion.li>
                    )
                  )}
                </motion.ul>
                <div className="absolute bottom-80 -right-20 rotate-90 flex md:hidden">
                  <Link
                    href="/project-info"
                    className="fillCover text-white/20 text-5xl font-roboto tracking-tighter font-semibold"
                    onClick={() => setOpen((v) => !v)}
                  >
                    Start a Project
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
