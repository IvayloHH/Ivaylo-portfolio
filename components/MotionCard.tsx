import { cn } from '@/lib/utils';
import React from 'react';
import CTAButton from './CTAButton';

const MotionCard = ({
  id,
  title,
  description,
  stacks,
}: {
  id: string;
  title: string;
  description: string;
  stacks: { '01': string; '02': string; '03': string };
}) => {
  return (
    // cardcontainer
    <div className="h-screen flex justify-center items-center sticky top-0">
      {/* //card */}
      <div
        className={cn(
          // border-t border-rose-700/70
          'px-4 grid grid-cols-1 md:grid-cols-2 w-full h-2/3 relative text-zinc-100/90 bg-gradient-to-b from-zinc-950 from-30% to-red-950 border-t rounded-lg shadow-2xl',
          id === '01' && 'top-10 md:top-30',
          id === '02' && 'top-30 md:top-50',
          id === '03' && 'top-50 md:top-70'
        )}
      >
        <div className="text-5xl font-semibold p-4 hidden md:block">({id})</div>
        <div className="flex gap-4 flex-col h-full">
          <h1 className="text-3xl md:text-5xl font-bold py-4">{title}</h1>
          <h2 className="text-muted-foreground text-xl max-w-xl">
            {description}
          </h2>
          {Object.entries(stacks).map(([key, value]) => (
            <p
              key={key}
              className="flex gap-4 items-center border-b pb-4 border-white w-full md:w-2/3"
            >
              <span className="text-2xl">{key}</span>{' '}
              <span className="text-xl md:text-4xl">{value}</span>
            </p>
          ))}
          {id == '03' && (
            <div className="flex justify-center md:justify-start items-center mt-auto mb-20">
              <CTAButton
                value="Complete service list"
                href="/contact"
                className="w-2/3"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MotionCard;

// "grid grid-cols-1 md:grid-cols-2 w-full h-[500px] border-t border-gray-200/60 relative -top-30 text-gray-300 bg-black"
