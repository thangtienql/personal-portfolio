import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  children: ReactNode;
  href?: string;
}

export default function ThemeButton({
  icon,
  children,
  className = "",
  href,
  ...props
}: ThemeButtonProps) {
  const baseClasses =
    "theme-btn inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent px-8 py-2.5 text-xs font-semibold uppercase text-black transition-all hover:bg-transparent hover:text-accent";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {icon}
      {children}
    </button>
  );
}
