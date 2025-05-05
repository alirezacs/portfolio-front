
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { Github, Gitlab, Instagram } from "lucide-react";

export function Navbar() {
  const { t, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "experience", href: "#experience" },
    { label: "portfolio", href: "#portfolio" },
    { label: "achievements", href: "#achievements" },
    { label: "contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">
          {t("name")}
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://gitlab.com/alireza.cs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent/10 transition-colors"
            aria-label="GitHub"
          >
            <Gitlab className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/alirezacs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent/10 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/alirezam.p90000/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent/10 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
