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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-med-khalifa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mohamed Khalifa Boufares — Portfolio",
  description:
    "Portfolio de Mohamed Khalifa Boufares, étudiant en Génie Logiciel et Systèmes d'Information. Projets Full-Stack, IA, data engineering, certifications en images et CV interactif.",
  keywords: [
    "portfolio",
    "génie logiciel",
    "systèmes d'information",
    "développeur full-stack",
    "data engineering",
    "intelligence artificielle",
    "IoT",
    "PFE",
  ],
  authors: [{ name: "Mohamed Khalifa Boufares" }],
  openGraph: {
    title: "Mohamed Khalifa Boufares — Portfolio",
    description:
      "Étudiant en Génie Logiciel & Systèmes d'Information — web, IA, data et IoT.",
    url: "/",
    siteName: "Portfolio — Mohamed Khalifa Boufares",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Khalifa Boufares — Portfolio",
    description:
      "Étudiant en Génie Logiciel & Systèmes d'Information — web, IA, data et IoT.",
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
