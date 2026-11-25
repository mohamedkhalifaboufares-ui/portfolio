import Image from "next/image";
import {
  Activity,
  Award,
  Bike,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CircleDot,
  Code2,
  GraduationCap,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import Achievements from "@/components/Achievements";
import SectionHeading from "@/components/SectionHeading";
import {
  certifications,
  education,
  experience,
  interests,
} from "@/lib/data";

type InterestMeta = {
  icon: LucideIcon;
  glow: string;
  dot: string;
  iconColor: string;
};

const interestMeta: Record<string, InterestMeta> = {
  "Veille IA & Web": {
    icon: BrainCircuit,
    glow: "from-cyan-400/20 via-violet-500/10 to-transparent",
    dot: "bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]",
    iconColor: "text-cyan-300",
  },
  Hackathons: {
    icon: Trophy,
    glow: "from-violet-400/20 via-pink-500/10 to-transparent",
    dot: "bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.9)]",
    iconColor: "text-violet-300",
  },
  "Projets GitHub": {
    icon: Code2,
    glow: "from-pink-400/20 via-fuchsia-500/10 to-transparent",
    dot: "bg-pink-300 shadow-[0_0_10px_rgba(249,168,212,0.9)]",
    iconColor: "text-pink-300",
  },
  "Apprentissage continu": {
    icon: BookOpen,
    glow: "from-amber-400/20 via-orange-500/10 to-transparent",
    dot: "bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)]",
    iconColor: "text-amber-300",
  },
  Football: {
    icon: Activity,
    glow: "from-lime-400/20 via-emerald-500/10 to-transparent",
    dot: "bg-lime-300 shadow-[0_0_10px_rgba(190,242,100,0.9)]",
    iconColor: "text-lime-300",
  },
  Tennis: {
    icon: CircleDot,
    glow: "from-emerald-400/20 via-cyan-500/10 to-transparent",
    dot: "bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]",
    iconColor: "text-emerald-300",
  },
  Cyclisme: {
    icon: Bike,
    glow: "from-sky-400/20 via-cyan-500/10 to-transparent",
    dot: "bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]",
    iconColor: "text-sky-300",
  },
};

const defaultInterest: InterestMeta = {
  icon: Sparkles,
  glow: "from-violet-400/20 via-pink-500/10 to-transparent",
  dot: "bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.9)]",
  iconColor: "text-violet-300",
};

export default function Journey() {
  return (
    <section id="parcours" className="section relative border-t border-white/5">
      <div className="container-page">
        <SectionHeading
          number="04"
          label="Parcours"
          title={
            <>
              Formation &amp;{" "}
              <span className="gradient-text">certifications</span>
            </>
          }
          description="Un parcours qui mêle génie logiciel, données, automatisation et curiosité technique."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              <span className="rounded-xl bg-cyan-500/15 p-2 text-cyan-300">
                <BriefcaseBusiness size={18} />
              </span>
              Expérience professionnelle
            </h3>

            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.company} className="glass rounded-2xl p-6 reveal">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {item.role}
                      </h4>
                      <p className="mt-1 text-xs text-cyan-300">{item.company}</p>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{item.location}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                  <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
                      Projet · {item.project}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-2 text-xs leading-5 text-slate-400"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="mb-7 mt-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              <span className="rounded-xl bg-violet-500/15 p-2 text-violet-300">
                <GraduationCap size={18} />
              </span>
              Formation
            </h3>

            <div className="relative space-y-6 border-l border-white/10 pl-7">
              {education.map((item) => (
                <div key={item.title} className="relative reveal">
                  <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-[#070913] bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.7)]" />
                  <div className="glass rounded-2xl p-6">
                    <span className="font-mono text-[11px] text-cyan-300">
                      {item.period}
                    </span>
                    <h4 className="mt-2 text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400">{item.place}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Achievements />
          </div>

          <div>
            <h3 className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              <span className="rounded-xl bg-cyan-500/15 p-2 text-cyan-300">
                <Award size={18} />
              </span>
              Certifications
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="glass glass-hover flex items-start gap-4 rounded-2xl p-5 reveal"
                  style={{ animationDelay: `${index * 0.07}s` }}
                >
                  {cert.image ? (
                    <span className="relative h-10 w-14 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                      <Image
                        src={cert.image}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-contain p-1"
                      />
                    </span>
                  ) : (
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 font-mono text-xs text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold leading-snug text-white">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400">{cert.place}</p>
                    {cert.credits && (
                      <p className="mt-1 font-mono text-[10px] text-cyan-300">
                        {cert.credits}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 font-mono text-[10px] text-slate-400">
                    {cert.period}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 reveal" style={{ animationDelay: "0.35s" }}>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                <Sparkles
                  size={14}
                  className="interest-heading-icon text-violet-300"
                  aria-hidden="true"
                />
                Centres d&apos;intérêt
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => {
                  const meta = interestMeta[interest] ?? defaultInterest;
                  const Icon = meta.icon;

                  return (
                    <span
                      key={interest}
                      className="interest-float"
                      style={{ animationDelay: `${index * 0.12}s` }}
                    >
                      <span className="interest-pill group">
                        <span
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${meta.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                          aria-hidden="true"
                        />
                        <span
                          className={`interest-dot ${meta.dot}`}
                          aria-hidden="true"
                        />
                        <Icon
                          size={13}
                          className={`interest-icon ${meta.iconColor}`}
                          aria-hidden="true"
                        />
                        <span className="relative z-10">{interest}</span>
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
