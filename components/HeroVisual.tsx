import Image from "next/image";
import { Cpu, Database, BrainCircuit, Code2, Boxes } from "lucide-react";
import { profile } from "@/lib/data";

const satellites = [
  {
    label: "Spring Boot",
    icon: Code2,
    className: "hero-chip-a text-cyan-300",
  },
  {
    label: "Machine Learning",
    icon: BrainCircuit,
    className: "hero-chip-b text-violet-300",
  },
  {
    label: "Docker",
    icon: Boxes,
    className: "hero-chip-c text-pink-300",
  },
  {
    label: "SQL & Data",
    icon: Database,
    className: "hero-chip-d text-amber-300",
  },
  {
    label: "IoT / PLC",
    icon: Cpu,
    className: "hero-chip-e text-lime-300",
  },
];

export default function HeroVisual() {
  return (
    <div className="hero-scene reveal" style={{ animationDelay: "0.2s" }}>
      <div className="hero-scene-glow" />

      <div className="hero-ring hero-ring-one" />
      <div className="hero-ring hero-ring-two" />
      <div className="hero-ring hero-ring-three" />

      <div className="hero-core">
        <div className="glass relative h-full w-full overflow-hidden rounded-[1.9rem] p-2">
          <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
            <Image
              src={profile.photo}
              alt={`Portrait de ${profile.name}`}
              fill
              sizes="(max-width: 1024px) 80vw, 34vw"
              className="object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-[#070913]/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                {profile.availability}
              </span>
              <p className="mt-3 text-xl font-semibold leading-tight text-white">
                Mohamed Khalifa
                <span className="block gradient-text">Boufares</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Full-Stack · Data · Intelligence artificielle
              </p>
            </div>
          </div>
        </div>
      </div>

      {satellites.map(({ label, icon: Icon, className }) => (
        <div key={label} className={`hero-chip glass ${className}`}>
          <Icon size={14} />
          <span>{label}</span>
        </div>
      ))}

      <div className="hero-status glass">
        <span>GFI University · Sousse</span>
        <span className="text-emerald-400">● online</span>
      </div>
    </div>
  );
}
