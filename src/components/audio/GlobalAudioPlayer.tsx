"use client";

import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';

export default function GlobalAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  
  // Try to play automatically after interaction if possible, or wait for user click
  useEffect(() => {
    // Reveal player after a short delay
    gsap.fromTo(playerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2, ease: "power2.out" }
    );

    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch(e => {
            console.log("Auto-play prevented:", e);
          });
        }
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div ref={playerRef} className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-midnight/80 backdrop-blur-md border border-muted-gold/20 p-3 rounded-full shadow-2xl opacity-0">
      
      <audio 
        ref={audioRef} 
        src="/music/Tum Se Hi Jab We Met 320 Kbps.mp3" 
        loop 
        onEnded={() => setIsPlaying(false)}
      />

      <button 
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center bg-warm-ivory text-deep-burgundy rounded-full hover:bg-muted-gold transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
      </button>

      <div className="hidden md:flex flex-col mx-2 overflow-hidden w-32">
        <span className="text-xs font-serif text-muted-gold whitespace-nowrap animate-marquee">
          Tum Se Hi - Jab We Met
        </span>
        <div className="flex items-center gap-1 mt-1 h-2">
          {/* Simple equalizer animation */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`w-1 bg-muted-gold rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'h-[2px]'}`}
              style={{ height: isPlaying ? `${Math.random() * 8 + 4}px` : '2px', animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <button 
        onClick={toggleMute}
        className="w-8 h-8 flex items-center justify-center text-warm-ivory hover:text-muted-gold transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
      `}} />
    </div>
  );
}
