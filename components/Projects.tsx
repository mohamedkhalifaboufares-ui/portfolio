"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Network,
  Sparkles,
  TestTube2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects, type Project } from "@/lib/data";

const filters = [
  "Tous",
  "Data & IA",
  "Bases de données",
  "Génie logiciel",
  "Web & UI/UX",
  "Qualité",
] as const;

type Filter = (typeof filters)[number];

const accentStyles: Record<
  Project["accent"],
  { panel: string; icon: string; glow: string }
> = {
  cyan: {
    panel: "from-cyan-500/25 via-sky-500/10 to-transparent",
    icon: "text-cyan-300",
    glow: "group-hover:shadow-cyan-500/10",
  },
  violet: {
    panel: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    icon: "text-violet-300",
    glow: "group-hover:shadow-violet-500/10",
  },
  pink: {
    panel: "from-pink-500/25 via-rose-500/10 to-transparent",
    icon: "text-pink-300",
    glow: "group-hover:shadow-pink-500/10",
  },
  orange: {
    panel: "from-orange-500/25 via-amber-500/10 to-transparent",
    icon: "text-orange-300",
    glow: "group-hover:shadow-orange-500/10",
  },
  lime: {
    panel: "from-lime-400/20 via-emerald-500/10 to-transparent",
    icon: "text-lime-300",
    glow: "group-hover:shadow-lime-500/10",
  },
};

const projectIcons = {
  sparkles: Sparkles,
  database: Database,
  server: GitBranch,
  diagram: Network,
  code: Code2,
  test: TestTube2,
};

export default function Projects() {
  const [active, setActive] = useState<Filter>("Tous");
  const visible =
    active === "Tous"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="projets" className="section relative border-t border-white/5">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            number="02"
            label="Projets"
            title={
              <>
                Des idées concrètes,{" "}
                <span className="gradient-text">du code à l&apos;écran</span>
              </>
            }
            description="Projets académiques réalisés en génie logiciel, data, bases de données et qualité logicielle."
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  active === filter
                    ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-lg shadow-violet-900/30"
                    : "border border-white/10 bg-white/5 text-slate-400 hover:border-white/25 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => {
            const accent = accentStyles[project.accent];
            const Icon = projectIcons[project.icon];
            return (
              <article
                key={project.title}
                className={`glass glass-hover group flex flex-col overflow-hidden rounded-3xl shadow-lg shadow-black/20 ${accent.glow} reveal`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div
                  className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${accent.panel}`}
                >
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-[#0b0e1c]/70 backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={34} className={accent.icon} />
                  </div>
                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[10px] text-slate-300">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-xs leading-5 text-slate-300"
                      >
                        <CheckCircle2
                          size={14}
                          className={`mt-0.5 shrink-0 ${accent.icon}`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag !py-1 !text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold ${accent.icon} opacity-80 transition-opacity group-hover:opacity-100`}
                    >
                      Voir sur GitHub <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      Projet académique · détails sur demande
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
