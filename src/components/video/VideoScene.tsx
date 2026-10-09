"use client";

import { useRef, useEffect, useState } from 'react';
import { videoMemories } from '@/data/videos';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Sparkles, Film } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VideoScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Horizontal scroll effect on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (scrollWrapperRef.current && containerRef.current) {
        const sections = gsap.utils.toArray('.video-panel');
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + scrollWrapperRef.current?.offsetWidth
          }
        });
      }
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-midnight text-warm-ivory overflow-hidden relative min-h-screen">
      
      {/* Magical Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        
        {mounted && [...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float-slow opacity-30"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: (Math.random() * 5) + 's',
            }}
          >
            <Heart className="text-pink-400 w-3 h-3 fill-pink-400/50" />
          </div>
        ))}
      </div>

      {/* Title overlay */}
      <div className="absolute top-12 lg:top-20 left-0 right-0 text-center z-20 pointer-events-none px-6">
        <div className="flex justify-center items-center gap-3 mb-2 animate-fade-in-up">
          <Sparkles className="w-5 h-5 text-pink-300" />
          <h2 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-pink-100 to-warm-ivory drop-shadow-[0_0_15px_rgba(255,105,180,0.5)]">
            Moments in Motion
          </h2>
          <Sparkles className="w-5 h-5 text-pink-300" />
        </div>
        <p className="text-pink-200/60 font-light italic text-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Replaying our sweetest memories
        </p>
      </div>

      <div 
        ref={scrollWrapperRef} 
        className="flex flex-col lg:flex-row w-full lg:h-screen pt-40 lg:pt-0"
        style={{ width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${videoMemories.length * 100}vw` : '100%' }}
      >
        {videoMemories.map((video, index) => (
          <div 
            key={video.id} 
            className="video-panel w-full lg:w-screen h-[60vh] lg:h-screen flex flex-col lg:flex-row items-center justify-center p-6 lg:p-24 shrink-0 relative gap-8 lg:gap-16"
          >
            {/* Cinematic Video Player */}
            <div className="w-full lg:w-2/3 max-w-5xl aspect-video bg-black rounded-2xl relative overflow-hidden group shadow-[0_0_50px_rgba(255,105,180,0.15)] ring-1 ring-pink-500/20 z-10 transition-transform duration-700 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent pointer-events-none z-10"></div>
              <video 
                src={video.url}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-contain relative z-0"
                poster={video.thumbnail}
              />
            </div>
            
            {/* Elegant Glassmorphism Caption Card */}
            <div className="w-full lg:w-1/3 lg:max-w-sm z-20 transform transition-all duration-500 hover:-translate-y-2">
              <div className="bg-pink-950/40 backdrop-blur-md border border-pink-500/20 p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-[30px]"></div>
                
                <div className="flex items-center gap-3 mb-4">
                   <span className="text-pink-300 font-serif text-4xl opacity-50">0{index + 1}</span>
                   <div className="h-[1px] flex-grow bg-gradient-to-r from-pink-400/50 to-transparent"></div>
                </div>
                
                <h3 className="text-3xl font-serif text-warm-ivory mb-3 drop-shadow-md">{video.title}</h3>
                
                {video.caption && (
                  <p className="text-pink-100/80 leading-relaxed font-light text-lg">
                    {video.caption}
                  </p>
                )}
                
                <div className="mt-8 flex items-center justify-between text-pink-300/50">
                  <Film className="w-5 h-5" />
                  <Heart className="w-5 h-5 animate-pulse fill-pink-500/20" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
