"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import { HoverEffect } from "./ui/card-hover-effect";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Meteors } from "./ui/meteors";
import { cn } from "@/lib/utils";

type Skill = {
  title: string;
  description: string;
  color: string;
  // Replace icon URLs with emoji icons
  emoji: string;
};

type SkillsData = {
  [key: string]: Skill[];
};

type Category = {
  id: string;
  name: string;
};

type ContentItem = {
  title: string;
  description: string;
  content: React.ReactNode;
  color?: string;
};

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const categories: Category[] = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "devops", name: "DevOps" },
  ];

  // Replace icon path references with emoji characters
  const skillsData: SkillsData = {
    frontend: [
      {
        title: "HTML",
        description: "Semantic markup and accessibility",
        emoji: "🌐",
        color: "from-orange-400 to-orange-600",
      },
      {
        title: "CSS",
        description: "Responsive design, animations, and layouts",
        emoji: "🎨",
        color: "from-blue-400 to-blue-600",
      },
      {
        title: "JavaScript",
        description: "DOM manipulation and browser APIs",
        emoji: "📜",
        color: "from-yellow-400 to-yellow-600",
      },
      {
        title: "TypeScript",
        description: "Type-safe development and better tooling",
        emoji: "📘",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "React.js",
        description: "Component-based UI development",
        emoji: "⚛️",
        color: "from-cyan-400 to-cyan-600",
      },
      {
        title: "Next.js",
        description: "Server-side rendering and static generation",
        emoji: "▲",
        color: "from-neutral-700 to-neutral-900",
      },
    ],
    backend: [
      {
        title: "Node.js",
        description: "Server-side JavaScript runtime",
        emoji: "🟢",
        color: "from-green-500 to-green-700",
      },
      {
        title: "Express.js",
        description: "Web application framework for Node.js",
        emoji: "🚂",
        color: "from-neutral-500 to-neutral-700",
      },
      {
        title: "Web Sockets",
        description: "Real-time bidirectional communication",
        emoji: "🔌",
        color: "from-purple-400 to-purple-600",
      },
    ],
    database: [
      {
        title: "MongoDB",
        description: "Document-based NoSQL database",
        emoji: "🍃",
        color: "from-green-400 to-green-600",
      },
      {
        title: "PostgreSQL",
        description: "Advanced open-source relational database",
        emoji: "🐘",
        color: "from-blue-400 to-indigo-600",
      },
      {
        title: "MySQL",
        description: "Popular open-source relational database",
        emoji: "🐬",
        color: "from-blue-500 to-orange-500",
      },
      {
        title: "Prisma",
        description: "Next-generation ORM for Node.js and TypeScript",
        emoji: "◭",
        color: "from-indigo-400 to-indigo-600",
      },
      {
        title: "Drizzle",
        description: "TypeScript ORM with maximum type safety",
        emoji: "💧",
        color: "from-amber-400 to-amber-600",
      },
      {
        title: "Redis",
        description: "In-memory data structure store and cache",
        emoji: "🔴",
        color: "from-red-400 to-red-600",
      },
    ],
    devops: [
      {
        title: "Docker",
        description: "Containerization platform for applications",
        emoji: "🐳",
        color: "from-blue-400 to-blue-600",
      },
    ],
  };

  const content: ContentItem[] = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with modern frameworks",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-xl p-8 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {skillsData.frontend.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Backend Development",
      description:
        "Creating robust server-side applications and APIs to power web experiences",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/40 dark:to-emerald-950/40 rounded-xl p-8 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {skillsData.backend.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Database Management",
      description:
        "Working with both relational and NoSQL databases to store and query data efficiently",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/40 dark:to-cyan-950/40 rounded-xl p-8 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {skillsData.database.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "DevOps & Deployment",
      description:
        "Containerizing applications and implementing CI/CD pipelines for seamless deployment",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/40 dark:to-orange-950/40 rounded-xl p-8 flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 w-full max-w-5xl">
            {skillsData.devops.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
      <div className="absolute -z-10 top-10 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute -z-10 bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[150px]" />

      <Meteors number={10} />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My toolkit for building modern, scalable web applications with focus
            on performance and user experience.
          </p>
        </motion.div>

        {/* Tabs for mobile */}
        <div className="md:hidden mb-8">
          <div className="flex overflow-x-auto pb-2 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              {skillsData[activeCategory].map((skill, idx) => (
                <SkillCardMobile key={idx} skill={skill} index={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Sticky scroll for desktop */}
        <div className="hidden md:block">
          <StickyScroll content={content} />
        </div>

        {/* Skills Summary Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Top Technologies
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These are the technologies I work with most frequently and have
              the most experience with.
            </p>
          </motion.div>

          <HoverEffect
            className="shadow-lg"
            items={[
              {
                title: "MERN STACK",
                description: "Have experience in Mern Stack",
                link: "#",
              },
              {
                title: "TailwindCss/Shadcn",
                description:
                  "Created Stunning Ui with tailwind css and shadcn ui",
                link: "#",
              },
              {
                title: "React.js",
                description: "Frontend library for building user interfaces",
                link: "#",
              },
              {
                title: "Next.js",
                description: "React framework for production applications",
                link: "#",
              },
              {
                title: "TypeScript",
                description: "Typed superset of JavaScript",
                link: "#",
              },
              {
                title: "PostgreSQL",
                description: "Advanced open-source relational database",
                link: "#",
              },
              {
                title: "Prisma",
                description: "Next-generation ORM for Node.js and TypeScript",
                link: "#",
              },
              {
                title: "Docker",
                description: "Containerization platform for applications",
                link: "#",
              },
              {
                title: "Redis",
                description: "Redis for caching and real-time data",
                link: "#",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

// Updated SkillCard to use emoji instead of images
const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <BackgroundGradientAnimation className="rounded-xl">
        <div className="p-5 h-full bg-white dark:bg-gray-900 rounded-lg flex flex-col">
          <div className="flex items-center mb-4">
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}
            >
              <span className="text-xl">{skill.emoji}</span>
            </div>
            <h3 className="ml-3 font-bold text-lg">{skill.title}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {skill.description}
          </p>
        </div>
      </BackgroundGradientAnimation>
    </motion.div>
  );
};

// Updated SkillCardMobile to use emoji instead of images
const SkillCardMobile: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`p-4 rounded-lg bg-gradient-to-br ${skill.color}`}
    >
      <div className="bg-white/90 dark:bg-gray-900/90 rounded-lg p-3 flex flex-col items-center">
        <span className="text-2xl mb-2">{skill.emoji}</span>
        <h3 className="font-semibold text-sm text-center">{skill.title}</h3>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
