import React from "react";
import { motion } from "framer-motion";

export default function NavigationDots({ activeSection, onSectionClick }) {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <nav className="space-y-4">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className="group relative block"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-blue-600 border-blue-600 scale-125"
                  : "bg-transparent border-slate-400 hover:border-blue-400"
              }`}
            />

            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                {section.label}
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 -translate-x-1" />
            </div>
          </motion.button>
        ))}
      </nav>
    </div>
  );
}
