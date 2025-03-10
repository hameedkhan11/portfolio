"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ThemeToggle from "@/components/ui/ThemeToggle";
import SkillsPage from "@/components/SkillsPage";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black-100 text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <FloatingNav navItems={navItems} />
      <main className="min-h-screen px-4 md:px-6 mx-auto max-w-[100vw]">
        <Hero />
        <Clients />
        <SkillsPage />
        <RecentProjects />
        <Experience />
        <Approach />
        <Grid />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
