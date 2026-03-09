import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#020617] via-[#020014] to-[#00010a] text-[#E0E0E0] relative overflow-hidden noise-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.10),transparent_60%)] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(34,197,94,0.09),transparent_55%)] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.85),transparent_65%)] mix-blend-soft-light opacity-75" />

      <div className="max-w-6xl mx-auto pt-4 pb-10 relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
