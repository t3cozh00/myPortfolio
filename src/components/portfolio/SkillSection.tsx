import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "blue",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux",
      ],
    },
    {
      title: "Backend",
      color: "green",
      skills: [
        "Node.js",
        "Python",
        "Express",
        "Django",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "Design",
      color: "purple",
      skills: [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "UI/UX Design",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      title: "Tools",
      color: "orange",
      skills: ["Git", "Docker", "AWS", "Vercel", "Webpack", "Jest"],
    },
  ];

  const colorVariants = {
    blue: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    green: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
    purple:
      "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
    orange:
      "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100",
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
    <section id="skills" className="py-24 bg-slate-50">
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
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Technologies I Love
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through years of hands-on experience
              and continuous learning.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-4"
              >
                <Card className="p-6 border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {category.title}
                    </h3>
                    <div
                      className={`w-12 h-1 rounded-full bg-${category.color}-500`}
                    ></div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: categoryIndex * 0.1 + index * 0.05,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="outline"
                          className={`${
                            colorVariants[category.color]
                          } transition-all duration-200 cursor-default text-sm font-medium`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Always Learning
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly
                exploring new frameworks, languages, and methodologies to stay
                at the forefront of web development and design.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Badge
                  variant="outline"
                  className="text-slate-600 border-slate-200"
                >
                  Currently Learning: Rust
                </Badge>
                <Badge
                  variant="outline"
                  className="text-slate-600 border-slate-200"
                >
                  Next: Three.js
                </Badge>
                <Badge
                  variant="outline"
                  className="text-slate-600 border-slate-200"
                >
                  Exploring: Web3
                </Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
