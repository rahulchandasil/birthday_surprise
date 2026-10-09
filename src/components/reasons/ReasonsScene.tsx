"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reasonsILoveYou } from '@/data/reasons';
import { Sparkle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ReasonsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    
    // Header animation
    gsap.fromTo(headerRef.current, 
       { opacity: 0, scale: 0.9, filter: 'blur(5px)' }, 
       { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%" } }
    );

    mm.add("(min-width: 768px)", () => {
      // Desktop: Staggered reveal as you scroll down
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(item,
          { opacity: 0, y: 80, rotationX: 10 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: simpler fade in
      itemsRef.current.forEach((item) => {
        if (!item) return;
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    });

    return () => {
      mm.revert(); // Reverts media queries and scroll triggers
    };
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100 via-warm-ivory to-warm-ivory text-deep-burgundy relative overflow-hidden">
      
      {/* Soft Background Blooms */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[100px] animate-pulse"></div>
         <div className="absolute bottom-40 right-[10%] w-[500px] h-[500px] bg-red-300/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div ref={headerRef} className="relative max-w-4xl mx-auto text-center mb-24 z-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex justify-center gap-12 w-full opacity-50">
           <Sparkle className="text-pink-400 w-6 h-6 animate-spin-slow" />
           <Sparkle className="text-pink-300 w-8 h-8 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '4s' }} />
           <Sparkle className="text-pink-400 w-5 h-5 animate-spin-slow" style={{ animationDelay: '1s' }} />
        </div>
        <h2 className="text-4xl md:text-7xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-deep-burgundy via-pink-600 to-deep-burgundy drop-shadow-sm pb-2">
          Little Things<br/><span className="text-pink-500 italic">I Love About You</span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col gap-24 md:gap-32 z-10">
        {reasonsILoveYou.map((reason, index) => (
          <div 
            key={reason.id} 
            ref={el => { itemsRef.current[index] = el; }}
            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Text Area */}
            <div className="w-full md:w-1/2 flex flex-col relative">
              {/* Giant Watermark Number */}
              <span className="absolute -left-4 md:-left-10 -top-12 md:-top-16 text-pink-200/40 font-serif text-8xl md:text-[12rem] font-bold z-0 pointer-events-none select-none drop-shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
                {reason.number}
              </span>
              
              <div className="relative z-10 pl-4 md:pl-0 border-l-4 border-pink-300 md:border-l-0">
                 <h3 className="text-3xl md:text-4xl font-serif mb-4 text-deep-burgundy group-hover:text-pink-600 transition-colors duration-500">
                   {reason.title}
                 </h3>
                 <p className="text-deep-burgundy/80 text-lg md:text-xl leading-relaxed font-light">
                   {reason.description}
                 </p>
              </div>
            </div>

            {/* Image Area */}
            <div className="w-full md:w-1/2 flex justify-center perspective-[1000px]">
              {reason.imagePath && (
                <div className="relative w-full max-w-sm cursor-pointer animate-float-slow">
                   {/* Glowing aura behind the image */}
                   <div className="absolute inset-0 bg-pink-400/30 rounded-2xl blur-[30px] transform group-hover:scale-110 group-hover:bg-pink-500/50 transition-all duration-700"></div>
                   
                  <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-2 border-white/50 transform-gpu transition-all duration-700 ease-out group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(255,105,180,0.4)]">
                    {/* Add 3d rotation depending on odd/even to make it look dynamic */}
                    <div className={`w-full h-full transform-gpu transition-transform duration-700 ease-out ${index % 2 === 0 ? 'group-hover:rotate-y-12 group-hover:-rotate-x-6' : 'group-hover:-rotate-y-12 group-hover:rotate-x-6'}`}>
                      <img 
                        src={reason.imagePath} 
                        alt={reason.title}
                        className="w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </section>
  );
}
