"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FileCode, 
  Zap, 
  Globe, 
  Database, 
  GitBranch, 
  Cloud, 
  Server 
} from "lucide-react"; // Added icons for new skills

// Using uploaded profile image reference
const profileImg = "/lovable-uploads/b911f8b4-f58e-404b-a12f-662b99ef4710.png";

gsap.registerPlugin(ScrollTrigger);

// Updated skills: included Full Stack, MERN, Git, Deployment
const skills = [
  { icon: FileCode, name: "HTML/CSS", level: 95 },
  { icon: Zap, name: "JavaScript", level: 90 },
  { icon: Globe, name: "React", level: 88 },
  { icon: Database, name: "Node.js & Express", level: 85 },
  { icon: Database, name: "MongoDB", level: 80 },
  { icon: Server, name: "Full Stack Development", level: 85 },
  { icon: Zap, name: "MERN Stack", level: 82 },
  { icon: GitBranch, name: "Git & GitHub", level: 90 },
  { icon: Cloud, name: "Deployment", level: 80 },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Section fade and blur
      tl.fromTo(sectionRef.current,
        { opacity: 0, filter: "blur(5px)" },
        { opacity: 1, filter: "blur(0px)", duration: 0.8 }
      );

      // Image animation
      tl.fromTo(imageRef.current,
        { opacity: 0, x: -100, rotateY: 15 },
        { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );

      // Content animation
      tl.fromTo(contentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.7"
      );

      // Skills animation
      tl.fromTo(".skill-item",
        { opacity: 0, y: 30, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.5, 
          stagger: 0.1,
          ease: "back.out(1.7)" 
        },
        "-=0.5"
      );

      // Hover effect for image
      const imageElement = imageRef.current;
      if (imageElement) {
        imageElement.addEventListener("mouseenter", () => {
          gsap.to(imageElement, { scale: 1.05, rotateY: -5, duration: 0.3, ease: "power2.out" });
        });
        imageElement.addEventListener("mouseleave", () => {
          gsap.to(imageElement, { scale: 1, rotateY: 0, duration: 0.3, ease: "power2.out" });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6"
      id="about"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-neon-cyan p-1 glow-primary">
                <div className="w-full h-full bg-background rounded-full p-2">
                  <img
                    src={profileImg}
                    alt="Sourav - Web Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full animate-ping" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full float" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate web developer with expertise in creating immersive digital experiences. 
              I specialize in modern JavaScript frameworks, advanced animations with GSAP, and 
              building responsive, user-centric applications that push the boundaries of web technology.
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, and constantly learning to stay at the forefront of web development innovation.
            </p>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="skill-item glass rounded-lg p-4 text-center group hover:glow-primary transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:text-neon-cyan transition-colors" />
                      <h4 className="text-sm font-medium text-foreground">{skill.name}</h4>
                      <div className="mt-2 w-full bg-secondary rounded-full h-1">
                        <div
                          className="bg-gradient-to-r from-primary to-neon-cyan h-1 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
