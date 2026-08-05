import type { MetadataRoute } from "next";

/** PWA manifest — makes the site installable like a native app on mobile. */
export const dynamic = "force-static";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Asa Creative Space - Dream, Imagine, Make it True",
    short_name: "Asa Creative",
    description:
      "Jasa editing video premium untuk brand, kreator, dan agensi. Mengubah footage mentah menjadi konten yang menarik, profesional, dan dirancang untuk menghasilkan lebih banyak engagement dan konversi.",
    start_url: `${bp}/`,
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#0F172A",
    icons: [
      {
        src: `${bp}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
