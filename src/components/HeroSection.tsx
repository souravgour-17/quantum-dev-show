"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const splineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      );
    }

    if (splineRef.current) {
      tl.fromTo(
        splineRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        "-=1"
      );
    }

    const orbAnimation = gsap.to(".glow-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5,
    });

    return () => {
      tl.kill();
      orbAnimation.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0" ref={splineRef}>
        <iframe
          src="https://my.spline.design/orb-9SITXOaRO7Np2OG4tTA0DddX/"
          width="100%"
          height="100%"
          className="border-0 object-cover"
          title="3D Background Animation"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/40 z-10" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="glow-orb absolute w-32 h-32 rounded-full opacity-10 glow-primary"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center">
          <div ref={headlineRef}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text text-glow">Sourav</span>
            </h1>
          </div>

          <div ref={subtitleRef}>
            {/* Typewriter text */}
            <p className="text-2xl md:text-3xl text-indigo-400 font-semibold mb-4">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Full Stack Developer",
                  "React & Node.js Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Crafting immersive digital experiences with cutting-edge technologies.
              Specializing in modern web development, animations, and futuristic UI design.
            </p>
          </div>

          <div ref={ctaRef}>
            <Button
              variant="hero"
              size="xl"
              className="px-12 py-4 text-lg font-bold"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
