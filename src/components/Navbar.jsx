import React, { useState, useEffect } from 'react';
import { ShieldCheck, FileSearch, Menu, X } from 'lucide-react';
import { STARTUP_INFO } from '../data/tp3Data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          href="#inicio"
          className="nav-brand"
          aria-label="Ir al inicio de RedBarrioAnimal"
          onClick={closeMenu}
        >
          <img
            src={STARTUP_INFO.logoPath}
            alt="Logo de RedBarrioAnimal"
            className="nav-logo"
          />
          <div className="nav-brand-text">
            <span className="nav-brand-name">{STARTUP_INFO.name}</span>
            <span className="nav-brand-meta">
              {STARTUP_INFO.groupNumber} · {STARTUP_INFO.sorteoCode}
            </span>
          </div>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="nav-links-menu"
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>

        <nav
          id="nav-links-menu"
          className={`nav-links ${isOpen ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          <a href="#inicio" onClick={closeMenu}>
            Startup
          </a>
          <a href="#desglose" onClick={closeMenu}>
            Desglose lógico
          </a>
          <a href="#propuesta-r3" className="nav-pill" onClick={closeMenu}>
            <ShieldCheck size={15} aria-hidden="true" />
            Flujo 1 · R3
          </a>
          <a href="#propuesta-r4" className="nav-pill" onClick={closeMenu}>
            <FileSearch size={15} aria-hidden="true" />
            Flujo 2 · R4
          </a>
          <a href="#equipo" onClick={closeMenu}>
            Resumen y equipo
          </a>
        </nav>
      </div>
    </header>
  );
}
