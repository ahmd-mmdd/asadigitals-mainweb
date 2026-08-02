export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  /** Optional YouTube ID for a video testimonial (loads on click, facade pattern). */
  youtubeId: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Selama kerja sama, komunikasinya enak, orangnya profesional, dan hasil videonya juga memuaskan. Pengambilan gambar rapi, editingnya detail, serta selalu terbuka dengan masukan. Proses pengerjaannya juga tepat waktu. Pokoknya recommended buat yang butuh jasa videografer dan editor video. ",
    name: "Tri Suki A.",
    role: "Influencer / Konten Kreator",
    initials: "TS",
    youtubeId: "",
  },
  {
    quote:
      "Mimin nya gercep, hasil editingnya mantepp soalnya kreatif, variatif, colorfull, asikk",
    name: "Dhabitah A.",
    role: "Mahasiswi Universitas Pasundan Bandung",
    initials: "DA",
    youtubeId: "",
  },
  {
    quote:
      "Selama menjadi klien layanannya responsif dan berkomitmen, selama pengerjaan orangnya solutif dan berinisiatif.",
    name: "Muhammad Taufiq Asbah Usman, S.Sos.,",
    role: "Mahasiswa Pascasarjana Universitas Negeri Malang",
    initials: "MT",
    youtubeId: "",
  },
];
