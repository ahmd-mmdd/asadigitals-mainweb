export type Service = {
  icon: "film" | "zap" | "trending" | "home" | "briefcase" | "sparkles";
  title: string;
  items: string[];
};

export const services: Service[] = [
  {
    icon: "film",
    title: "Long Form Editing",
    items: ["Vlog", "Podcast", "Dokumentasi Acara", "Film Pendek"],
  },
  {
    icon: "zap",
    title: "Short Form Editing",
    items: ["Instagram Reels", "TikTok", "YouTube Shorts", "Facebook Reels"],
  },
  {
    icon: "trending",
    title: "Komersial",
    items: ["Video Produk", "Iklan", "Campaign", "Review Produk"],
  },
  {
    icon: "home",
    title: "Properti",
    items: ["Property Tours", "Luxury Homes", "Drone Videos", "Listing Videos"],
  },
  {
    icon: "briefcase",
    title: "Korporasi",
    items: ["Company Profile Videos", "Event Videos", "Interviews", "Training Videos"],
  },
  {
    icon: "sparkles",
    title: "Motion Graphics",
    items: ["Logo Animation", "Text Animation", "Animated Titles", "Social Media Graphics"],
  },
];
