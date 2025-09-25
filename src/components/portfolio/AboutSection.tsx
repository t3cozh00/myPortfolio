import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Users, Zap } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions",
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description: "User-centered approach to problem solving",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with diverse teams",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with latest technologies",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-blue-600 border-blue-200 bg-blue-50"
            >
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Crafting Digital Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience in web development and design, I
              specialize in creating exceptional digital experiences that
              combine aesthetic appeal with robust functionality.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  My Journey
                </h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    I started my career as a frontend developer, fascinated by
                    the intersection of technology and creativity. Over the
                    years, I've evolved into a full-stack developer with a keen
                    eye for design and user experience.
                  </p>
                  <p>
                    My approach combines technical expertise with creative
                    problem-solving, ensuring that every project not only
                    functions flawlessly but also delights users with intuitive
                    interfaces and smooth interactions.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new design
                    trends, contributing to open-source projects, or mentoring
                    aspiring developers in the community.
                  </p>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-slate-600">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    30+
                  </div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Highlights Grid */}
            <motion.div variants={itemVariants} className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="p-6 border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-slate-50 hover:bg-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <highlight.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-slate-600">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
