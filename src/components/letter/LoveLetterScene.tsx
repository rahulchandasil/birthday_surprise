"use client";

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LoveLetterScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const flapRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  useEffect(() => {
    if (isOpen && letterRef.current && flapRef.current) {
      // 1. Open the top flap
      gsap.to(flapRef.current, {
        rotateX: 180,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: function() {
          // Send flap to back once it's open
          if (this.progress() > 0.5) {
            flapRef.current!.style.zIndex = '5';
          }
        }
      });

      // 2. Fade out the envelope completely
      gsap.to('.envelope-part', {
        opacity: 0,
        duration: 1.5,
        delay: 0.8, // start fading as the flap is almost open
        ease: "power2.out"
      });

      // 3. Slide the letter to the center of the screen
      const slideDistance = window.innerWidth < 768 ? -50 : -80;
      gsap.to(letterRef.current, {
        y: slideDistance,
        scale: 1.05,
        opacity: 1,
        duration: 1.5,
        delay: 0.8, // move together with envelope fading
        ease: "power3.out"
      });
    }
  }, [isOpen]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 bg-midnight text-warm-ivory relative flex flex-col justify-center items-center min-h-screen z-10">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-pink-500/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-red-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="text-center mb-4 md:mb-16 relative z-20 transition-opacity duration-1000" style={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? 'none' : 'auto' }}>
        <h2 className="text-4xl md:text-5xl font-serif text-pink-300 drop-shadow-[0_0_15px_rgba(244,114,182,0.4)] mb-4">A Special Message...</h2>
        <p className="text-warm-ivory/80 text-lg animate-pulse tracking-wide">Tap the heart to open</p>
      </div>

      {/* Envelope Wrapper */}
      <div className="relative w-full max-w-3xl mt-24 md:mt-32 flex justify-center perspective-[1000px]">
        
        {/* Envelope Body Container */}
        <div className="relative w-full h-[280px] md:h-[380px] max-w-2xl mx-auto">
           
           {/* Envelope Back (Inside of the envelope) */}
           <div className="envelope-part absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-300 rounded-b-xl shadow-2xl z-0 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply"></div>
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]"></div>
           </div>
           
           {/* The Letter */}
           <div 
             ref={letterRef} 
             className="absolute bottom-4 left-[4%] right-[4%] md:left-[6%] md:right-[6%] h-[550px] md:h-[650px] bg-gradient-to-br from-orange-50 via-warm-ivory to-rose-50 text-midnight p-8 md:p-12 rounded-t-xl shadow-[0_0_50px_rgba(255,192,203,0.7)] z-10 transform translate-y-20 opacity-0 border border-pink-200/60"
           >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-70 mix-blend-multiply rounded-t-xl pointer-events-none"></div>
             
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 italic text-pink-600 drop-shadow-sm leading-tight">
                    My Dearest Love,
                  </h2>
                  
                  <div className="space-y-4 md:space-y-6 text-sm md:text-xl font-light leading-relaxed text-midnight/90 font-serif relative overflow-y-auto max-h-[250px] md:max-h-none pr-2 custom-scrollbar">
                    <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-200 to-transparent rounded-full opacity-60"></div>
                    
                    <p>
                      When I started building this, I realized that no amount of code, animations, or words could truly capture what you mean to me.
                    </p>
                    <p>
                      You are the quiet peace at the end of a long day and the sudden burst of laughter that catches me off guard. You are my favorite thought and my most beautiful reality.
                    </p>
                    <p>
                      As you celebrate another year of life, I want to celebrate another year of having you in mine. I promise to keep choosing you, every single day.
                    </p>
                  </div>
                </div>

                <div className="mt-6 md:mt-12 text-right border-t border-pink-200/80 pt-6 relative">
                  <Heart className="absolute left-1/2 -top-5 -translate-x-1/2 text-pink-400 fill-pink-300 w-10 h-10 opacity-90 shadow-sm filter drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
                  <p className="text-lg md:text-2xl italic font-serif text-pink-600/90 mb-1">Yours always & forever,</p>
                  <p className="text-3xl md:text-5xl font-serif text-rose-500 font-bold drop-shadow-md">
                    Your Love ❤️
                  </p>
                </div>
             </div>
           </div>

           {/* Front Flaps (Pocket) */}
           <div className="envelope-part absolute inset-0 z-20 pointer-events-none filter drop-shadow-[0_-5px_20px_rgba(0,0,0,0.25)]">
              {/* Left Flap */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-400"
                style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"></div>
                <div className="absolute inset-0 border-r-2 border-white/20"></div>
              </div>
              
              {/* Right Flap */}
              <div 
                className="absolute inset-0 bg-gradient-to-bl from-pink-300 to-rose-400"
                style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"></div>
                <div className="absolute inset-0 border-l-2 border-white/20"></div>
              </div>
              
              {/* Bottom Flap */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-pink-400 to-rose-300 shadow-inner"
                style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"></div>
              </div>
           </div>

           {/* Top Flap */}
           <div 
             ref={flapRef}
             className="envelope-part absolute top-0 left-0 w-full h-[180px] md:h-[260px] z-30 origin-top filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] transform-gpu"
             style={{ transformStyle: 'preserve-3d' }}
           >
              {/* The Flap Shape */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-pink-400 to-rose-400"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', backfaceVisibility: 'hidden' }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"></div>
                {/* Edge highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
              </div>

              {/* The Backside of the Flap (Visible when opened) */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-pink-300 to-rose-300"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply"></div>
              </div>
           </div>

           {/* The Heart Seal */}
           <button 
             onClick={() => setIsOpen(true)}
             className={`absolute z-40 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 hover:scale-125 ${isOpen ? 'opacity-0 pointer-events-none scale-150' : 'opacity-100 animate-bounce'}`}
             style={{ 
               left: '50%',
               top: '50%',
             }}
           >
             <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.8)] border-[3px] border-red-300/60 cursor-pointer">
               <Heart className="text-white fill-white w-8 h-8 md:w-10 md:h-10 animate-pulse filter drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
             </div>
           </button>
           
           {/* Confetti Explosion on Open */}
           {isOpen && (
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
               {[...Array(30)].map((_, i) => (
                 <div 
                   key={i}
                   className="absolute w-3 h-3 rounded-full animate-particle shadow-[0_0_10px_rgba(255,192,203,0.8)]"
                   style={{
                     '--tx': `${(Math.random() - 0.5) * 600}px`,
                     '--ty': `${(Math.random() - 0.5) * 600}px`,
                     animationDelay: `${Math.random() * 0.1}s`,
                     backgroundColor: ['#ec4899', '#f43f5e', '#fbbf24', '#ffffff'][Math.floor(Math.random() * 4)]
                   } as any}
                 />
               ))}
             </div>
           )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes particleExplosion {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        .animate-particle {
          animation: particleExplosion 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}} />
    </section>
  );
}
