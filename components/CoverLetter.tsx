"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Eye,
  FileText,
  Languages,
  Printer,
  X,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  coverLetterContact,
  coverLetterLanguages,
  coverLetters,
  type CoverLetterContent,
  type CoverLetterLanguage,
} from "@/lib/cover-letter";

function LetterBody({
  letter,
  className = "",
}: {
  letter: CoverLetterContent;
  className?: string;
}) {
  return (
    <div className={`letter-body ${className}`}>
      <div className="letter-accent" aria-hidden="true" />
      <header className="letter-header">
        <div>
          <p className="letter-brand">{letter.signatureName}</p>
          <p className="letter-role">{letter.signatureRole}</p>
        </div>
        <div className="letter-contact">
          {coverLetterContact.location}
          <br />
          {coverLetterContact.email}
          <br />
          {coverLetterContact.phone}
        </div>
      </header>

      <p className="letter-date">{letter.date}</p>
      <p className="letter-subject">{letter.subject}</p>
      <p className="letter-recipient">{letter.recipient}</p>

      {letter.paragraphs.map((paragraph) => (
        <p key={paragraph} className="letter-paragraph">
          {paragraph}
        </p>
      ))}

      <p className="letter-paragraph letter-closing">{letter.closing}</p>

      <div className="letter-signature">
        <strong>{letter.signatureName}</strong>
        <span>{letter.signatureRole}</span>
      </div>
    </div>
  );
}

export default function CoverLetter() {
  const [language, setLanguage] = useState<CoverLetterLanguage>("fr");
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const letter = coverLetters[language];

  function openModal() {
    triggerRef.current = document.activeElement as HTMLElement;
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function handlePrint() {
    const previousTitle = document.title;
    document.title = letter.printTitle;
    window.print();
    window.setTimeout(() => {
      document.title = previousTitle;
    }, 0);
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    return () => triggerRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
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
  }, [open]);

  return (
    <section id="lettre" className="section relative border-t border-white/5">
      <div
        className="blob -left-32 top-10 h-80 w-80 bg-violet-600"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <SectionHeading
          number="07"
          label="Lettre de motivation"
          title={
            <>
              Une candidature claire, prête pour vos{" "}
              <span className="gradient-text">opportunités PFE</span>
            </>
          }
          description="Deux versions professionnelles, en français et en anglais, à consulter, télécharger ou imprimer."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="reveal">
            <span className="section-label">
              <FileText size={14} /> PFE · Génie logiciel &amp; IA
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Un document clair, personnel et adapté à chaque opportunité.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              La lettre présente mon parcours en génie logiciel, mon intérêt pour
              l’intelligence artificielle, mes compétences en React, Spring Boot,
              Java et SQL Server, ainsi que le projet Smart Context AI. Elle
              conclut sur ma motivation à rejoindre une équipe pour un stage de
              fin d’études.
            </p>

            <div className="mt-8">
              <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <Languages size={14} /> Langue de la lettre
              </p>
              <div
                className="inline-flex rounded-full border border-white/10 bg-white/5 p-1"
                role="group"
                aria-label="Langue de la lettre de motivation"
              >
                {coverLetterLanguages.map((code) => {
                  const option = coverLetters[code];
                  const selected = code === language;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLanguage(code)}
                      aria-pressed={selected}
                      title={option.label}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                        selected
                          ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-lg shadow-violet-900/30"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {option.shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3" aria-live="polite">
              <button
                type="button"
                onClick={openModal}
                aria-haspopup="dialog"
                className="btn-primary"
              >
                <Eye size={16} /> Voir la lettre
              </button>
              <a
                href={letter.pdfPath}
                download={letter.fileName}
                className="btn-outline"
              >
                <Download size={16} /> Télécharger PDF
              </a>
              <button type="button" onClick={handlePrint} className="btn-outline">
                <Printer size={16} /> Imprimer
              </button>
            </div>

            <p className="mt-4 font-mono text-[11px] text-slate-500">
              {letter.label} · PDF A4 · {letter.fileName}
            </p>
          </div>

          <div
            className="glass relative rounded-3xl p-3 reveal sm:p-5"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#f8fafc] p-6 text-slate-800 shadow-2xl shadow-black/40 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500" />
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {letter.signatureName}
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-500">
                    {letter.signatureRole}
                  </p>
                </div>
                <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 font-mono text-[10px] font-semibold text-violet-600">
                  {letter.shortLabel}
                </span>
              </div>

              <p className="mt-5 text-[10px] text-slate-500">{letter.date}</p>
              <p className="mt-3 text-xs font-bold text-slate-900">
                {letter.subject}
              </p>
              <p className="mt-3 text-xs font-semibold text-slate-700">
                {letter.recipient}
              </p>
              <p className="mt-3 text-[11px] leading-6 text-slate-600">
                {letter.preview}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
                <p className="max-w-[60%] text-[10px] leading-4 text-slate-500">
                  {coverLetterContact.email}
                  <br />
                  {coverLetterContact.phone}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Aperçu
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between px-1 text-[11px] text-slate-400">
              <span>Document de motivation · PFE</span>
              <a
                href={letter.pdfPath}
                download={letter.fileName}
                className="inline-flex items-center gap-1 text-cyan-300 transition-opacity hover:opacity-75"
              >
                PDF original <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
          onClick={closeModal}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cover-letter-dialog-title"
            className="glass relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl p-3 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={closeModal}
              aria-label="Fermer l'aperçu de la lettre"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-slate-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <X size={18} />
            </button>

            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1 pr-14">
              <div>
                <h3
                  id="cover-letter-dialog-title"
                  className="text-lg font-semibold text-white"
                >
                  {letter.eyebrow} · {letter.label}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{letter.title}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={letter.pdfPath}
                  download={letter.fileName}
                  className="btn-outline !px-3 !py-2 !text-[11px]"
                >
                  <Download size={14} /> PDF
                </a>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="btn-outline !px-3 !py-2 !text-[11px]"
                >
                  <Printer size={14} /> Imprimer
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white">
              <LetterBody letter={letter} className="p-6 sm:p-10" />
            </div>
          </div>
        </div>
      )}

      <article className="cover-letter-print" aria-hidden="true">
        <LetterBody letter={letter} />
      </article>
    </section>
  );
}
