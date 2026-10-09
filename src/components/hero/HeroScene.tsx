"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { siteConfig } from '@/data/site-config';

import { Heart } from 'lucide-react';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Ensure initial states
    gsap.set([headingRef.current, subRef.current, captionRef.current], { 
      opacity: 0, 
      y: 20 
    });
    
    gsap.set(imageRef.current, { 
      opacity: 0, 
      scale: 1.05 
    });

    // Cinematic Reveal
    tl.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 2.5,
      ease: "power3.out"
    })
    .to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=1.5")
    .to(subRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(captionRef.current, {
      opacity: 0.6,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-midnight px-6 py-20"
    >
      {/* Romantic Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float-heart opacity-20"
            style={{
              left: Math.random() * 100 + '%',
              animationDuration: (Math.random() * 10 + 10) + 's',
              animationDelay: (Math.random() * 5) + 's',
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}
          >
            <Heart className="text-pink-500 fill-pink-500 w-8 h-8" />
          </div>
        ))}
      </div>

      {/* Editorial Layout: Image on Desktop right, Text on Desktop left */}
      
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 md:pl-[10%] mb-12 md:mb-0">
        <h1 
          ref={headingRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-warm-ivory via-pink-200 to-warm-ivory leading-tight mb-6 drop-shadow-[0_0_15px_rgba(255,192,203,0.3)]"
        >
          {siteConfig.hero.heading}
        </h1>
        
        <p 
          ref={subRef} 
          className="text-lg md:text-xl text-pink-100/90 font-light max-w-md leading-relaxed mb-10"
        >
          {siteConfig.hero.subheading}
        </p>

        <p 
          ref={captionRef} 
          className="text-sm uppercase tracking-[0.2em] text-pink-300 font-serif italic"
        >
          {siteConfig.hero.caption}
        </p>
      </div>

      {/* Media Area */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:pr-[10%] relative z-10">
        {/* Glowing backdrop */}
        <div className="absolute inset-0 bg-pink-500/20 blur-[100px] rounded-full transform -translate-y-1/4 translate-x-1/4 w-[120%] h-[120%] animate-pulse" />
        
        <div 
          ref={imageRef}
          className="relative w-full max-w-lg rounded-2xl overflow-hidden border-2 border-pink-200/20 shadow-[0_0_50px_rgba(255,105,180,0.3)] animate-float-slow"
        >
          {/* Actual Image */}
          <img 
            src="/images/best pic.jpeg" 
            alt="My Love"
            className="w-full h-auto object-cover transition-transform duration-[3000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-transparent to-transparent mix-blend-overlay z-10 pointer-events-none" />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatHeart {
          0% { transform: translateY(100vh) rotate(0deg) scale(0.5); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-20vh) rotate(360deg) scale(1); opacity: 0; }
        }
        .animate-float-heart {
          animation: floatHeart linear infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
