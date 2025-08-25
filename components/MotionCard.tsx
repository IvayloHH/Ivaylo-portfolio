import { cn } from '@/lib/utils';
import React from 'react';

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
    <div className=" h-[calc(100vh-500px)] flex justify-center items-center sticky top-0">
      {/* //card */}
      <div
        className={cn(
          // border-t border-rose-700/70
          'grid grid-cols-1 md:grid-cols-2 w-full h-2/3 relative text-gray-300 bg-black',
          id === '01' && '-top-10',
          id === '02' && 'top-15',
          id === '03' && 'top-40'
        )}
      >
        <div className="text-5xl font-semibold p-4 hidden md:block">({id})</div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl font-bold py-4">{title}</h1>
          <h2 className="text-muted-foreground max-w-xl text-xl">
            {description}
          </h2>
          {Object.entries(stacks).map(([key, value]) => (
            <p
              key={key}
              className="flex gap-4 items-center border-b pb-4 border-white w-2/3"
            >
              <span className="text-2xl">{key}</span>{' '}
              <span className="text-4xl">{value}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotionCard;

// "grid grid-cols-1 md:grid-cols-2 w-full h-[500px] border-t border-gray-200/60 relative -top-30 text-gray-300 bg-black"
