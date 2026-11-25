import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import CoverLetter from "@/components/CoverLetter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import VideoCV from "@/components/VideoCV";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Certificates />
        <VideoCV />
        <CoverLetter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
