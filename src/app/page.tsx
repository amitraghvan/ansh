/**
 * page.tsx — Root page: Archer-style clean portfolio
 */

import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatementSection from "@/components/StatementSection";
import TimelineSection from "@/components/TimelineSection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main id="main-content" className="relative">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <StatementSection />
        <ProjectsSection />
        <TimelineSection />
        <AwardsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
