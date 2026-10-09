"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyMemories } from '@/data/memories';
import { Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OurStoryScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Header reveal
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        }
      }
    );

    // Chapters reveal
    chapterRefs.current.forEach((chapter, index) => {
      if (!chapter) return;
      
      const image = chapter.querySelector('.story-image');
      const content = chapter.querySelector('.story-content');
      const isEven = index % 2 === 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chapter,
          start: "top 75%",
        }
      });

      tl.fromTo(image,
        { opacity: 0, x: isEven ? -50 : 50, rotation: isEven ? -10 : 10 },
        { opacity: 1, x: 0, rotation: isEven ? -2 : 2, duration: 1.2, ease: "back.out(1.5)" }
      )
      .fromTo(content,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-midnight text-warm-ivory relative overflow-hidden">
      
      {/* Decorative background hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float-slow"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: (Math.random() * 5) + 's',
            }}
          >
            <Heart className="text-pink-500/30 w-12 h-12" />
          </div>
        ))}
      </div>

      {/* Glowing vertical timeline line (Desktop only) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-pink-400 to-transparent shadow-[0_0_15px_rgba(255,105,180,0.8)] opacity-30 hidden md:block -translate-x-1/2 rounded-full"></div>

      {/* Section Header */}
      <div ref={headerRef} className="text-center mb-32 max-w-3xl mx-auto relative z-10">
        <h2 className="text-sm tracking-[0.3em] text-pink-300 uppercase mb-4 animate-pulse">Our Little Universe</h2>
        <h3 className="text-3xl md:text-5xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-warm-ivory via-pink-200 to-warm-ivory drop-shadow-[0_0_10px_rgba(255,192,203,0.3)]">
          Every year, another chapter.<br/>Every memory, another reason to smile.
        </h3>
      </div>

      {/* Chapters */}
      <div className="max-w-6xl mx-auto flex flex-col gap-32 md:gap-48 relative z-10">
        {storyMemories.map((memory, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={memory.id} 
              ref={el => { chapterRefs.current[index] = el; }}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
            >
              {/* Image Area - Polaroid Style */}
              <div className="w-full md:w-1/2 story-image perspective-1000 flex justify-center">
                
                <div className="relative bg-white p-3 md:p-4 pb-12 md:pb-16 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu hover:scale-[1.05] hover:z-20 transition-all duration-500 group max-w-sm">
                  {/* Tape */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 z-20"></div>
                  
                  <div className="relative overflow-hidden border border-gray-200">
                    <img 
                      src={memory.imagePath} 
                      alt={memory.chapterTitle} 
                      className="w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay pointer-events-none transition-opacity group-hover:opacity-0" />
                  </div>
                  
                  {/* Polaroid Text underneath */}
                  <div className="absolute bottom-0 left-0 w-full text-center py-3 md:py-4">
                    <p className="font-serif text-gray-800 text-lg md:text-xl handwriting-font -rotate-2">{memory.year}</p>
                  </div>

                  {memory.location && (
                    <div className="absolute -bottom-5 -right-5 z-20 bg-pink-100/90 backdrop-blur-md px-4 py-2 rounded-full text-xs text-pink-900 tracking-wider shadow-lg font-serif rotate-6">
                      📍 {memory.location}
                    </div>
                  )}
                </div>

                {/* Timeline Dot (Desktop only) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-midnight border-4 border-pink-400 rounded-full shadow-[0_0_15px_rgba(255,105,180,0.8)] z-20 items-center justify-center">
                   <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full md:w-1/2 flex flex-col story-content px-4 md:px-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-transparent text-7xl md:text-9xl font-serif opacity-40 -mb-8 md:-mb-10 z-0 drop-shadow-xl">
                  {memory.year}
                </span>
                <h4 className="text-3xl md:text-5xl font-serif mb-6 z-10 text-warm-ivory drop-shadow-md">
                  {memory.chapterTitle}
                </h4>
                <div className="w-12 h-1 bg-pink-400 rounded-full mb-6 shadow-[0_0_10px_rgba(255,105,180,0.8)]"></div>
                <p className="text-warm-ivory/80 text-lg md:text-xl leading-relaxed font-light mb-8 z-10">
                  {memory.description}
                </p>
                {memory.caption && (
                  <p className="text-base md:text-lg font-serif italic text-pink-200 border-l-4 border-pink-400/50 pl-6 bg-pink-900/10 py-2 pr-2 rounded-r-lg">
                    "{memory.caption}"
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
        .handwriting-font {
           font-family: 'Caveat', cursive;
        }
      `}} />
    </section>
  );
}
