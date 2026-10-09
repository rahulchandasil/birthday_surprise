export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  width?: number; // optional, for masonry layouts
  height?: number; // optional, for masonry layouts
  caption?: string;
  isFeatured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  { id: "gal-1", url: "/images/2nd durga puja.jpeg", alt: "2nd durga puja", caption: "Our 2nd Durga Puja together.", width: 600, height: 800 },
  { id: "gal-2", url: "/images/WhatsApp Image 2026-10-09 at 9.53.31 PM (2).jpeg", alt: "Memory", width: 800, height: 600 },
  { id: "gal-3", url: "/images/amar bou.jpeg", alt: "Amar bou", caption: "Amar bou ❤️", width: 600, height: 750, isFeatured: true },
  { id: "gal-4", url: "/images/amar khape.jpeg", alt: "Amar khape", width: 600, height: 800 },
  { id: "gal-5", url: "/images/beauty.jpeg", alt: "Beauty", caption: "True beauty.", width: 800, height: 1000 },
  { id: "gal-6", url: "/images/best pic.jpeg", alt: "Best pic", caption: "One of my absolute favorites.", width: 800, height: 600, isFeatured: true },
  { id: "gal-7", url: "/images/cute.jpeg", alt: "Cute", caption: "So cute!", width: 600, height: 600 },
  { id: "gal-8", url: "/images/cuteness overload.jpeg", alt: "Cuteness overload", width: 600, height: 800 },
  { id: "gal-9", url: "/images/cutie.jpeg", alt: "Cutie", width: 500, height: 700 },
  { id: "gal-10", url: "/images/dilwali.jpeg", alt: "Diwali", caption: "Happy Diwali memory.", width: 800, height: 600 },
  { id: "gal-11", url: "/images/funny and most valuable memory.jpeg", alt: "Funny and valuable memory", caption: "Funny and most valuable memory.", width: 600, height: 800 },
  { id: "gal-12", url: "/images/jsut one cute pic.jpeg", alt: "Cute pic", width: 500, height: 500 },
  { id: "gal-13", url: "/images/kuchu puchu.jpeg", alt: "My love", caption: "My beautiful love.", width: 600, height: 800, isFeatured: true },
  { id: "gal-14", url: "/images/most beautifull girl.jpeg", alt: "Most beautiful girl", width: 800, height: 1000 },
  { id: "gal-15", url: "/images/most cute.jpeg", alt: "Most cute", width: 600, height: 600 },
  { id: "gal-16", url: "/images/most sweet girl.jpeg", alt: "Most sweet girl", caption: "The sweetest girl.", width: 800, height: 800 },
  { id: "gal-17", url: "/images/my beatiful love.jpeg", alt: "My beautiful love", caption: "My beautiful love.", width: 600, height: 800, isFeatured: true },
  { id: "gal-18", url: "/images/my love.jpeg", alt: "My love", width: 800, height: 600 },
  { id: "gal-19", url: "/images/my sweetheart.jpeg", alt: "My sweetheart", caption: "Sweetheart 💕", width: 500, height: 700 },
  { id: "gal-20", url: "/images/my wife.jpeg", alt: "My wife", caption: "My future wife.", width: 600, height: 800, isFeatured: true },
  { id: "gal-21", url: "/images/our 3rd durga puja.jpeg", alt: "Our 3rd durga puja", caption: "Our 3rd Durga Puja.", width: 800, height: 600 },
  { id: "gal-22", url: "/images/our first durga puja.jpeg", alt: "Our first durga puja", caption: "Our first Durga Puja.", width: 600, height: 600 },
  { id: "gal-23", url: "/images/our first pic.jpeg", alt: "Our first pic", caption: "Our very first picture together.", width: 800, height: 800, isFeatured: true },
  { id: "gal-24", url: "/images/our pic.jpeg", alt: "Our pic", width: 600, height: 800 },
  { id: "gal-25", url: "/images/propose pose.JPG", alt: "Propose pose", caption: "The propose pose 💍", width: 1000, height: 800, isFeatured: true },
  { id: "gal-26", url: "/images/raining memory.jpeg", alt: "Raining memory", width: 600, height: 800 },
  { id: "gal-27", url: "/images/saraswati pujo.jpeg", alt: "Saraswati pujo", caption: "Saraswati Pujo.", width: 800, height: 600 },
  { id: "gal-28", url: "/images/saree beauty.jpeg", alt: "Saree beauty", caption: "Beautiful in Saree.", width: 600, height: 900 },
  { id: "gal-29", url: "/images/smile beauty.jpeg", alt: "Smile beauty", caption: "That beautiful smile.", width: 600, height: 600 },
  { id: "gal-30", url: "/images/sona ma.jpeg", alt: "Sona ma", caption: "Sona ma ❤️", width: 500, height: 700 },
  { id: "gal-31", url: "/images/swag pic.jpeg", alt: "Swag pic", width: 800, height: 600 },
  { id: "gal-32", url: "/images/sweetie.jpeg", alt: "Sweetie", width: 600, height: 600 },
  { id: "gal-33", url: "/images/western beauty.jpeg", alt: "Western beauty", width: 600, height: 800 },
  { id: "gal-34", url: "/images/wimnter memory.jpeg", alt: "Winter memory", caption: "A beautiful winter memory.", width: 800, height: 800 },
];
