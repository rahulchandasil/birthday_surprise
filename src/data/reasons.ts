export interface Reason {
  id: string;
  number: string;
  title: string;
  description: string;
  imagePath?: string;
  videoPath?: string;
}

export const reasonsILoveYou: Reason[] = [
  {
    id: "reason-1",
    number: "01",
    title: "Your Smile",
    description: "Your smile has a way of making even an ordinary day feel special. It's the first thing I look for when I see you.",
    imagePath: "/images/smile beauty.jpeg"
  },
  {
    id: "reason-2",
    number: "02",
    title: "Your Eyes",
    description: "There is something about your eyes that makes me want to keep looking. They hold so much warmth and kindness.",
    imagePath: "/images/cutie.jpeg"
  },
  {
    id: "reason-3",
    number: "03",
    title: "Your Voice",
    description: "Even a few words from you can make my day feel better. Your voice is my favorite sound in the world.",
    imagePath: "/images/my sweetheart.jpeg"
  },
  {
    id: "reason-4",
    number: "04",
    title: "Your Cute Little Ways",
    description: "The little things you do are some of the things I cherish most. The way you laugh, the way you pout, every little habit.",
    imagePath: "/images/cuteness overload.jpeg"
  },
  {
    id: "reason-5",
    number: "05",
    title: "Just Being You",
    description: "I don't love just one thing about you. I love you, exactly as you are. All of you.",
    imagePath: "/images/most beautifull girl.jpeg"
  }
];
