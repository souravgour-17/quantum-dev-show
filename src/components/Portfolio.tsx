"use client";

import { useState, useEffect } from "react";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import Preloader from "./Preloader";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { scrollRef } = useLocomotiveScroll();

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Prevent scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <div className="relative">
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main Content */}
      {showContent && (
        <div ref={scrollRef} className="min-h-screen" data-scroll-container>
          <Navigation />
          <main>
            <div data-scroll data-scroll-speed="-3">
              <HeroSection />
            </div>
            <div data-scroll data-scroll-speed="-1">
              <AboutSection />
            </div>
            <div data-scroll data-scroll-speed="-2">
              <ProjectsSection />
            </div>
            <div data-scroll data-scroll-speed="-1">
              <ContactSection />
            </div>
          </main>
          <FooterSection />
        </div>
      )}
    </div>
  );
};

export default Portfolio;