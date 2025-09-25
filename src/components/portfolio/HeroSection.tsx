import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ onScrollDown }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-blue-400 text-lg font-medium tracking-wide">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Alex Chen
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-slate-300 mb-8 font-light"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I create beautiful, functional digital experiences that bridge the
            gap between design and technology. Passionate about clean code,
            intuitive interfaces, and innovative solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-16"
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white hover:text-white rounded-full"
            >
              <Mail className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white hover:text-white rounded-full"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white hover:text-white rounded-full"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-3 text-lg font-medium rounded-full"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center cursor-pointer"
            onClick={onScrollDown}
          >
            <span className="text-slate-400 text-sm mb-3 tracking-wide">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6 text-blue-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
