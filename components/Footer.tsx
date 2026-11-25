import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050610] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-mono text-sm font-bold text-white">
            {profile.initials}
            <span className="text-violet-400">.</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            © 2026 {profile.name}. Tous droits réservés.
          </p>
          <a
            href={profile.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-cyan-300/80 transition-colors hover:text-cyan-300"
          >
            <GithubIcon size={13} /> Voir le code source du portfolio
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-cyan-300"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-cyan-300"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-cyan-300"
          >
            <Mail size={18} />
          </a>
          <a
            href="#accueil"
            aria-label="Retour en haut"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
