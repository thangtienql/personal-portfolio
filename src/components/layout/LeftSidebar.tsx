"use client";

import { Mail } from "lucide-react";
import { PROFILE, SOCIAL_LINKS } from "@/lib/constants";

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
  ),
  dribbble: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  instagram: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
};

export default function LeftSidebar() {
  return (
    <aside
      className="hidden lg:block fixed left-[20px] top-1/2 z-10 w-[400px] max-w-[400px] rounded-[30px] border border-[#565656] bg-transparent p-[50px]"
      style={{ transform: "translateY(-50%)" }}
    >
      {/* Header: Logo + Designation */}
      <div className="mb-[30px] flex items-center justify-between">
        <img src="/images/logo.png" alt="Logo" className="h-9 w-auto" />
        <span className="text-right text-[14px] text-white">
          {PROFILE.designation}
        </span>
      </div>

      {/* Avatar */}
      <img
        src={PROFILE.avatar}
        alt={PROFILE.name}
        className="mb-[56px] w-full max-w-full rounded-[30px]"
      />

      {/* Email */}
      <h2 className="mb-2 text-center text-[24px] font-light text-white">
        {PROFILE.email}
      </h2>

      {/* Location */}
      <h2 className="mb-[30px] text-center text-[24px] font-light text-white">
        {PROFILE.location}
      </h2>

      {/* Copyright */}
      <p className="mb-[25px] text-center text-[14px] text-[#999]">
        &copy; {new Date().getFullYear()} {PROFILE.name.split(" ")[0]}. All
        Rights Reserved
      </p>

      {/* Social Links */}
      <ul className="mb-[30px] flex flex-wrap items-center justify-center gap-2">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.icon}>
            <a
              href={link.url}
              aria-label={link.label}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#565656] text-[20px] text-[#999] transition-all hover:border-accent hover:text-accent"
            >
              {socialIconMap[link.icon]}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#contact"
        className="inline-flex w-full items-center justify-center gap-2 rounded-[30px] border-2 border-accent bg-accent px-[58px] py-[10px] text-[16px] uppercase text-black transition-all hover:bg-transparent hover:text-accent"
      >
        <Mail size={20} /> Hire Me!
      </a>
    </aside>
  );
}
