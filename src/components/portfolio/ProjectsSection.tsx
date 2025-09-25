import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "EcoCommerce Platform",
      description:
        "A sustainable e-commerce platform built with Next.js and Stripe, featuring carbon footprint tracking and eco-friendly product recommendations.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Tailwind",
      ],
      category: "Full Stack",
      link: "#",
      github: "#",
    },
    {
      title: "DesignSync Collaboration Tool",
      description:
        "Real-time design collaboration platform for remote teams with live editing, version control, and integrated feedback systems.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
      category: "Web App",
      link: "#",
      github: "#",
    },
    {
      title: "SmartHome Dashboard",
      description:
        "IoT dashboard for smart home management with real-time monitoring, automation rules, and energy consumption analytics.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      technologies: ["React", "D3.js", "Python", "MQTT", "InfluxDB"],
      category: "Dashboard",
      link: "#",
      github: "#",
    },
    {
      title: "Mental Health Support App",
      description:
        "Mobile-first web application providing mental health resources, mood tracking, and connection to professional support networks.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
      technologies: ["React Native", "Express", "JWT", "Chart.js", "PWA"],
      category: "Mobile",
      link: "#",
      github: "#",
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
    <section id="projects" className="py-24 bg-white">
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
              Featured Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A selection of projects that showcase my technical skills and
              creative problem-solving approach.
            </p>
          </motion.div>

          {/* Project Showcase */}
          <motion.div variants={itemVariants} className="relative">
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <div className="grid lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-slate-100 aspect-video lg:aspect-auto">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeProject}
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevProject}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextProject}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <div>
                        <Badge
                          variant="outline"
                          className="mb-3 text-blue-600 border-blue-200 bg-blue-50"
                        >
                          {projects[activeProject].category}
                        </Badge>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">
                          {projects[activeProject].title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {projects[activeProject].description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-slate-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          className="border-slate-300 text-slate-700 hover:bg-slate-50"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Card>

            {/* Project Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? "bg-blue-600 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div variants={itemVariants} className="mt-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer">
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3 text-xs">
                        {project.category}
                      </Badge>
                      <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {project.description.slice(0, 100)}...
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
