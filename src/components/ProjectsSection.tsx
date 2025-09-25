"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const frontendProjects = [
  {
    title: "Coming Soon Page",
    desc: "A simple 'Coming Soon' page with subscription form made in HTML/CSS.",
    screenshot: "/coming-soon.png",
    liveLink: "https://souravgour-17.github.io/coming-soon/",
    codeLink: "https://github.com/souravgour-17/coming-soon",
  },
  {
    title: "Gradient Calculator",
    desc: "A stylish calculator with gradient design built using HTML, CSS & JavaScript.",
    screenshot: "/calculator.png",
    liveLink: "https://souravgour-17.github.io/calculator/",
    codeLink: "https://github.com/souravgour-17/calculator",
  },
  {
    title: "Containeer",
    desc: "Responsive container layout using modern CSS grid techniques.",
    screenshot: "/containeer.png",
    liveLink: "https://souravgour-17.github.io/Containeer/",
    codeLink: "https://github.com/souravgour-17/Containeer",
  },
  {
    title: "Doraemon Fan Page",
    desc: "Colorful Doraemon-themed fan page built with Bootstrap.",
    screenshot: "/Doraemon _Fan _Page.png",
    liveLink: "https://souravgour-17.github.io/-Doraemon-Fan-Page-Colorful-Bootstrap-Layout/",
    codeLink: "https://github.com/souravgour-17/-Doraemon-Fan-Page-Colorful-Bootstrap-Layout",
  },
  {
    title: "Kal Tak News",
    desc: "Modern newspaper layout with multi-column design and carousel.",
    screenshot: "/Kal_Tak_News.png",
    liveLink: "https://souravgour-17.github.io/Kal-Tak-News-Modern-Newspaper-Layout/",
    codeLink: "https://github.com/souravgour-17/Kal-Tak-News-Modern-Newspaper-Layout",
  },
  {
    title: "Modern Newspaper Layout",
    desc: "Clean, responsive newspaper layout with grid system.",
    screenshot: "/Modern_Newspaper_Layout.png",
    liveLink: "https://souravgour-17.github.io/-Modern-Newspaper-Layout/",
    codeLink: "https://github.com/souravgour-17/-Modern-Newspaper-Layout",
  },
  {
    title: "Doraemon Login Form",
    desc: "Interactive Doraemon-themed login form with modern styling.",
    screenshot: "/Doraemon_Login_Form.png",
    liveLink: "https://souravgour-17.github.io/Doraemon-Login-Form/",
    codeLink: "https://github.com/souravgour-17/Doraemon-Login-Form",
  },
  {
    title: "Newspaper Grid Layout",
    desc: "Grid-based newspaper template showing articles and images.",
    screenshot: "/Newspaper_Grid_Layout.png",
    liveLink: "https://souravgour-17.github.io/Newspaper-Grid-Layout/",
    codeLink: "https://github.com/souravgour-17/Newspaper-Grid-Layout",
  },
  {
    title: "Grid Bootstrap Layout Project",
    desc: "Bootstrap grid layout project demonstrating responsive design.",
    screenshot: "/Grid_Bootstrap_Layout_Project.png",
    liveLink: "https://souravgour-17.github.io/Grid-Bootstrap-Layout-Project/",
    codeLink: "https://github.com/souravgour-17/Grid-Bootstrap-Layout-Project",
  },
];

// Naya Projects Section ke liye 3 projects
const projectsOnly = [
  {
    title: "Emoji Flip Game",
    desc: "A fun memory card game built with HTML, CSS & JS where players flip cards to match emojis.",
    screenshot: "/emoji-flip.png",
    liveLink: "https://souravgour-17.github.io/Emoji_flip_game/",
    codeLink: "https://github.com/souravgour-17/Emoji_flip_game",
  },
  {
    title: "Number Guess Game",
    desc: "An interactive guessing game where players try to guess the correct number with hints.",
    screenshot: "/number-guess.png",
    liveLink: "https://souravgour-17.github.io/Number-Guess/",
    codeLink: "https://github.com/souravgour-17/Number-Guess",
  },
  {
    title: "Fee Payment App",
    desc: "A complete fee management system built with React and Node.js.",
    screenshot: "/Fee_Payment_App.png",
    liveLink: "https://fee-payment-frontend.onrender.com/#/login",
    codeLink: "https://github.com/souravgour-17/Fee_Payment",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 100, scale: 0.8 },
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
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Frontend Designs Section */}
      <section ref={sectionRef} className="py-20 px-6" id="frontend-projects">
        <div className="container mx-auto">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Frontend <span className="gradient-text">Designs</span>
          </h2>

          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendProjects.map((project, i) => (
              <div
                key={i}
                className="project-card glass rounded-2xl overflow-hidden group hover:glow-primary transition-all duration-500 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.codeLink} target="_blank" rel="noreferrer">
                      <Button variant="secondary" size="sm" className="glass-strong text-foreground hover:text-primary">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <Button variant="secondary" size="sm" className="glass-strong text-foreground hover:text-primary">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Only Section */}
      <section ref={sectionRef} className="py-20 px-6" id="projects-only">
  <div className="container mx-auto">
    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
  My <span className="gradient-text">Projects</span>
</h2>


    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsOnly.map((project, i) => (
        <div
          key={i}
          className="project-card glass rounded-2xl overflow-hidden group hover:glow-primary transition-all duration-500 hover:scale-105"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.screenshot}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="sm" className="glass-strong text-foreground hover:text-primary">
                  <Github className="w-4 h-4" />
                </Button>
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="sm" className="glass-strong text-foreground hover:text-primary">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {project.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default ProjectsSection;
