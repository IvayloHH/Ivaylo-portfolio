import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/header/Navbar';
import { ViewportHeightFix } from '@/components/CustomVH';

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

export const viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
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
        <ViewportHeightFix />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
