export interface Skill {
  name: string;
  percent: number;
  icon: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  projects: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  categories: string[];
  size: "full" | "half";
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export interface ResumeItem {
  date: string;
  entries: {
    title: string;
    company: string;
  }[];
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}
