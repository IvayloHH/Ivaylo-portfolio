import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import AnimatedNavbarResponsive from '@/components/header/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ivaylo Hristov',
  description: 'Full-stack developer portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-zinc-900`}
      >
        <SmoothScroll>
          <AnimatedNavbarResponsive />
          <main className='pt-[150px]'>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
