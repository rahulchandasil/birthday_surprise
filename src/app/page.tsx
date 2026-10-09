"use client";

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import IntroScene from '@/components/intro/IntroScene';
import HeroScene from '@/components/hero/HeroScene';
import OurStoryScene from '@/components/story/OurStoryScene';
import ReasonsScene from '@/components/reasons/ReasonsScene';
import GalleryScene from '@/components/gallery/GalleryScene';
import VideoScene from '@/components/video/VideoScene';
import LoveLetterScene from '@/components/letter/LoveLetterScene';
import BirthdayScene from '@/components/birthday/BirthdayScene';
import GlobalAudioPlayer from "@/components/audio/GlobalAudioPlayer";
import PremiumLogo from '@/components/ui/PremiumLogo';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Initialize lenis globally for smooth scrolling
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-midnight text-warm-ivory overflow-hidden">
      {!introFinished && <IntroScene onComplete={() => setIntroFinished(true)} />}
      
      {introFinished && (
        <>
          <HeroScene />
          <OurStoryScene />
          <ReasonsScene />
          <GalleryScene />
          <VideoScene />
          <LoveLetterScene />
          <BirthdayScene />
          <GlobalAudioPlayer />
          <PremiumLogo />
        </>
      )}
    </main>
  );
}
