import { Brain, Code2, Cpu, Database, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";

const icons = {
  code: Code2,
  brain: Brain,
  database: Database,
  cpu: Cpu,
};

const colors = {
  cyan: { icon: "text-cyan-300", dot: "bg-cyan-400", bar: "from-cyan-400 to-sky-500" },
  violet: { icon: "text-violet-300", dot: "bg-violet-400", bar: "from-violet-400 to-fuchsia-500" },
  orange: { icon: "text-orange-300", dot: "bg-orange-400", bar: "from-orange-400 to-amber-500" },
  pink: { icon: "text-pink-300", dot: "bg-pink-400", bar: "from-pink-400 to-rose-500" },
};

export default function Skills() {
  return (
    <section id="competences" className="section relative border-t border-white/5">
      <div className="blob -right-40 top-1/3 h-80 w-80 bg-violet-700" style={{ animationDelay: "-8s" }} />
      <div className="container-page relative">
        <SectionHeading
          number="03"
          label="Compétences"
          title={
            <>
              Une boîte à outils{" "}
              <span className="gradient-text">polyvalente</span>
            </>
          }
          description="Du front-end à la donnée, de la modélisation UML à l'automatisation industrielle."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            const color = colors[group.color];
            return (
              <div
                key={group.title}
                className="glass glass-hover rounded-3xl p-6 sm:p-8 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`rounded-2xl bg-white/5 p-3 ${color.icon}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className={`mt-5 h-0.5 w-14 rounded-full bg-gradient-to-r ${color.bar}`} />

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="group/skill inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${color.dot}`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="glass mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 sm:flex-row reveal"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Sparkles size={18} className="text-amber-300" />
            <span>
              Toujours en apprentissage : veille IA &amp; web, hackathons et
              certifications en ligne.
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">
            learn · build · repeat
          </span>
        </div>
      </div>
    </section>
  );
}
