"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { siteConfig } from '@/data/site-config';
import { Sparkles } from 'lucide-react';

interface IntroProps {
  onComplete: () => void;
}

export default function IntroScene({ onComplete }: IntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const tl = gsap.timeline();

    // Initial states
    gsap.set([text1Ref.current, text2Ref.current, text3Ref.current], { 
      opacity: 0, 
      scale: 1.1, 
      filter: 'blur(10px)' 
    });

    // Line 1
    tl.to(text1Ref.current, { 
        opacity: 1, 
        scale: 1, 
        filter: 'blur(0px)', 
        duration: 2.5, 
        ease: "power2.out" 
      })
      .to(text1Ref.current, { 
        opacity: 0, 
        scale: 0.95, 
        filter: 'blur(10px)', 
        duration: 1.5, 
        ease: "power2.inOut", 
        delay: 1 
      })
      
      // Line 2
      .to(text2Ref.current, { 
        opacity: 1, 
        scale: 1, 
        filter: 'blur(0px)', 
        duration: 2.5, 
        ease: "power2.out" 
      })
      .to(text2Ref.current, { 
        opacity: 0, 
        scale: 0.95, 
        filter: 'blur(10px)', 
        duration: 1.5, 
        ease: "power2.inOut", 
        delay: 1 
      })
      
      // Line 3
      .to(text3Ref.current, { 
        opacity: 1, 
        scale: 1, 
        filter: 'blur(0px)', 
        duration: 2.5, 
        ease: "power2.out" 
      })
      .to(btnRef.current, { 
        opacity: 1, 
        y: -20,
        duration: 1.5, 
        ease: "back.out(1.5)" 
      }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  const handleFinish = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(20px)',
      duration: 1.5,
      ease: "power3.inOut",
      onComplete: onComplete
    });
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black text-warm-ivory flex-col text-center px-4 overflow-hidden">
      
      {/* Magical Starry Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-black to-black"></div>
        {isMounted && [...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              animationDelay: (Math.random() * 5) + 's',
              animationDuration: (Math.random() * 3 + 2) + 's',
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] w-full max-w-2xl">
        <h1 ref={text1Ref} className="absolute text-2xl md:text-5xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          {siteConfig.intro.line1}
        </h1>
        
        <h1 ref={text2Ref} className="absolute text-2xl md:text-5xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-300 to-pink-400 drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]">
          {siteConfig.intro.line2}
        </h1>
        
        <h1 ref={text3Ref} className="absolute text-xl md:text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-[0_0_20px_rgba(250,214,165,0.8)]">
          {siteConfig.intro.line3}
        </h1>
      </div>

      <button 
        ref={btnRef} 
        onClick={handleFinish}
        className="opacity-0 absolute bottom-10 md:bottom-20 flex items-center gap-3 px-8 py-4 border border-pink-300/40 rounded-full bg-pink-500/10 hover:bg-pink-500/30 hover:border-pink-300/80 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,105,180,0.4)] transition-all duration-300 uppercase tracking-widest text-sm text-pink-100 backdrop-blur-sm group"
      >
        <Sparkles className="w-5 h-5 text-pink-300 group-hover:animate-spin" />
        {siteConfig.intro.buttonText}
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 10px rgba(255,255,255,0.8); }
        }
        .animate-twinkle {
          animation: twinkle linear infinite;
        }
      `}} />
    </div>
  );
}
