import Link from 'next/link';
import React from 'react';

const CustomButton = () => {
  return (
    <div className="flex flex-col gap-6 max-w-sm mx-auto relative z-10">
      <Link href="/contact">
        <button className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-red-500/30 bg-gradient-to-br from-red-900/40 via-black-900/60 to-black/80 shadow-2xl hover:shadow-red-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-red-400/60 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 via-red-400/20 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="flex-1 text-left px-8 py-4">
              <p className="text-red-400 font-bold text-xl uppercase group-hover:text-red-300 transition-colors duration-300 drop-shadow-sm">
                Contact
              </p>
            </div>
            <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-5 h-5 text-red-400"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default CustomButton;
