"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Import project images
// Using uploaded project images
const projectImages = {
  calculator: "/lovable-uploads/ef04aed4-6bdd-4d71-807d-35db611f2fe9.png",
  emojiGame: "/lovable-uploads/66294794-b492-40fe-ab02-5817706eaf61.png",
  numberGame: "/lovable-uploads/0d65c2eb-6b0e-4331-a3ea-14900e6b1475.png",
  university: "/lovable-uploads/59dc46f2-4eb8-4cf5-a223-fd6fe82b7536.png",
  authkit: "/lovable-uploads/79316e16-1ce4-4c70-b983-ec66e7399c68.png",
  modal: "/lovable-uploads/f822ae39-caac-4683-9be0-7250a4942391.png"
};

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Calculator App",
    description: "Modern calculator with gradient design and smooth animations",
    image: "/lovable-uploads/ef04aed4-6bdd-4d71-807d-35db611f2fe9.png",
    tech: ["React", "CSS3", "JavaScript"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Emoji Flip Game", 
    description: "Interactive memory game with beautiful Japanese-inspired design",
    image: "/lovable-uploads/66294794-b492-40fe-ab02-5817706eaf61.png",
    tech: ["React", "GSAP", "Game Logic"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Number Guessing Game",
    description: "Fun guessing game with score tracking and responsive UI", 
    image: "/lovable-uploads/0d65c2eb-6b0e-4331-a3ea-14900e6b1475.png",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "University Portal",
    description: "Student management system with code integration features",
    image: "/lovable-uploads/59dc46f2-4eb8-4cf5-a223-fd6fe82b7536.png", 
    tech: ["React", "Node.js", "Database"],
    github: "#",
    live: "#"
  },
  {
    id: 5,
    title: "AuthKit Interface",
    description: "Modern authentication system with multiple login options",
    image: "/lovable-uploads/79316e16-1ce4-4c70-b983-ec66e7399c68.png",
    tech: ["React", "OAuth", "Security"], 
    github: "#",
    live: "#"
  },
  {
    id: 6,
    title: "Modal Components",
    description: "Reusable modal system with smooth transitions",
    image: "/lovable-uploads/f822ae39-caac-4683-9be0-7250a4942391.png",
    tech: ["React", "TypeScript", "UI/UX"],
    github: "#",
    live: "#"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Cards staggered animation
      gsap.fromTo(".project-card",
        { 
          opacity: 0, 
          y: 100, 
          scale: 0.8 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6"
      id="projects"
    >
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass rounded-2xl overflow-hidden group hover:glow-primary transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="glass-strong text-foreground hover:text-primary"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="glass-strong text-foreground hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="glass"
            size="lg"
            className="hover:glow-primary"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;