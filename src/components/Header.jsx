import React, { useState, useEffect, useCallback } from "react";
import "../App.css";

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Debounced scroll handler para mejor performance
  const handleScroll = useCallback(() => {
    // Cambiar el estado del header cuando se hace scroll
    setIsScrolled(window.scrollY > 50);

    // Detectar la sección actual con mejor precisión
    const sections = ["inicio", "about-mi", "proyects", "tecnologias", "contacto"];
    const current = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Mejor detección: centro de la ventana
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      }
      return false;
    });

    if (current && current !== activeSection) {
      setActiveSection(current);
    }
  }, [activeSection]);

  useEffect(() => {
    let timeoutId = null;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Cerrar menú móvil con Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevenir scroll del body cuando menú está abierto
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#inicio", text: "Inicio" },
    { href: "#about-mi", text: "Sobre Mi" },
    { href: "#proyects", text: "Proyectos" },
    { href: "#tecnologias", text: "Tecnologías" },
    { href: "#contacto", text: "Contacto" },
  ];

  const handleNavClick = (href) => {
    const sectionId = href.slice(1);
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    // Scroll suave programático (fallback si CSS no funciona)
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`Header ${isScrolled ? "Header--scrolled" : ""}`}>
      <nav
        className="nav bg-grip"
        role="navigation"
        aria-label="Navegación principal">
        <div className="logo_container">
          <a
            href="#inicio"
            className="logo_nav"
            aria-label="Inicio - Alejandro Anchundia"
            onClick={() => handleNavClick("#inicio")}>
            Alejandro
          </a>
        </div>

        {/* Menú Desktop */}
        <div className="menu_container">
          <ul className="list_nav">
            {navItems.map((item) => (
              <li key={item.href} className='nav_item'>
                <a
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  aria-current={activeSection === item.href.slice(1) ? "page" : undefined}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú Mobile */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Cerrar menú móvil" : "Abrir menú móvil"}
          aria-controls="mobile-navigation">
          <span className={`burger_line ${isMobileMenuOpen ? 'burger_line--1' : ''}`}></span>
          <span className={`burger_line ${isMobileMenuOpen ? 'burger_line--2' : ''}`}></span>
          <span className={`burger_line ${isMobileMenuOpen ? 'burger_line--3' : ''}`}></span>
        </button>

        {/* Overlay para cerrar menú móvil */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <div
          id="mobile-navigation"
          className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu--open" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={`mobile-${item.href}`}>
                <a
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  aria-current={activeSection === item.href.slice(1) ? "page" : undefined}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;