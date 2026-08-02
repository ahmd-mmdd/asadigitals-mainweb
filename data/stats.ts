export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 31, suffix: "+", label: "Project Selesai" },
  { value: 26, suffix: "+", label: "Klien Terbantu" },
  { value: 3, suffix: "+", label: "Instansi Bekerja Sama" },
  { value: 3, suffix: "+", label: "Tahun Pengalaman" },
];

export const whyMe = [
  { icon: "zap", title: "Pengerjaan Efisien", text: "Deadline Anda, Komitmen Kami." },
  { icon: "palette", title: "Tanpa Batasan Kreativitas", text: "Konsep yang Fresh, Tetap Sesuai Identitas Anda" },
  { icon: "chart", title: "High Retention Editing", text: "Editing yang Menjaga Penonton Tetap Terhubung." },
  { icon: "search", title: "Attention to Detail", text: "Cut Presisi. Audio Bersih. Hasil Profesional." },
  { icon: "film", title: "Premium Color Grading", text: "Visual Sinematik yang Membuat Brand Terlihat Lebih Premium." },
  { icon: "volume", title: "Sound Design", text: "SFX, Mixing, dan Musik yang Menghidupkan Setiap Scene." },
  { icon: "sparkles", title: "Motion Graphics", text: "Visual Text dan Animasi yang Membuat Konten Lebih Standout." },
  { icon: "infinity", title: "Unlimited Storage", text: "Kirim Video Sebesar Apa Pun, Kami Siap Mengerjakannya." },
] as const;

export const software = [
  { short: "Pr", name: "Premiere Pro", bg: "#00005B" },
  { short: "Ae", name: "After Effects", bg: "#00005B" },
  { short: "Cp", name: "Capcut", bg: "#001E36" },
  { short: "Af", name: "Affinity Designer", bg: "#330000" },
  { short: "Cv", name: "Canva", bg: "#00005B" },
  { short: "DR", name: "DaVinci Resolve", bg: "linear-gradient(135deg,#233042,#0284c7)" },
] as const;

export const processSteps = [
  { title: "Upload Assets", text: "Upload lebih aman melalui Drive, Dropbox atau Frame.io" },
  { title: "Reservasi", text: "Menjelaskan konsep video dan briefing" },
  { title: "Proses Editing", text: "Cut, grade, sound design & motion graphics" },
  { title: "Review", text: "Feedback sampai video sesuai keinginan Anda" },
  { title: "Hasil Akhir", text: "Format apapun sesuai keinginan Anda" },
] as const;
