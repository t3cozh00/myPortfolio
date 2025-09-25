import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import SkillsSection from "../components/portfolio/SkillSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ContactSection from "../components/portfolio/ContactSection";
import NavigationDots from "../components/portfolio/NavigationSection";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();

  // Show scroll to top button after scrolling down
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setShowScrollTop(latest > 500);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Update active section based on scroll position
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.6, rootMargin: "-10% 0px -10% 0px" }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Navigation Dots */}
      <NavigationDots
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Page Sections */}
      <HeroSection onScrollDown={() => scrollToSection("about")} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
