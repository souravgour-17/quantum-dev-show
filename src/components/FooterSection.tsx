"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer animation
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );

      // Floating particles animation
      gsap.to(".footer-particle", {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.3,
          repeat: -1
        }
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-16 px-6 mt-20"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="footer-particle absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative">
        <div className="glass rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">Sourav</h3>
              <p className="text-muted-foreground text-sm">
                Web Developer & Creative Technologist
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <nav className="flex flex-wrap justify-center gap-6">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Contact
                </a>
                <button
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Back to Top
                </button>
              </nav>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 glass-strong rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-strong rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-strong rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-glass-border mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Sourav. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-red-500" /> using React & GSAP
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;