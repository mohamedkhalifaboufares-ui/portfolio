"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Maximize2, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  certificationNote,
  certifications,
  type Certification,
} from "@/lib/data";

const photoCertificates = certifications.filter(
  (cert): cert is Certification & { image: string } => Boolean(cert.image)
);

export default function Certificates() {
  const [active, setActive] = useState<(typeof photoCertificates)[number] | null>(
    null
  );
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;
    triggerRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    return () => triggerRef.current?.focus();
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section
      id="certificats"
      className="section relative border-t border-white/5"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            number="05"
            label="Certificats"
            title={
              <>
                Mes certifications,{" "}
                <span className="gradient-text">en images</span>
              </>
            }
            description={certificationNote}
          />
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 font-mono text-[11px] text-cyan-300">
            <Award size={14} /> {photoCertificates.length} badges affichés
          </span>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photoCertificates.map((cert, index) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setActive(cert)}
              className="glass glass-hover group overflow-hidden rounded-2xl p-3 text-left reveal"
              style={{ animationDelay: `${index * 0.07}s` }}
              aria-label={`Agrandir le certificat ${cert.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white/[0.04]">
                <Image
                  src={cert.image}
                  alt={`Certificat ${cert.title} délivré par ${cert.place}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/50 text-slate-300 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 size={14} />
                </span>
              </div>
              <div className="px-2 pb-1 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold leading-snug text-white">
                    {cert.title}
                  </h3>
                  {cert.credits && (
                    <span className="shrink-0 font-mono text-[10px] text-cyan-300">
                      {cert.credits}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  {cert.place} · {cert.period}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-dialog-title"
            className="glass relative w-full max-w-4xl rounded-3xl p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fermer l'aperçu du certificat"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/[0.04]">
              <Image
                src={active.image}
                alt={`Certificat ${active.title} délivré par ${active.place}`}
                fill
                sizes="(max-width: 1024px) 95vw, 900px"
                className="object-contain p-3"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-end justify-between gap-3 px-1 pb-1">
              <div>
                <h3 id="certificate-dialog-title" className="text-lg font-semibold text-white">
                  {active.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {active.place} · {active.period}
                </p>
              </div>
              {active.credits && (
                <span className="tag text-cyan-300">{active.credits}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
