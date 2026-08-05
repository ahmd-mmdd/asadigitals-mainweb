import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arslanasif9t9.github.io/lailahassan"),
  title: {
    default: "Asa Creative Space - Dream, Imagine, Make it True",
    template: "%s · Asa Creative Space",
  },
  description:
    "Your Footage. Our Craft. Kami mengubah footage mentah menjadi konten yang menghasilkan konversi tinggi. Jasa editing video profesional untuk brand, bisnis, kreator, dan agensi. mulai dari video long-form, short video, iklan, properti, corporate, hingga motion graphics.",
  keywords: [
    "video editing",
    "video editor",
    "YouTube editing",
    "short form editing",
    "ad editing",
    "motion graphics",
  ],
  openGraph: {
    title: "Asa Creative Space - Dream, Imagine, Make it True",
    description:
      "Jasa editing video profesional untuk brand, bisnis, kreator, dan agensi. Hasil visual berkualitas sinematik, editing yang bikin penonton terus menonton, dan proses pengerjaan yang efisien.",
    type: "website",
    locale: "en_US",
    siteName: "Asa Creative Space",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asa Creative Space - Dream, Imagine, and Make it True",
    description:
      "Your Footage. Our Craft. Kami mengubah footage mentah menjadi konten yang menghasilkan konversi tinggi. Jasa editing video profesional untuk brand, bisnis, kreator, dan agensi. mulai dari video long-form, short video, iklan, properti, corporate, hingga motion graphics.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Asa Digital Space",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* Runs before paint — prevents theme flash */
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-svh">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <ThemeProvider>
          <LenisProvider>
            <Navbar />
            {children}
            <Footer />
            <BottomNav />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
