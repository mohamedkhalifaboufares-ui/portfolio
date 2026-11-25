"use client";

import { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import { Download, Pause, Play, RotateCcw } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile, videoCv } from "@/lib/data";

const accents = {
  cyan: {
    text: "text-cyan-300",
    glow: "from-cyan-400/25 via-cyan-500/5 to-transparent",
    bar: "bg-cyan-300",
    border: "border-cyan-300/30",
    dot: "bg-cyan-300",
  },
  violet: {
    text: "text-violet-300",
    glow: "from-violet-400/25 via-violet-500/5 to-transparent",
    bar: "bg-violet-300",
    border: "border-violet-300/30",
    dot: "bg-violet-300",
  },
  pink: {
    text: "text-pink-300",
    glow: "from-pink-400/25 via-pink-500/5 to-transparent",
    bar: "bg-pink-300",
    border: "border-pink-300/30",
    dot: "bg-pink-300",
  },
  amber: {
    text: "text-amber-300",
    glow: "from-amber-400/25 via-amber-500/5 to-transparent",
    bar: "bg-amber-300",
    border: "border-amber-300/30",
    dot: "bg-amber-300",
  },
  lime: {
    text: "text-lime-300",
    glow: "from-lime-400/25 via-lime-500/5 to-transparent",
    bar: "bg-lime-300",
    border: "border-lime-300/30",
    dot: "bg-lime-300",
  },
};

const chapters = videoCv.chapters;
const videoSrc = videoCv.src;

type PlayerState = {
  chapterIndex: number;
  progress: number;
};

type PlayerAction =
  | { type: "tick" }
  | { type: "select"; index: number }
  | { type: "restart" };

function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case "tick": {
      const progress = state.progress + 1;
      if (progress >= 100) {
        return {
          chapterIndex: (state.chapterIndex + 1) % chapters.length,
          progress: 0,
        };
      }
      return { ...state, progress };
    }
    case "select":
      return { chapterIndex: action.index, progress: 0 };
    case "restart":
      return { chapterIndex: 0, progress: 0 };
  }
}

export default function VideoCV() {
  const [player, dispatch] = useReducer(playerReducer, {
    chapterIndex: 0,
    progress: 0,
  });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing || videoSrc) return;
    const timer = window.setInterval(() => dispatch({ type: "tick" }), 90);
    return () => window.clearInterval(timer);
  }, [playing]);

  const chapter = chapters[player.chapterIndex];
  const accent = accents[chapter.accent];

  function selectChapter(index: number) {
    dispatch({ type: "select", index });
    setPlaying(true);
  }

  function restart() {
    dispatch({ type: "restart" });
    setPlaying(true);
  }

  return (
    <section id="cv-video" className="section relative border-t border-white/5">
      <div className="blob -right-32 top-16 h-80 w-80 bg-cyan-600" />
      <div className="container-page relative">
        <SectionHeading
          number="06"
          label="CV vidéo"
          title={
            <>
              Mon parcours en{" "}
              <span className="gradient-text">mouvement</span>
            </>
          }
          description="Une présentation animée et chapitrée : parcours, expérience, projets et objectifs en 45 secondes."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_0.7fr]">
          <div className="glass overflow-hidden rounded-3xl">
            <div className="video-stage relative aspect-video overflow-hidden bg-[#050713]">
              {videoSrc ? (
                <video
                  controls
                  className="h-full w-full object-cover"
                  src={videoSrc}
                  poster={profile.photo}
                />
              ) : (
                <>
                  <div className="grid-overlay opacity-70" />
              <div
                className={`absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${accent.glow} blur-3xl transition-all duration-700`}
              />

              <div key={player.chapterIndex} className="video-slide relative z-10 flex h-full flex-col justify-between p-6 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300 backdrop-blur">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
                    CV vidéo
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    {chapter.time} / {videoCv.duration}
                  </span>
                </div>

                <div className="max-w-xl">
                  <span className={`font-mono text-[11px] uppercase tracking-[0.25em] ${accent.text}`}>
                    {chapter.label}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-4xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {chapter.description}
                  </p>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {profile.location}
                  </span>
                  <div className={`video-avatar relative h-14 w-14 overflow-hidden rounded-2xl border ${accent.border}`}>
                    <Image
                      src={profile.photo}
                      alt={profile.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                </div>
                </div>
                </>
                )}
              </div>

            {!videoSrc && (
            <div className="flex flex-wrap items-center gap-3 border-t border-white/10 px-5 py-4 sm:px-7">
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? "Mettre en pause le CV vidéo" : "Lire le CV vidéo"}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-lg shadow-violet-900/30 transition-transform hover:scale-105"
              >
                {playing ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                type="button"
                onClick={restart}
                aria-label="Recommencer le CV vidéo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-white/25 hover:text-white"
              >
                <RotateCcw size={15} />
              </button>

              <div className="flex min-w-[160px] flex-1 gap-1.5">
                {chapters.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => selectChapter(index)}
                    aria-label={`Aller au chapitre ${item.label}`}
                    className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                  >
                    <span
                      className={`block h-full rounded-full ${
                        index < player.chapterIndex
                          ? "bg-white/40"
                          : index === player.chapterIndex
                            ? accents[item.accent].bar
                            : "bg-transparent"
                      }`}
                      style={{
                        width:
                          index < player.chapterIndex
                            ? "100%"
                            : index === player.chapterIndex
                              ? `${player.progress}%`
                              : "0%",
                      }}
                    />
                  </button>
                ))}
              </div>

              <span className="font-mono text-[11px] text-slate-500">
                {String(player.chapterIndex + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
              </span>
            </div>
            )}
          </div>

          <div className="glass rounded-3xl p-6 sm:p-7">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Chapitres
            </h3>
            <div className="mt-5 space-y-2">
              {chapters.map((item, index) => {
                const isActive = index === player.chapterIndex;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => selectChapter(index)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                      isActive
                        ? "border-white/20 bg-white/10"
                        : "border-transparent bg-white/[0.03] hover:bg-white/[0.07]"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] ${
                        isActive ? "bg-white/15 text-white" : "bg-white/5 text-slate-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-xs font-semibold ${isActive ? "text-white" : "text-slate-300"}`}>
                        {item.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-slate-500">
                        {item.time}
                      </span>
                    </span>
                    {isActive && (
                      <span className={`h-2 w-2 rounded-full ${accents[item.accent].dot} shadow-[0_0_10px_currentColor]`} />
                    )}
                  </button>
                );
              })}
            </div>

            <a
              href="/CV-Mohamed-Khalifa-Boufares.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-6 w-full !py-3 text-xs"
            >
              <Download size={15} /> CV PDF
            </a>
            <p className="mt-4 text-[11px] leading-5 text-slate-500">
              Présentation interactive : chaque chapitre peut être lu, mis en
              pause ou parcouru librement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
