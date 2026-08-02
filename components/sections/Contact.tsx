"use client";

import { MessageCircle, CalendarDays, Globe, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Contact() {
  const whatsappNumber = "6285731053237";

  const whatsappMessage = encodeURIComponent(
    "Halo, saya tertarik menggunakan jasa editing Anda. Saya ingin konsultasi mengenai project saya."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="scroll-mt-16 bg-bg2 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 md:px-6 lg:grid-cols-[1fr_1.3fr]">
        {/* LEFT */}
        <Reveal>
          <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-[0.12em] text-accent">
            Narahubung
          </span>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-txt md:text-[42px] md:leading-[1.1]">
            Dream, Imagine and{" "}
            <span className="text-grad">Make it True</span>
          </h2>

          <p className="mb-8 text-muted">
            Diskusikan kebutuhan Anda kepada kami dan kami akan berikan opsi
            terbaik untuk Anda.
          </p>

          <div className="space-y-4 text-[14.5px] text-muted">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MessageCircle size={17} />
              </span>
              {site.email}
            </div>

            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <CalendarDays size={17} />
              </span>
              Konsultasikan Kebutuhan Anda Secara Gratis
            </div>

            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Globe size={17} />
              </span>
              Kami menerima klien dari seluruh penjuru dunia
            </div>
          </div>
        </Reveal>

        {/* RIGHT - WHATSAPP CTA */}
        <Reveal delay={0.1}>
          <div className="card-shadow rounded-[20px] border border-line bg-card p-8 md:p-12">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              {/* WhatsApp Icon */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                <MessageCircle size={38} strokeWidth={1.8} />
              </div>

              <span className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent">
                Mari Berkolaborasi
              </span>

              <h3 className="mb-4 text-2xl font-bold text-txt md:text-3xl">
                Punya Project?
                <br />
                <span className="text-grad">Let&apos;s Talk.</span>
              </h3>

              <p className="mb-8 max-w-md text-sm leading-relaxed text-muted md:text-[15px]">
                Ceritakan kebutuhan project Anda kepada kami. Konsultasikan
                konsep, kebutuhan editing, budget, dan deadline secara langsung
                melalui WhatsApp.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                <MessageCircle size={18} />
                Konsultasi via WhatsApp
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <p className="mt-5 text-xs text-muted">
                Respon cepat · Konsultasi gratis · Tanpa komitmen
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}