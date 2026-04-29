import { ExternalLink, Github, Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import Tilt from "react-parallax-tilt";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  githubLink?: string;
  highlights: string[];
  index: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  githubLink,
  highlights,
  index,
}: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ once: true });
  const isMobile = useIsMobile();

  const animationDelay = `${index * 100}ms`;
  const isPlayStore = link.includes("play.google.com");

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fade-up" : "scroll-hidden"}`}
      style={{ animationDelay }}
    >
      <Tilt
        tiltMaxAngleX={isMobile ? 0 : 12}
        tiltMaxAngleY={isMobile ? 0 : 12}
        perspective={900}
        scale={isMobile ? 1 : 1.03}
        transitionSpeed={400}
        gyroscope={!isMobile}
        glareEnable={!isMobile}
        glareMaxOpacity={0.12}
        glareColor="#4f46e5"
        glarePosition="all"
        className="glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 group h-full border border-border/90 shadow-md"
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

        <div className="p-5 sm:p-6 flex flex-col min-h-0 sm:min-h-[460px]">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:shadow-md transition-all shadow-sm">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-1 leading-tight">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-6 sm:line-clamp-[8]">
            {description}
          </p>

          <div className="space-y-1.5 mb-4 flex-shrink-0">
            {highlights.slice(0, 3).map((highlight, idx) => (
              <div key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="hidden sm:block flex-grow min-h-[1rem]" />

          <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
            {technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-foreground border border-primary/15"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border">
                +{technologies.length - 5}
              </span>
            )}
          </div>

          <div className="flex gap-3 flex-shrink-0 mt-auto pt-2">
            {link !== "#" && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/85 transition-colors group/link"
                aria-label={`Open ${title}`}
              >
                <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" />
                {isPlayStore ? "Play Store" : "View live"}
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`View ${title} source`}
              >
                <Github size={16} />
                Source
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;
