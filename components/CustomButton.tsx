import Link from 'next/link';
import React from 'react';

const CustomButton = ({ value }: { value: string }) => {
  return (
    <div className="py-5">
      <Link href="/contact">
        <button className="group relative rounded-2xl backdrop-blur-xl border-2 border-red-500/30 bg-gradient-to-br from-red-900/40 via-black-900/60 to-black/80 shadow-2xl hover:shadow-red-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-red-400/60 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-800/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

          {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-800/50 via-red-800/20 to-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

          <div className="relative z-10 flex items-center gap-1 scroll-px-20">
            <div className=" text-center p-4">
              <p className="text-red-200 font-bold text-xl uppercase group-hover:text-red-300 transition-colors duration-300 drop-shadow-sm">
                {value}
              </p>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default CustomButton;
