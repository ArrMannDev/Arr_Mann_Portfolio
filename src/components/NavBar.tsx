import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-8xl transition-all duration-300 ease-in-out ${
        isScrolled
          ? "py-3 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl"
          : "py-5 bg-transparent border-transparent"
      }`}
    >
      <div className="px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
            Arr Mann
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex items-center">
          <button className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
