"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Layers, Shapes, Grid3X3, MessageCircle, Mail, X } from "lucide-react";
import type { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "resume", label: "Resume", icon: "briefcase" },
  { id: "services", label: "Services", icon: "layers" },
  { id: "skills", label: "Skills", icon: "shapes" },
  { id: "portfolio", label: "Portfolios", icon: "grid" },
  { id: "testimonial", label: "Testimonial", icon: "message-circle" },
  { id: "contact", label: "Contact", icon: "mail" },
];

const iconMap: Record<string, React.ReactNode> = {
  home: <Home size={15} />,
  user: <User size={15} />,
  briefcase: <Briefcase size={15} />,
  layers: <Layers size={15} />,
  shapes: <Shapes size={15} />,
  grid: <Grid3X3 size={15} />,
  "message-circle": <MessageCircle size={15} />,
  mail: <Mail size={15} />,
};

export default function NavMenu() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  }

  return (
    <>
      {/* Hamburger button — mobile */}
      <button
        onClick={() => setMobileOpen((v) => !v)}
        className="fixed right-4 top-4 z-[9999] flex h-[50px] w-[50px] flex-col items-center justify-center gap-1 rounded-full border border-[#565656] bg-transparent transition-colors hover:border-accent md:hidden"
        aria-label="Toggle menu"
      >
        <span className="block h-[2px] w-5 bg-white" />
        <span className="block h-[2px] w-5 bg-white" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed right-0 top-0 z-[9999] h-full w-72 bg-[#191919] px-[30px] py-[45px] shadow-2xl md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[16px] font-light uppercase tracking-[1px] text-white">
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-accent"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-3 py-[7px] text-[16px] ${
                      activeSection === item.id
                        ? "text-accent"
                        : "text-[#999]"
                    }`}
                  >
                    {iconMap[item.icon]}
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <span className="mb-4 block text-[13px] font-light uppercase text-white">
                Social
              </span>
              <div className="flex gap-4">
                <a href="#" className="text-[14px] text-[#999] hover:text-accent">
                  Twitter
                </a>
                <a href="#" className="text-[14px] text-[#999] hover:text-accent">
                  Dribbble
                </a>
                <a href="#" className="text-[14px] text-[#999] hover:text-accent">
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop nav — vertical, right side, icon-based, centered vertically */}
      <nav
        className="fixed right-[68px] top-1/2 z-20 hidden md:block"
        style={{ transform: "translateY(-50%)" }}
      >
        <ul className="flex flex-col gap-[20px] py-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`block ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-[#999]"
                } transition-colors`}
                title={item.label}
              >
                {iconMap[item.icon]}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
