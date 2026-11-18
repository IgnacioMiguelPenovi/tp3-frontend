import React from 'react';
import { FileCode2, ArrowRight } from 'lucide-react';
import { PROPOSALS } from '../data/tp3Data';

export default function SentenceBreakdown() {
  return (
    <section id="desglose" className="section-surface">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">
            <FileCode2 size={15} aria-hidden="true" />
            De la lógica proposicional a la solución
          </span>
          <h2 className="section-title">Desglose previo de las dos sentencias</h2>
          <p className="section-subtitle">
            Antes de diseñar los flujos, desarmamos cada regla asignada del IFTS 16 en sus datos
            necesarios, su condición lógica (respetando <code>y</code>, <code>o</code> y{' '}
            <code>¬</code>) y su consecuencia.
          </p>
        </div>

        <div className="breakdown-grid">
          {PROPOSALS.map((prop) => (
            <article key={prop.id} className="breakdown-card">
              <div className="breakdown-top">
                <span className="chip chip-outline">{prop.badge}</span>
                <h3 className="breakdown-title">{prop.title}</h3>
              </div>

              <blockquote className="sentence-quote">
                “{prop.originalSentence}”
              </blockquote>

              <div className="breakdown-rows">
                <div className="breakdown-block">
                  <span className="block-label">1. Datos necesarios</span>
                  <ul className="inputs-list">
                    {prop.breakdown.inputs.map((item) => (
                      <li key={item.key}>
                        <code>{item.key}</code>
                        <span>{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="breakdown-block">
                  <span className="block-label">2. Condición lógica</span>
                  <div className="condition-box">
                    <code>{prop.breakdown.condition}</code>
                  </div>
                </div>

                <div className="breakdown-block">
                  <span className="block-label">3. Consecuencia establecida</span>
                  <ul className="consequence-list">
                    {prop.breakdown.consequence.map((c, idx) => (
                      <li key={idx}>
                        <ArrowRight size={15} className="consequence-arrow" aria-hidden="true" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
