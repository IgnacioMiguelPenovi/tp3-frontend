import React from 'react';
import { ShieldCheck, FileSearch } from 'lucide-react';
import { STARTUP_INFO } from '../data/tp3Data';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#inicio" className="nav-brand" aria-label="Ir al inicio de RedBarrioAnimal">
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

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#inicio">Startup</a>
          <a href="#desglose">Desglose lógico</a>
          <a href="#propuesta-r3" className="nav-pill">
            <ShieldCheck size={15} aria-hidden="true" />
            Flujo 1 · R3
          </a>
          <a href="#propuesta-r4" className="nav-pill">
            <FileSearch size={15} aria-hidden="true" />
            Flujo 2 · R4
          </a>
          <a href="#equipo">Resumen y equipo</a>
        </nav>
      </div>
    </header>
  );
}
