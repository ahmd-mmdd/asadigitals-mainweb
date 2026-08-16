export type Category =
  | "edukasi"
  | "vlog"
  | "dokumenter"
  | "short-content"
  | "podcast"
  | "cinematic"
  | "promosi-iklan"
  | "dokumentasi-acara"
  | "after-movie"
  | "konten-produk"
  | "film-pendek"
  | "lainnya";

export const categories: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "edukasi", label: "Edukasi" },
  { key: "vlog", label: "Vlog" },
  { key: "dokumenter", label: "Dokumenter" },
  { key: "short-content", label: "Short Content" },
  { key: "podcast", label: "Podcast" },
  { key: "cinematic", label: "Cinematic" },
  { key: "promosi-iklan", label: "Promosi/Iklan" },
  { key: "dokumentasi-acara", label: "Dokumentasi Acara" },
  { key: "after-movie", label: "After Movie" },
  { key: "konten-produk", label: "Konten Produk" },
  { key: "film-pendek", label: "Film Pendek" },
  { key: "lainnya", label: "Lainnya" },
];

export type Project = {
  id: string;
  title: string;
  meta: string;
  tag: string;
  categories: Category[];

  /**
   * YouTube video ID.
   *
   * Contoh:
   * https://www.youtube.com/watch?v=aBcD1234xYz
   * youtubeId = "aBcD1234xYz"
   *
   * Untuk YouTube Shorts:
   * https://www.youtube.com/shorts/aBcD1234xYz
   * youtubeId = "aBcD1234xYz"
   */
  youtubeId: string;

  /** Optional custom thumbnail in /public/thumbs/. Empty = automatic YouTube thumbnail. */
  thumbnail: string;

  gradient: string;
  label: string;
  description: string;
  clientGoal: string;
  software: string[];
};

export const projects: Project[] = [
  {
    id: "pbak-aftermovie",
    title: "AFTER MOVIE PBAK FPK UINSA 2026",
    meta: "Dokumentasi Kegiatan",
    tag: "Ultimate",
    categories: ["dokumentasi-acara"],
    youtubeId: "1C6kt-cz93c",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    label: "AFTER MOVIE",
    description:
      "Project ini bekerja sama dengan Digital Media Management Humas FPK UINSA",
    clientGoal:
      "Klien berekspektasi bisa mengabadikan momen & mengulang momen melalui video",
    software: ["Premiere Pro", "After Effect"],
  },
  {
    id: "Wedding-Docum",
    title: "Bella & Nuzul Wedding Documentations",
    meta: "Dokumentasi Kegiatan",
    tag: "Ultimate",
    categories: ["dokumentasi-acara"],
    youtubeId: "2GXTUj3H4XY",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    label: "WEDDING",
    description:
      "Dokumentasi acara pengantin dari prosesi Wardrobe, Akad hingga Resepsi",
    clientGoal:
      "Klien berekspektasi bisa mengabadikan momen & mengulang momen melalui video",
    software: ["Premiere Pro"],
  },

  {
    id: "short-movie",
    title: "LANGKAH - Short Movie",
    meta: "Film Pendek",
    tag: "Ultimate",
    categories: ["film-pendek"],
    youtubeId: "9vjcFytxfFg",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#0f172a,#334155)",
    label: "MOVIE",
    description:
      "Film pendek dengan editing sinematografi surealis, editor berperan untuk membentuk mood dan suasana film.",
    clientGoal: "Juara Lomba",
    software: ["Premiere Pro", "After Effects", "Photoshop"],
  },

  {
    id: "Event-Docum",
    title: "CPW Jatim Event Documentations",
    meta: "Dokumentasi Kegiatan",
    tag: "Premium",
    categories: ["dokumentasi-acara"],
    youtubeId: "AKAMHS35YS4",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#4c1d95,#7c3aed)",
    label: "CPW",
    description: "Highlight momen acara internal CPW Jatim",
    clientGoal: "Mengabadikan Momen",
    software: ["Premiere Pro", "Capcut"],
  },

  {
    id: "event-docum",
    title: "LFC - SMKN 4 Bone",
    meta: "Last Flag Ceremony",
    tag: "Ultimate",
    categories: ["dokumentasi-acara"],
    youtubeId: "JVpe7zJE2Rk",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#134e4a,#0d9488)",
    label: "LAST FLAG CEREMONY",
    description:
      "Mengabadikan momen terakhir siswa kelas 12 SMKN 4 Bone yang diiringi ceremonial party",
    clientGoal: "Kenang kenangan ketika lulus",
    software: ["DaVinci Resolve"],
  },

  {
    id: "promosi-apart",
    title: "Aparna Graha Utama",
    meta: "Promosi/Review Unit Apart",
    tag: "Premium",
    categories: ["promosi-iklan"],
    youtubeId: "n6QETk8_UR4",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#7f1d1d,#dc2626)",
    label: "REVIEW",
    description: "Review dan Promosi unit apartemen",
    clientGoal: "Memperkenalkan Aparna kepada Masyarakat Luas",
    software: ["Capcut"],
  },

  {
    id: "tugas-kuliah",
    title: "Video Edukasi Polemik Amerika vs Iran",
    meta: "Edukasi",
    tag: "Ultimate",
    categories: ["edukasi"],
    youtubeId: "4APjfUO7dxg",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#78350f,#d97706)",
    label: "TALKHEAD",
    description:
      "Video talking head menjelaskan Polemik Amerika vs Iran",
    clientGoal: "Memenuhi tugas kuliah",
    software: ["Capcut"],
  },

  {
    id: "teori-kepribadian",
    title: "Edukasi Teori Humanistik",
    meta: "Menjelaskan tiga tokoh humanistik",
    tag: "Ultimate",
    categories: ["vlog"],
    youtubeId: "mm7M4xXSOkM",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#0c4a6e,#0284c7)",
    label: "TRAVEL",
    description:
      "Video edukatif ilustratif untuk memudahkan audiens memahami konsep teori",
    clientGoal: "Menyelesaikan Tugas Kuliah",
    software: ["Capcut"],
  },

  // {
  //   id: "gaming-montage",
  //   title: "Gaming Montage",
  //   meta: "High-energy edit · 60s",
  //   tag: "Gaming",
  //   categories: ["vlog"],
  //   youtubeId: "",
  //   thumbnail: "",
  //   gradient: "linear-gradient(135deg,#3b0764,#a21caf)",
  //   label: "GAMING",
  //   description:
  //     "Beat-synced montage with velocity edits, glitch transitions and reactive sound effects.",
  //   clientGoal: "Create shareable highlight content for a gaming channel.",
  //   software: ["Premiere Pro", "After Effects"],
  // },

  // {
  //   id: "watch-commercial",
  //   title: "Watch Brand Commercial",
  //   meta: "Luxury ad · 45s",
  //   tag: "Luxury",
  //   categories: ["vlog"],
  //   youtubeId: "",
  //   thumbnail: "",
  //   gradient: "linear-gradient(135deg,#052e16,#16a34a)",
  //   label: "BRAND FILM",
  //   description:
  //     "High-end product commercial with macro shots, light sweeps and refined typography.",
  //   clientGoal: "Position the brand as premium for a holiday campaign.",
  //   software: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
  // },
];

