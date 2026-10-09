"use client";

import { useState, useRef, useEffect } from 'react';
import { galleryImages, GalleryImage } from '@/data/gallery';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkle, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryScene() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Header reveal
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%" } }
    );

    // Parallax or subtle reveal effect on gallery items
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(item,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Use a simple escape key listener for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section ref={galleryRef} className="py-32 px-4 md:px-8 bg-midnight text-warm-ivory min-h-screen relative overflow-hidden">
      
      {/* Magical Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"></div>
         {mounted && [...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: (Math.random() * 5) + 's',
            }}
          >
            <Sparkle className="text-pink-300 w-4 h-4" />
          </div>
        ))}
      </div>

      <div ref={headerRef} className="relative max-w-7xl mx-auto mb-20 text-center z-10">
        <h2 className="text-5xl md:text-7xl font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-warm-ivory via-pink-200 to-warm-ivory drop-shadow-[0_0_15px_rgba(255,192,203,0.3)]">
          Fragments of Us
        </h2>
        <div className="flex justify-center items-center gap-4 mb-6">
           <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-pink-400"></div>
           <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
           <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-pink-400"></div>
        </div>
        <p className="text-pink-100/70 max-w-2xl mx-auto font-light text-lg md:text-xl italic">
          A magical collection of our frozen memories.
        </p>
      </div>

      {/* Masonry-ish Grid via Columns */}
      <div className="relative max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 z-10">
        {galleryImages.map((image, i) => (
          <div 
            key={image.id}
            ref={el => { itemsRef.current[i] = el; }}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl border border-warm-ivory/5 bg-warm-ivory/5 p-2 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-500 hover:scale-[1.02] hover:z-20 hover:border-pink-300/30 hover:bg-pink-900/20"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative w-full overflow-hidden shadow-2xl rounded-lg">
              {/* Actual Image */}
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-950/90 via-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                {image.caption && (
                  <p className="text-pink-100 text-lg md:text-xl font-serif transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">
                    {image.caption}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-2xl p-4 md:p-12 animate-fade-in">
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/40 via-transparent to-transparent pointer-events-none"></div>

          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-pink-300 hover:text-pink-100 hover:scale-110 transition-all z-50 p-2 bg-pink-900/30 rounded-full border border-pink-400/30"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="relative max-w-6xl w-full max-h-[85vh] h-full flex flex-col items-center justify-center animate-zoom-in">
            {/* Lightbox Image */}
            <div className="relative w-full h-full max-h-[80vh] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(255,105,180,0.3)] border border-pink-500/20 bg-black/50">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>
            {selectedImage.caption && (
              <div className="absolute bottom-4 md:-bottom-12 bg-pink-950/80 border border-pink-400/30 backdrop-blur-md px-8 py-3 rounded-full shadow-[0_10px_30px_rgba(255,105,180,0.3)]">
                <p className="text-center text-pink-100 font-serif italic text-lg md:text-xl drop-shadow-md">
                  {selectedImage.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0px); }
        }
        .animate-zoom-in {
          animation: zoomIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </section>
  );
}
