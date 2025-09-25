import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronUp } from "lucide-react";

import Hero from "@/components/portfolio/HeroSection";
import About from "@/components/portfolio/AboutSection";
import Skills from "@/components/portfolio/SkillSection";
import Projects from "@/components/portfolio/ProjectsSection";
import Contact from "@/components/portfolio/ContactSection";
import Navigation from "@/components/portfolio/NavigationSection";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const [showTop, setShowTop] = useState(false);

  // Show scroll to top button after scrolling down
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Navigation />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-40"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="section pt-10">
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="flex items-center gap-4"></div>
          <p className="subtle">{new Date().getFullYear()}©Zoey</p>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 btn btn-accent shadow-xl z-40"
        >
          <ChevronUp />
        </button>
      )}
    </div>
  );
}
