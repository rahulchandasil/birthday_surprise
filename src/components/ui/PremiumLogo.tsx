"use client";

import { useEffect, useState } from 'react';
import { Crown } from 'lucide-react';

export default function PremiumLogo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-500 group cursor-default">
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-pink-400/30 blur-xl group-hover:bg-pink-400/50 transition-colors duration-500"></div>
      
      {/* Logo Container */}
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-pink-500 via-rose-400 to-pink-600 shadow-[0_5px_15px_rgba(225,29,72,0.4)] border border-pink-300/50 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-multiply"></div>
        <div className="absolute inset-0 border-[1px] border-white/40 rounded-full transform scale-[0.85] border-dashed animate-[spin_20s_linear_infinite]"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Crown className="w-3 h-3 md:w-4 md:h-4 text-warm-ivory mb-0.5 drop-shadow-sm" />
          <span className="font-serif text-warm-ivory font-bold text-sm md:text-base tracking-wider drop-shadow-md leading-none">
            K<span className="text-pink-200 mx-0.5 text-[10px] md:text-xs">&</span>P
          </span>
        </div>
      </div>
      
      {/* Tooltip / Premium Text */}
      <div className="absolute left-full ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 pointer-events-none flex flex-col">
        <span className="text-pink-300 font-serif italic text-xs md:text-sm tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]">
          Kuchu Puchu
        </span>
        <span className="text-warm-ivory/60 text-[10px] tracking-widest font-light uppercase mt-0.5">
          Premium Edition
        </span>
      </div>
    </div>
  );
}
