import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl transition-all duration-300 ease-in-out ${
        isScrolled
          ? "py-3 bg-[var(--color-card)]/80 backdrop-blur-xl border border-[var(--color-text-secondary)]/30 shadow-2xl rounded-2xl"
          : "py-5 bg-transparent border-transparent"
      }`}
    >
      <div className="px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
        </div>

        <div className="flex flex-row items-center gap-8">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Resume Button */}
            <button className="px-6 py-2 rounded-full bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-text-secondary)] text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
              Resume
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="px-6 py-2 rounded-full bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-text-secondary)] text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              {isDarkMode ? "Light☀️" : "Dark🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
