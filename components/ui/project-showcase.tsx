"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ShowcaseProject = {
  code: string;
  title: string;
  url: string;
  text: string;
  tags: string[];
};

type ProjectShowcaseProps = React.HTMLAttributes<HTMLDivElement> & {
  projects: ShowcaseProject[];
};

export const ProjectShowcase = React.forwardRef<HTMLDivElement, ProjectShowcaseProps>(
  ({ projects, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(projects.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, [projects.length]);

    const handlePrev = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }, [projects.length]);

    React.useEffect(() => {
      const timer = window.setInterval(handleNext, 4500);
      return () => window.clearInterval(timer);
    }, [handleNext]);

    return (
      <div ref={ref} className={cn("project-showcase", className)} {...props}>
        <div className="project-showcase__glow project-showcase__glow--left" aria-hidden="true" />
        <div className="project-showcase__glow project-showcase__glow--right" aria-hidden="true" />

        <div className="project-showcase__stage" aria-live="polite">
          <div className="project-showcase__track">
            {projects.map((project, index) => {
              const offset = index - currentIndex;
              const total = projects.length;
              let position = (offset + total) % total;

              if (position > Math.floor(total / 2)) {
                position -= total;
              }

              const distance = Math.abs(position);
              const isCenter = position === 0;
              const isAdjacent = distance === 1;
              const isVisible = distance <= 2;

              return (
                <article
                  aria-hidden={!isCenter}
                  className={cn(
                    "showcase-card",
                    isCenter && "showcase-card--active",
                    isAdjacent && "showcase-card--adjacent",
                  )}
                  key={project.title}
                  style={{
                    opacity: isCenter ? 1 : isAdjacent ? 0.48 : isVisible ? 0.16 : 0,
                    transform: `
                      translateX(${position * 54}%)
                      translateZ(${isCenter ? 80 : -Math.min(distance, 2) * 120}px)
                      scale(${isCenter ? 1 : isAdjacent ? 0.86 : 0.68})
                      rotateY(${position * -12}deg)
                    `,
                    visibility: isVisible ? "visible" : "hidden",
                    zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                  }}
                >
                  <div className="showcase-card__shine" />
                  <div className="showcase-card__top">
                    <span>{project.code}</span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </div>
                  <div className="showcase-card__body">
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                  <div className="showcase-card__tags">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="showcase-card__link"
                    href={project.url}
                    target={project.url.startsWith("http") ? "_blank" : undefined}
                    rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                    tabIndex={isCenter ? 0 : -1}
                  >
                    View project
                    <ExternalLink aria-hidden="true" size={15} />
                  </a>
                </article>
              );
            })}
          </div>

          <Button
            aria-label="Previous project"
            className="project-showcase__nav project-showcase__nav--prev"
            onClick={handlePrev}
            size="icon"
            type="button"
            variant="outline"
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </Button>
          <Button
            aria-label="Next project"
            className="project-showcase__nav project-showcase__nav--next"
            onClick={handleNext}
            size="icon"
            type="button"
            variant="outline"
          >
            <ChevronRight aria-hidden="true" size={20} />
          </Button>
        </div>

        <div className="project-showcase__dots" aria-label="Project slides">
          {projects.map((project, index) => (
            <button
              aria-label={`Show ${project.title}`}
              aria-current={index === currentIndex}
              key={project.title}
              onClick={() => setCurrentIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    );
  },
);

ProjectShowcase.displayName = "ProjectShowcase";
