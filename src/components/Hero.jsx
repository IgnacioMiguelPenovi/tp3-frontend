import React from 'react';
import { ArrowDownRight, Layers, Users, Sparkles, Info, Github } from 'lucide-react';
import { STARTUP_INFO } from '../data/tp3Data';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">TP3 · Dos sentencias, dos soluciones</span>
            <span className="eyebrow-tag">Bloque: {STARTUP_INFO.blockName}</span>
          </div>

          <h1 className="hero-title">
            {STARTUP_INFO.name}:{' '}
            <span className="hero-title-accent">
              transparencia en cada redondeo y en cada transferencia
            </span>
          </h1>

          <p className="hero-objective">{STARTUP_INFO.objective}</p>

          <p className="hero-description">{STARTUP_INFO.problemSummary}</p>

          <div className="hero-meta-grid">
            <div className="meta-card">
              <Layers size={18} className="meta-icon" aria-hidden="true" />
              <div>
                <span className="meta-label">Origen de la startup</span>
                <strong className="meta-value">Estudiantes de {STARTUP_INFO.origin}</strong>
              </div>
            </div>
            <div className="meta-card">
              <Users size={18} className="meta-icon" aria-hidden="true" />
              <div>
                <span className="meta-label">Equipo y bloque asignado</span>
                <strong className="meta-value">
                  {STARTUP_INFO.groupNumber} ({STARTUP_INFO.sorteoCode}) · {STARTUP_INFO.targetInstitute}
                </strong>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#propuesta-r3" className="btn btn-primary">
              Ver Propuesta 1 (R3)
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a href="#propuesta-r4" className="btn btn-secondary">
              Ver Propuesta 2 (R4)
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/McDiLeonardo-Alt"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mi perfil de GitHub (se abre en una pestaña nueva)"
            >
              <Github size={17} aria-hidden="true" />
              Mi GitHub
            </a>
          </div>

          <div className="scope-notice" role="note">
            <Info size={16} aria-hidden="true" />
            <span>
              <strong>Alcance de la entrega:</strong> esta landing presenta y diagrama dos
              propuestas conceptuales de flujos agénticos. No ejecuta IA real ni se conecta a
              pasarelas o APIs productivas.
            </span>
          </div>
        </div>

        <aside className="hero-showcase" aria-label="Identidad asignada de RedBarrioAnimal">
          <div className="startup-card">
            <div className="startup-card-header">
              <span className="chip chip-green">
                <Sparkles size={13} aria-hidden="true" />
                Startup asignada · {STARTUP_INFO.sorteoCode}
              </span>
              <span className="startup-category">{STARTUP_INFO.category}</span>
            </div>

            <div className="startup-logo-frame">
              <img
                src={STARTUP_INFO.logoPath}
                alt="Logo oficial completo de RedBarrioAnimal"
                className="startup-logo-full"
              />
            </div>

            <div className="startup-card-footer">
              <div className="footer-stat">
                <span className="stat-label">Sentencia R3</span>
                <span className="stat-text">Medios de pago y confirmación real</span>
              </div>
              <div className="footer-divider" aria-hidden="true" />
              <div className="footer-stat">
                <span className="stat-label">Sentencia R4</span>
                <span className="stat-text">Rendición de gastos y revisión humana</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
