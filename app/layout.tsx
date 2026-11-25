import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Khalifa Boufares — Portfolio",
  description:
    "Portfolio de Mohamed Khalifa Boufares, étudiant en Génie Logiciel et Systèmes d'Information. Projets Full-Stack, IA, data engineering, certifications en images et CV vidéo interactif.",
  keywords: [
    "portfolio",
    "génie logiciel",
    "systèmes d'information",
    "développeur full-stack",
    "data engineering",
    "intelligence artificielle",
    "IoT",
  ],
  authors: [{ name: "Mohamed Khalifa Boufares" }],
  openGraph: {
    title: "Mohamed Khalifa Boufares — Portfolio",
    description:
      "Étudiant en Génie Logiciel & Systèmes d'Information — web, IA, data et IoT.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070913] text-slate-100">
        {children}
      </body>
    </html>
  );
}
