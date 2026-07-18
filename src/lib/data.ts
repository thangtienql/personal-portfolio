import type { Service, Skill, Project, Testimonial, ResumeItem } from "@/types";

export const SERVICES: Service[] = [
  {
    icon: "code",
    title: "WordPress Development",
    description:
      "I create and customize WordPress themes and plugins to build robust websites.",
    projects: "50+ Projects",
  },
  {
    icon: "bezier-curve",
    title: "Frontend Development",
    description:
      "I build responsive and interactive user interfaces with modern tech stacks.",
    projects: "Various Projects",
  },
  {
    icon: "trending-up",
    title: "Website Optimization",
    description:
      "I optimize website performance and ensure best practices for SEO.",
    projects: "Ongoing",
  },
];

export const SKILLS: Skill[] = [
  { name: "WordPress", percent: 90, icon: "wordpress" },
  { name: "PHP", percent: 85, icon: "php" },
  { name: "JavaScript", percent: 80, icon: "javascript" },
  { name: "HTML/CSS", percent: 95, icon: "html5" },
  { name: "React", percent: 70, icon: "react" },
  { name: "Next.js", percent: 65, icon: "nextjs" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bureau — Architecture Studio Website",
    image: "/images/projects/project1.jpg",
    categories: ["React", "Next.js", "Tailwind CSS"],
    size: "full",
  },
  {
    id: 2,
    title: "E-Commerce Platform Redesign",
    image: "/images/projects/project2.jpg",
    categories: ["TypeScript", "Node.js"],
    size: "half",
  },
  {
    id: 3,
    title: "SaaS Dashboard Interface",
    image: "/images/projects/project3.jpg",
    categories: ["React", "PostgreSQL"],
    size: "half",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    image: "/images/projects/project4.jpg",
    categories: ["React Native", "Node.js"],
    size: "half",
  },
  {
    id: 5,
    title: "AI Content Generator",
    image: "/images/projects/project5.jpg",
    categories: ["Next.js", "OpenAI"],
    size: "half",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "/images/testimonial1.jpg",
    content:
      "Working with John was an absolute pleasure. He delivered a stunning website that perfectly captured our brand identity. His attention to detail and technical expertise are unmatched.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateLab",
    avatar: "/images/testimonial2.jpg",
    content:
      "John is a rare talent who combines beautiful design with solid engineering. Our project was delivered on time and exceeded expectations. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, CreativeHub",
    avatar: "/images/testimonial3.jpg",
    content:
      "I've worked with many developers, but John stands out. He truly understands user experience and creates interfaces that are both beautiful and functional.",
  },
];

export const RESUME_ITEMS: ResumeItem[] = [
  {
    date: "2020 — Present",
    entries: [
      {
        title: "Web Developer",
        company: "Beplus (https://beplusthemes.com/)",
      },
    ],
  },
  {
    date: "2017 — 2020",
    entries: [
      {
        title: "Student",
        company: "FPT Polytechnic College",
      },
    ],
  },
];

export const CLIENTS = [
  "client1", "client2", "client3", "client4",
  "client5", "client6", "client7", "client8",
];
