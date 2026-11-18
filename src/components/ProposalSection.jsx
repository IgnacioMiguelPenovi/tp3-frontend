import React, { useState } from 'react';
import { Bot, Wrench, UserCheck, Compass, RotateCcw } from 'lucide-react';
import AccordionPanel from './AccordionPanel';

export default function ProposalSection({ proposal, DiagramComponent, variant = 'light' }) {
  const [selectedScenarioId, setSelectedScenarioId] = useState('all');

  const activeScenario = proposal.scenarios.find((s) => s.id === selectedScenarioId);
  const activeNodes = activeScenario ? activeScenario.activeNodes : null;

  return (
    <section
      id={proposal.id}
      className={`proposal-section ${variant === 'tinted' ? 'section-tinted' : ''}`}
    >
      <div className="container">
        <div className="proposal-header">
          <div className="proposal-header-top">
            <span className="chip chip-green">{proposal.badge}</span>
            <span className="proposal-tag">{proposal.shortTag}</span>
          </div>
          <h2 className="proposal-title">{proposal.title}</h2>
          <p className="proposal-benefit">{proposal.benefit}</p>
        </div>

        <div className="proposal-sentence-banner">
          <span className="banner-label">Sentencia original asignada</span>
          <blockquote>“{proposal.originalSentence}”</blockquote>
        </div>

        <div className="agent-summary-grid">
          <div className="summary-tile">
            <div className="tile-head">
              <Bot size={17} aria-hidden="true" />
              <h3>Qué haría el futuro agente</h3>
            </div>
            <p>{proposal.agentSummary.role}</p>
          </div>
          <div className="summary-tile">
            <div className="tile-head">
              <Wrench size={17} aria-hidden="true" />
              <h3>Herramientas que consultaría</h3>
            </div>
            <p>{proposal.agentSummary.tools}</p>
          </div>
          <div className="summary-tile">
            <div className="tile-head">
              <UserCheck size={17} aria-hidden="true" />
              <h3>Intervención humana</h3>
            </div>
            <p>{proposal.agentSummary.humanIntervention}</p>
          </div>
        </div>

        <div className="diagram-card">
          <div className="diagram-toolbar">
            <div>
              <h3 className="diagram-heading">
                <Compass size={18} aria-hidden="true" />
                Diagrama de flujo agéntico · {proposal.title}
              </h3>
              <p className="diagram-sub">
                Probá recorrer un caso donde la condición se cumple y otro donde no, o dejá la
                vista completa del recorrido.
              </p>
            </div>

            <div className="scenario-controls" role="group" aria-label="Simulador visual de casos">
              <button
                type="button"
                className={`scenario-btn ${selectedScenarioId === 'all' ? 'is-selected' : ''}`}
                onClick={() => setSelectedScenarioId('all')}
              >
                <RotateCcw size={14} aria-hidden="true" />
                Vista completa
              </button>
              {proposal.scenarios.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  className={`scenario-btn ${selectedScenarioId === sc.id ? 'is-selected' : ''}`}
                  onClick={() => setSelectedScenarioId(sc.id)}
                >
                  {sc.label}
                </button>
              ))}
            </div>
          </div>

          {activeScenario && (
            <div className="scenario-callout" role="status" aria-live="polite">
              <span className="callout-badge">{activeScenario.badge}</span>
              <p>{activeScenario.explanation}</p>
            </div>
          )}

          <DiagramComponent activeNodes={activeNodes} />
        </div>

        <AccordionPanel items={proposal.accordions} sectionTitle={proposal.title} />
      </div>
    </section>
  );
}
