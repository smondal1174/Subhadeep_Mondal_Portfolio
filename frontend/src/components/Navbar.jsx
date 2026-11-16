import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Work", "projects"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Toolkit", "skills"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-20% 0px -55% 0px" },
    );
    [...links.map(([, id]) => id), "contact", "home"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
  return (
    <header className="site-header">
      <nav className="wrap nav-inner" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#home"
          aria-label="Subhadeep Mondal home"
          onClick={() => setOpen(false)}
        >
          sm<span>.</span>
          <small>
            SUBHADEEP
            <br />
            MONDAL
          </small>
        </a>
        <div className={`nav-links ${open ? "is-open" : ""}`} id="navigation">
          {links.map(([label, id]) => (
            <a
              href={`#${id}`}
              key={id}
              onClick={() => setOpen(false)}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Let's connect <ArrowUpRight size={16} />
          </a>
        </div>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
