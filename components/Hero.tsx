"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  PlayCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import HeroVisual from "@/components/HeroVisual";
import { profile } from "@/lib/data";

function TypingTagline() {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(profile.taglines[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const current = profile.taglines[index];
    const done = !deleting && length === current.length;
    const empty = deleting && length === 0;

    const delay = done ? 1800 : empty ? 300 : deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (done) {
        setDeleting(true);
      } else if (empty) {
        setDeleting(false);
        setIndex((value) => (value + 1) % profile.taglines.length);
      } else {
        setLength((value) => value + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [index, length, deleting]);

  return (
    <span className="caret gradient-text font-semibold">
      {profile.taglines[index].slice(0, length)}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="grid-overlay pointer-events-none absolute inset-0" />
      <div className="blob -left-32 top-10 h-96 w-96 bg-violet-600" />
      <div className="blob right-0 top-40 h-80 w-80 bg-cyan-500" style={{ animationDelay: "-6s" }} />
      <div className="blob bottom-0 left-1/3 h-72 w-72 bg-pink-500" style={{ animationDelay: "-12s" }} />

      <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </div>

          <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Salut, je suis
            <br />
            <span className="gradient-text">Mohamed Khalifa</span>
            <br />
            Boufares<span className="text-violet-400">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.role}. Je construis des applications web, des pipelines de
            données et des projets IoT — avec une curiosité sans limite pour
            l&apos;intelligence artificielle.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <span>Je suis</span>
            <TypingTagline />
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projets" className="btn-primary">
              Voir mes projets <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={16} /> Me contacter
            </a>
            <a
              href="#cv-video"
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-medium text-slate-400 transition-colors hover:text-violet-300"
            >
              <PlayCircle size={17} /> CV interactif
            </a>
            <a
              href="/CV-Mohamed-Khalifa-Boufares.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
            >
              <Download size={16} /> Télécharger mon CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-cyan-300"
            >
              <GithubIcon size={21} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-cyan-300"
            >
              <LinkedinIcon size={21} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-slate-400 transition-colors hover:text-cyan-300"
            >
              <Mail size={21} />
            </a>
            <span className="h-5 w-px bg-white/15" />
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>
        </div>

        <HeroVisual />
      </div>

      <a
        href="#apropos"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-white sm:flex"
        aria-label="Aller à la section à propos"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bob" />
      </a>
    </section>
  );
}
