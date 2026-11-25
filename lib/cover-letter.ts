import en from "@/content/cover-letter.en.json";
import fr from "@/content/cover-letter.fr.json";
import { profile } from "@/lib/data";

export type CoverLetterLanguage = "fr" | "en";

export type CoverLetterContent = {
  code: CoverLetterLanguage;
  label: string;
  shortLabel: string;
  locale: string;
  date: string;
  eyebrow: string;
  title: string;
  subject: string;
  recipient: string;
  preview: string;
  paragraphs: string[];
  closing: string;
  signatureRole: string;
  signatureName: string;
  fileName: string;
  pdfPath: string;
  printTitle: string;
};

export const coverLetterLanguages: CoverLetterLanguage[] = ["fr", "en"];

export const coverLetters: Record<CoverLetterLanguage, CoverLetterContent> = {
  fr: fr as unknown as CoverLetterContent,
  en: en as unknown as CoverLetterContent,
};

export const coverLetterContact = {
  name: profile.name,
  email: profile.email,
  phone: profile.phone,
  location: profile.location,
};
