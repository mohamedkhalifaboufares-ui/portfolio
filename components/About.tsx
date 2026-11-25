import Image from "next/image";
import { Code2, Cpu, Database, Globe2, Layers3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/data";

const focuses = [
  { icon: Code2, title: "Développement web", color: "text-cyan-300" },
  { icon: Database, title: "Data & Intelligence Artificielle", color: "text-violet-300" },
  { icon: Cpu, title: "IoT & Robotique", color: "text-pink-300" },
  { icon: Layers3, title: "Génie logiciel & UML", color: "text-amber-300" },
];

export default function About() {
  return (
    <section id="apropos" className="section relative">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="reveal">
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/30 via-violet-500/30 to-pink-500/30 blur-xl" />
              <div className="glass relative overflow-hidden rounded-[2rem] p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={profile.photo}
                    alt={`Portrait de ${profile.name}`}
                    fill
                    sizes="(max-width: 1024px) 80vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
                      Génie logiciel & SI
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {profile.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {profile.languages.map((language) => (
                  <span key={language.name} className="tag">
                    <Globe2 size={12} className="mr-2 text-cyan-300" />
                    {language.name}
                    <span className="ml-2 text-slate-500">· {language.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="reveal">
              <SectionHeading
                number="01"
                label="À propos"
                title={
                  <>
                    Un étudiant curieux,{" "}
                    <span className="gradient-text">un esprit bâtisseur</span>
                  </>
                }
              />
            </div>
            <div
              className="mt-7 space-y-4 text-[15px] leading-8 text-slate-400 reveal"
              style={{ animationDelay: "0.1s" }}
            >
              <p>{profile.bio}</p>
              <p>{profile.bioSuite}</p>
            </div>

            <div
              className="mt-10 grid gap-4 sm:grid-cols-2 reveal"
              style={{ animationDelay: "0.18s" }}
            >
              {focuses.map((focus, index) => (
                <div
                  key={focus.title}
                  className="glass glass-hover group rounded-2xl p-6"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className={`mb-5 inline-flex rounded-xl bg-white/5 p-3 ${focus.color}`}>
                    <focus.icon size={22} />
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-white">
                    {focus.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="glass mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-4 reveal"
          style={{ animationDelay: "0.25s" }}
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center sm:py-10">
              <div className="gradient-text text-4xl font-bold sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-slate-400 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
