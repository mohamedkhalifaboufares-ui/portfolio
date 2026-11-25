"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Maximize2, Trophy, Users, X } from "lucide-react";
import { achievements, type Achievement } from "@/lib/data";

const accents = {
  amber: {
    iconWrap: "bg-amber-400/15 text-amber-300",
    border: "border-amber-400/15",
    text: "text-amber-300",
    glow: "from-amber-400/20 via-amber-500/5 to-transparent",
  },
  cyan: {
    iconWrap: "bg-cyan-400/15 text-cyan-300",
    border: "border-cyan-400/15",
    text: "text-cyan-300",
    glow: "from-cyan-400/20 via-cyan-500/5 to-transparent",
  },
};

export default function Achievements() {
  const [active, setActive] = useState<Achievement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  function openCertificate(item: Achievement) {
    triggerRef.current = document.activeElement as HTMLElement;
    setActive(item);
  }

  useEffect(() => {
    if (!active) return;
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
    <>
      <h3 className="mb-4 mt-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
        <span className="rounded-xl bg-amber-400/15 p-2 text-amber-300">
          <Trophy size={18} />
        </span>
        Distinctions &amp; participations
      </h3>

      <div className="space-y-4">
        {achievements.map((item, index) => {
          const accent = accents[item.accent];
          const Icon = item.accent === "amber" ? Trophy : Users;

          return (
            <article
              key={item.title}
              className={`glass glass-hover relative overflow-hidden rounded-2xl border ${accent.border} p-5 reveal`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${accent.glow} blur-2xl`}
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                <button
                  type="button"
                  onClick={() => openCertificate(item)}
                  aria-label={`Voir le certificat : ${item.title}`}
                  aria-haspopup="dialog"
                  className="group relative h-28 w-full shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:h-24 sm:w-32"
                >
                  <Image
                    src={item.image}
                    alt={`Aperçu du certificat ${item.title}`}
                    fill
                    sizes="(max-width: 640px) 90vw, 128px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.05]"
                    loading="eager"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 size={16} className="text-white" />
                  </span>
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h4 className="text-sm font-semibold leading-snug text-white">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[11px] text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <span className={`rounded-lg p-1.5 ${accent.iconWrap}`}>
                      <Icon size={13} />
                    </span>
                    {item.organization}
                  </p>
                  {item.location && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin size={13} /> {item.location}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => openCertificate(item)}
                    aria-haspopup="dialog"
                    className={`mt-4 inline-flex items-center gap-1.5 rounded-md text-xs font-semibold transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${accent.text}`}
                  >
                    Voir le certificat <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
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
            aria-labelledby="achievement-dialog-title"
            className="glass relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fermer l'aperçu du certificat"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-slate-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/[0.04]">
              <Image
                src={active.image}
                alt={`Certificat ${active.title} délivré par ${active.organization}`}
                fill
                sizes="(max-width: 1024px) 95vw, 900px"
                quality={90}
                className="object-contain p-3"
                loading="eager"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-end justify-between gap-3 px-1 pb-1">
              <div>
                <h3
                  id="achievement-dialog-title"
                  className="text-lg font-semibold text-white"
                >
                  {active.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {active.organization}
                  {active.location ? ` · ${active.location}` : ""} ·{" "}
                  {active.period}
                </p>
              </div>
              <span className="tag text-cyan-300">Certificat</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
