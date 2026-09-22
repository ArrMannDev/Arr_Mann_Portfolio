import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Code, DownloadSimple, List, X } from "@phosphor-icons/react";
import { portfolioData } from "../data";
import { navigationLinks } from "../navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header">
      <Link
        className="wordmark"
        to="/"
        aria-label="Arr Mann home"
        onClick={() => setMenuOpen(false)}
      >
        <Code size={32} weight="bold" />
        <span>
          Arr <span>Mann</span>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigationLinks.map(([label, path]) => (
          <NavLink key={path} to={path} end>
            {label}
          </NavLink>
        ))}
      </nav>
      <a
        className="download-button"
        href={portfolioData.person.resumePdf}
        download="Arr-Mann-Resume.pdf"
      >
        Download CV <DownloadSimple size={18} />
      </a>
      <button
        ref={menuButton}
        className="icon-button menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={25} /> : <List size={25} />}
      </button>
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
              menuButton.current?.focus();
            }
          }}
        >
          {navigationLinks.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
