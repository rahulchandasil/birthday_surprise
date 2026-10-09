export interface VideoMemory {
  id: string;
  title: string;
  url: string; // Typically a local path like /videos/vid1.mp4 or YouTube/Vimeo embed
  thumbnail?: string;
  caption?: string;
}

export const videoMemories: VideoMemory[] = [
  {
    id: "vid-1",
    title: "Our First Video",
    url: "/videos/our%20first%20video.mp4",
    caption: "The start of everything."
  },
  {
    id: "vid-2",
    title: "Her Eyes",
    url: "/videos/her%20eyes.mp4",
    caption: "Getting lost in those eyes."
  },
  {
    id: "vid-3",
    title: "Cute Smiles",
    url: "/videos/cute%20smiles%20(1).mp4",
    caption: "Your smile is my favorite."
  },
  {
    id: "vid-4",
    title: "Random Vlog",
    url: "/videos/random%20vlog.mp4",
    caption: "Just us being us."
  },
  {
    id: "vid-5",
    title: "Cute Vlog",
    url: "/videos/cute%20vlog.mp4",
    caption: "Our beautiful days."
  },
  {
    id: "vid-6",
    title: "Most Lovely Moments",
    url: "/videos/most%20lovely%20videos.mp4",
    caption: "Every moment is precious."
  }
];
