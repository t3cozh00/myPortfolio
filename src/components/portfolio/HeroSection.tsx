import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="section min-h-screen flex flex-col justify-center"
    >
      <div className="flex flex-col items-start gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm <span className="text-accent">Zoey</span>.
          <br /> I build things for the web.
        </motion.h1>
        <p className="max-w-2xl text-slate-300">
          Full-stack developer specializing in React, TypeScript and cloud-first
          architectures.
        </p>
        <div className="flex gap-3">
          <a href="#projects" className="btn btn-accent">
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Me <ArrowDownRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
