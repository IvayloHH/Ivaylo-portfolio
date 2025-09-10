import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const CTAButton = ({
  value,
  className,
  href,
}: {
  value: string;
  className?: string;
  href: string;
}) => {
  return (
    <Link href={href} className="h-full w-full">
      <Button
        className={cn(
          'text-zinc-100 text-lg bg-gradient-to-br from-rose-600 to-amber-500 hover:ring-1 hover:ring-rose-600/80 font-semibold rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer w-48 h-20 will-change-transform',
          className
        )}
      >
        {value}
      </Button>
    </Link>
  );
};

export default CTAButton;