/* =========================================================
   FEATURED PROJECTS
   ========================================================= */

export type FeaturedProject = {
  title: string;
  duration: string;
  tags: string[];
  heading: string;
  description: string;
  result: string;
  gradient: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "LANGKAH - Short Movie",
    duration: "3:44",
    tags: ["Film Pendek"],
    heading: "Film Pendek Isu Kesehatan Mental",
    description:
      "Film ini mengangkat isu kesehatan mental di lingkungan keluarga, disusun berdasarkan kisah nyata penulis film ini",
    result: "Berhasil meraih juara 1 pada kompetisi video kreatif",
    gradient: "linear-gradient(135deg,#1e3a8a,#2563eb)",
  },

  {
    title: "YouTube Growth Series",
    duration: "14:20",
    tags: ["Creator", "Long Form", "Retention Editing"],
    heading: "Finance Channel Overhaul",
    description:
      "High-retention storytelling structure, b-roll layering, sound design and animated data visuals across 12 episodes.",
    result: "Avg. watch time up 41%",
    gradient: "linear-gradient(135deg,#4c1d95,#7c3aed)",
  },
];

/* =========================================================
   OUR TEAM
   ========================================================= */

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  gradient: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Ahmad Syihab",
    role: "Founder & Editor",
    description:
      "Mengelola creative direction dan proses editing untuk memastikan setiap project menghasilkan visual yang sesuai dengan kebutuhan client.",
    image: "/team/ahmad.jpg",
    gradient: "linear-gradient(135deg,#1e3a8a,#2563eb)",
  },

  {
    name: "Alba",
    role: "Co-Founder & Editor",
    description:
      "Berkolaborasi dalam proses editing dan pengembangan visual untuk menghasilkan konten yang menarik dan berkualitas.",
    image: "/team/alba.jpg",
    gradient: "linear-gradient(135deg,#4c1d95,#7c3aed)",
  },
];