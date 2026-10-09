export interface Memory {
  id: string;
  chapterTitle: string;
  year: string;
  description: string;
  imagePath: string;
  videoPath?: string;
  location?: string;
  caption?: string;
}

export const storyMemories: Memory[] = [
  {
    id: "chapter-1",
    chapterTitle: "The Beginning",
    year: "2023",
    description: "The moment everything changed. It didn't take long for me to realize how special you are. Every conversation felt effortless, and every moment spent together made me want more.",
    imagePath: "/images/our first pic.jpeg",
    location: "Where it all started",
    caption: "Our very first chapter together."
  },
  {
    id: "chapter-2",
    chapterTitle: "Growing Together",
    year: "2024",
    description: "This was the year we truly learned about each other. Through the late-night calls, the spontaneous plans, and all the little arguments we immediately forgot about, we built something beautiful.",
    imagePath: "/images/2nd durga puja.jpeg",
    location: "Our favorite spot",
    caption: "Learning to love every part of you."
  },
  {
    id: "chapter-3",
    chapterTitle: "Little Moments, Big Memories",
    year: "2025",
    description: "Sometimes the best memories aren't the grand gestures, but the quiet moments. Watching movies, sharing food, and simply being next to each other.",
    imagePath: "/images/our 3rd durga puja.jpeg",
    caption: "Just us, doing nothing, meaning everything."
  },
  {
    id: "chapter-4",
    chapterTitle: "Still My Favorite Person",
    year: "2026",
    description: "After all this time, looking at you still gives me the same feeling as day one. You are my Cutie, my sweetie, and the person I want to keep making memories with.",
    imagePath: "/images/my sweetheart.jpeg",
    caption: "And many more chapters to come."
  }
];
