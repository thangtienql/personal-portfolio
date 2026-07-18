"use client";

import { useState } from "react";
import { Grid3X3 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    title: "Bureau — Architecture Studio Website",
    image: "/images/projects/project1.jpg",
    categories: ["React", "Next.js", "Tailwind CSS"],
    size: "full" as const,
  },
  {
    id: 2,
    title: "E-Commerce Platform Redesign",
    image: "/images/projects/project2.jpg",
    categories: ["TypeScript", "Node.js"],
    size: "half" as const,
  },
  {
    id: 3,
    title: "SaaS Dashboard Interface",
    image: "/images/projects/project3.jpg",
    categories: ["React", "PostgreSQL"],
    size: "half" as const,
  },
  {
    id: 4,
    title: "Mobile Banking App",
    image: "/images/projects/project4.jpg",
    categories: ["React Native", "Node.js"],
    size: "half" as const,
  },
  {
    id: 5,
    title: "AI Content Generator",
    image: "/images/projects/project5.jpg",
    categories: ["Next.js", "OpenAI"],
    size: "half" as const,
  },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="portfolio" className="page-section py-24 md:py-32">
      <div className="custom-container max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          <SectionHeader
            subtitle="Portfolio"
            subtitleIcon={<Grid3X3 size={14} />}
            title={
              <>
                Featured <span className="text-accent">Projects</span>
              </>
            }
          />

          <div className="mt-16 space-y-6 min-w-0">
            {PROJECTS.map((project, idx) => (
              <ScrollAnimation
                key={project.id}
                animation={
                  idx === 0
                    ? "fade_from_bottom"
                    : idx % 2 === 0
                      ? "fade_from_left"
                      : "fade_from_right"
                }
                delay={idx * 0.1}
              >
                <div
                  className={`group portfolio-item overflow-hidden rounded-2xl border border-[#333] bg-[#252525] transition-all hover:border-accent/50 ${
                    project.size === "full" ? "col-span-full" : ""
                  }`}
                >
                  <div
                    className="portfolio-item-inner relative aspect-video cursor-pointer overflow-hidden"
                    onClick={() => setLightbox(project.image)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />

                    {/* Categories */}
                    <ul className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2">
                      {project.categories.map((cat) => (
                        <li key={cat}>
                          <span className="rounded-full border border-accent/30 bg-black/60 px-3 py-1 text-xs text-accent backdrop-blur-sm">
                            {cat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-8 top-8 text-2xl text-white hover:text-accent"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <div className="relative max-h-[80vh] max-w-[80vw]">
            <img
              src={lightbox}
              alt="Project preview"
              className="max-h-[80vh] max-w-[80vw] rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
