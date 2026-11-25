"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone, Send, Smartphone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      `[Portfolio] ${subject}`
    )}&body=${encodeURIComponent(
      `Bonjour Mohamed,\n\n${message}\n\n— ${name}\n${email}`
    )}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section id="contact" className="section relative border-t border-white/5">
      <div className="blob -left-40 bottom-0 h-80 w-80 bg-pink-600" style={{ animationDelay: "-10s" }} />
      <div className="container-page relative">
        <SectionHeading
          number="07"
          label="Contact"
          title={
            <>
              Parlons de votre{" "}
              <span className="gradient-text">prochain projet</span>
            </>
          }
          description="Une question, une opportunité de stage ou simplement un bonjour ? Écrivez-moi, je réponds avec plaisir."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-4 reveal">
            <div className="glass flex items-center gap-3 rounded-2xl p-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex min-w-0 flex-1 items-center gap-4"
              >
                <span className="rounded-xl bg-cyan-400/15 p-3 text-cyan-300">
                  <Mail size={20} />
                </span>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="mt-1 truncate text-sm font-medium text-white">
                    {profile.email}
                  </div>
                </div>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copier mon adresse email"
                title="Copier l'email"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
              >
                {copied ? (
                  <Check size={16} className="text-emerald-300" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
              <span aria-live="polite" className="sr-only">
                {copied ? "Email copié" : ""}
              </span>
            </div>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="rounded-xl bg-violet-400/15 p-3 text-violet-300">
                <Phone size={20} />
              </span>
              <div>
                <div className="text-xs text-slate-400">Téléphone</div>
                <div className="mt-1 text-sm font-medium text-white">
                  {profile.phone}
                </div>
              </div>
            </a>

            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="rounded-xl bg-pink-400/15 p-3 text-pink-300">
                <MapPin size={20} />
              </span>
              <div>
                <div className="text-xs text-slate-400">Localisation</div>
                <div className="mt-1 text-sm font-medium text-white">
                  {profile.location}
                </div>
              </div>
            </div>

            <div className="glass flex items-center justify-between gap-4 rounded-2xl p-5">
              <div className="flex items-center gap-4">
                <span className="rounded-xl bg-amber-400/15 p-3 text-amber-300">
                  <Smartphone size={20} />
                </span>
                <div>
                  <div className="text-xs text-slate-400">Retrouvez-moi</div>
                  <div className="mt-1 text-sm font-medium text-white">
                    GitHub &amp; LinkedIn
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8 reveal"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-slate-400">
                  Votre nom
                </span>
                <input
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Jean Dupont"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-white/[0.08]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-slate-400">
                  Votre email
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="jean@exemple.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-white/[0.08]"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-medium text-slate-400">
                Sujet
              </span>
              <input
                name="subject"
                required
                placeholder="Opportunité de stage, collaboration..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-white/[0.08]"
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-medium text-slate-400">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Bonjour Mohamed, ..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-white/[0.08]"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <button type="submit" className="btn-primary">
                Envoyer le message <Send size={15} />
              </button>
              {sent && (
                <span aria-live="polite" className="text-xs text-emerald-300">
                  Votre messagerie va s&apos;ouvrir ✨
                </span>
              )}
            </div>
            <p className="mt-4 text-[11px] leading-5 text-slate-400">
              Le formulaire ouvre votre application email avec le message déjà
              pré-rempli — aucun serveur tiers n&apos;est impliqué.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
