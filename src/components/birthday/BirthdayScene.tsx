"use client";

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

export default function BirthdayScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCandleBlown, setIsCandleBlown] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  
  const flameRef = useRef<HTMLDivElement>(null);
  const finalMessageRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll animation for the section entering
  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        }
      }
    );
  }, []);

  const handleBlowCandle = () => {
    if (isCandleBlown) return;
    setIsCandleBlown(true);
    
    // Animate flame going out
    if (flameRef.current) {
      gsap.to(flameRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          // Trigger confetti
          const duration = 3 * 1000;
          const end = Date.now() + duration;

          const frame = () => {
            confetti({
              particleCount: 5,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']
            });
            confetti({
              particleCount: 5,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          };
          frame();

          // Trigger final message sequence
          setShowFinalMessage(true);
        }
      });
    }
  };

  useEffect(() => {
    if (showFinalMessage && finalMessageRef.current) {
      gsap.fromTo(finalMessageRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 }
      );
    }
  }, [showFinalMessage]);

  return (
    <section ref={containerRef} className="py-32 px-6 min-h-screen bg-deep-burgundy text-warm-ivory relative flex flex-col items-center justify-center">
      
        {/* Stars/Sparkles Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.1)_0%,transparent_70%)] mix-blend-screen" />
          {isMounted && [...Array(40)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-pink-200 rounded-full blur-[1px]"
              style={{
                width: Math.random() * 5 + 1 + 'px',
                height: Math.random() * 5 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.7,
                animation: `twinkle ${Math.random() * 4 + 2}s infinite alternate`
              }}
            />
          ))}
        </div>
        
        <div className="z-10 text-center flex flex-col items-center w-full max-w-6xl">
          {!isCandleBlown ? (
            <div className="flex flex-col items-center mt-20">
              <h2 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)] mb-20 animate-pulse">
                Make a Wish...
              </h2>
              
              {/* Beautiful magical candle */}
              <div className="relative cursor-pointer group" onClick={handleBlowCandle}>
                {/* Glow behind candle */}
                <div className="absolute -inset-20 bg-amber-500/20 rounded-full blur-[80px] opacity-70 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                
                <div className="w-20 h-56 bg-gradient-to-b from-yellow-50 via-warm-ivory to-rose-100 rounded-t-3xl rounded-b-xl mx-auto shadow-[inset_-8px_0_20px_rgba(0,0,0,0.15),0_10px_30px_rgba(0,0,0,0.3)] relative">
                  {/* Melting Wax drips */}
                  <div className="absolute top-2 left-2 w-3 h-14 bg-gradient-to-b from-yellow-50 to-warm-ivory rounded-full shadow-sm" />
                  <div className="absolute top-1 right-3 w-4 h-20 bg-gradient-to-b from-yellow-50 to-warm-ivory rounded-full shadow-sm" />
                  <div className="absolute top-4 left-7 w-2 h-10 bg-warm-ivory rounded-full shadow-sm opacity-80" />
                  
                  {/* Decorative ribbon */}
                  <div className="absolute top-1/2 left-0 right-0 h-8 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 transform -skew-y-3 flex items-center justify-center shadow-lg border-y border-pink-200/50">
                    <Heart className="text-white fill-white w-4 h-4 opacity-80" />
                  </div>
                  
                  {/* Wick */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-5 bg-gradient-to-t from-gray-700 to-black rounded-full" />
                  
                  {/* Flame */}
                  <div ref={flameRef} className="absolute -top-24 left-1/2 -translate-x-1/2 w-12 h-20 origin-bottom flex justify-center">
                    <div className="w-full h-full bg-gradient-to-t from-amber-500 via-yellow-300 to-yellow-50 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] animate-flicker filter drop-shadow-[0_0_50px_rgba(251,191,36,0.9)] opacity-90" />
                    {/* Inner hot flame */}
                    <div className="absolute bottom-2 w-5 h-8 bg-gradient-to-t from-blue-400 to-white rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] opacity-80 blur-[1px]" />
                  </div>
                </div>
                
                <p className="mt-20 text-sm md:text-base text-pink-200 uppercase tracking-[0.3em] font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  ( Tap the candle to blow it out )
                </p>
              </div>
            </div>
          ) : (
            <div ref={finalMessageRef} className="flex flex-col items-center opacity-0 w-full">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 mb-6 drop-shadow-[0_0_20px_rgba(244,114,182,0.4)]">
                Happy Birthday, <br className="md:hidden"/> My Love! 🎉
              </h2>
              <p className="text-xl md:text-3xl font-light text-rose-100 mb-16 max-w-3xl leading-relaxed italic">
                Here's to you, to us, and to a lifetime of beautiful memories together. I love you more than words could ever say. You are my greatest blessing.
              </p>
              
              <div className="relative w-full max-w-5xl flex flex-col items-center justify-center mt-10">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-rose-500/10 to-pink-500/20 rounded-full blur-[100px] pointer-events-none" />

                {/* Magical sparkles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                  {[...Array(25)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute bg-pink-300 rounded-full blur-[2px] animate-sparkle-float"
                      style={{
                        width: `${2 + Math.random() * 4}px`,
                        height: `${2 + Math.random() * 4}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${4 + Math.random() * 6}s`
                      }}
                    />
                  ))}
                </div>

                {/* Main Propose Photo */}
                <div className="relative w-full max-w-2xl z-30 animate-fade-in-up">
                  <div className="w-full h-full animate-float-slow">
                    <div className="relative w-full rounded-xl p-3 bg-white/10 backdrop-blur-md animate-glow-pulse border border-pink-200/30 transform transition-all duration-1000 hover:scale-[1.03]">
                       <div className="relative rounded-lg overflow-hidden shadow-inner">
                         <img 
                           src="/images/propose pose.JPG" 
                           alt="Our Special Moment" 
                           className="w-full h-auto object-cover"
                         />
                         {/* Always visible elegant romantic overlay */}
                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-20 flex flex-col items-center justify-end">
                            <Heart className="w-10 h-10 text-pink-400 fill-pink-400 mb-3 animate-pulse filter drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
                            <h3 className="text-3xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-100 shadow-black drop-shadow-xl italic font-medium tracking-wide">
                              My Forever Love
                            </h3>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
  
                {/* Scattered Polaroids - Desktop (Absolute framing), Mobile (Flex grid) */}
                <div className="relative w-full mt-12 md:mt-0 md:absolute md:inset-0 pointer-events-none z-20 flex flex-wrap justify-center gap-6 md:block">
                  {[
                    { src: "/images/amar bou.jpeg", label: "My Beautiful Wife", delay: "delay-100", rotation: "-rotate-6", pos: "md:top-10 md:-left-12 lg:-left-24", floatAnim: "animate-float-slow" },
                    { src: "/images/beauty.jpeg", label: "Gorgeous", delay: "delay-300", rotation: "rotate-6", pos: "md:-bottom-10 md:left-10 lg:left-0", floatAnim: "animate-float-medium" },
                    { src: "/images/swag pic.jpeg", label: "My Swag", delay: "delay-500", rotation: "-rotate-3", pos: "md:-bottom-16 md:right-10 lg:right-0", floatAnim: "animate-float-fast" },
                    { src: "/images/my wife.jpeg", label: "Forever Mine", delay: "delay-700", rotation: "rotate-6", pos: "md:top-20 md:-right-12 lg:-right-24", floatAnim: "animate-float-medium" }
                  ].map((img, idx) => (
                    <div key={idx} className={`relative md:absolute ${img.pos} animate-fade-in-up ${img.delay} z-20 flex-shrink-0 w-40 md:w-48 lg:w-56`}>
                      <div className={`w-full h-full ${img.floatAnim}`}>
                        <div className={`relative w-full pointer-events-auto bg-warm-ivory p-3 pb-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-warm-ivory transform transition-all duration-700 hover:scale-110 hover:z-50 cursor-pointer ${img.rotation}`}>
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/40 shadow-sm backdrop-blur-sm -rotate-2" /> {/* Tape effect */}
                          <div className="relative w-full aspect-[4/5] overflow-hidden rounded shadow-inner">
                            <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                          </div>
                          <p className="absolute bottom-3 left-0 right-0 text-center font-serif text-pink-700 text-sm md:text-lg font-bold italic tracking-wide">{img.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes flicker {
            0%, 100% { transform: rotate(-1deg) scaleY(1.02); filter: drop-shadow(0 0 40px rgba(251,191,36,0.9)); }
            25% { transform: rotate(1deg) scaleY(0.98); filter: drop-shadow(0 0 50px rgba(251,191,36,1)); }
            50% { transform: rotate(-1deg) scaleY(1.05); filter: drop-shadow(0 0 30px rgba(251,191,36,0.8)); }
            75% { transform: rotate(1deg) scaleY(0.95); filter: drop-shadow(0 0 60px rgba(251,191,36,1)); }
          }
          @keyframes twinkle {
            0% { opacity: 0.2; transform: scale(0.8); }
            100% { opacity: 0.9; transform: scale(1.3); filter: drop-shadow(0 0 5px rgba(255,192,203,0.8)); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-25px); }
          }
          @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 50px rgba(255,192,203,0.3); }
            50% { box-shadow: 0 0 80px rgba(255,192,203,0.7); }
          }
          @keyframes sparkle-float {
            0% { transform: translateY(0) scale(0); opacity: 0; }
            20% { transform: translateY(-20px) scale(1); opacity: 0.8; }
            80% { transform: translateY(-80px) scale(1); opacity: 0.8; }
            100% { transform: translateY(-100px) scale(0); opacity: 0; }
          }
          .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
          .animate-glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }
          .animate-sparkle-float { animation: sparkle-float linear infinite forwards; }
          .delay-100 { animation-delay: 100ms; }
          .delay-300 { animation-delay: 300ms; }
          .delay-500 { animation-delay: 500ms; }
          .delay-700 { animation-delay: 700ms; }
        `}} />
      </section>
    );
  }
