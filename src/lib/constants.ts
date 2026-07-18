import type { NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "resume", label: "Resume", icon: "briefcase" },
  { id: "services", label: "Services", icon: "stream" },
  { id: "skills", label: "Skills", icon: "shapes" },
  { id: "portfolio", label: "Portfolios", icon: "grip-vertical" },
  { id: "testimonial", label: "Testimonial", icon: "comment" },
  { id: "contact", label: "Contact", icon: "envelope" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: "facebook", url: "https://www.facebook.com/tienply21/", label: "Facebook" },
  { icon: "instagram", url: "https://www.instagram.com/hoang_thang_tien/", label: "Instagram" },
  { icon: "github", url: "https://github.com/thangtienql", label: "GitHub" },
];

export const PROFILE = {
  name: "Tiến",
  designation: "Web Developer",
  email: "thangtienql@gmail.com",
  location: "Đà Nẵng, Việt Nam",
  avatar: "/images/me.jpg",
  logo: "/images/logo.png",
};
