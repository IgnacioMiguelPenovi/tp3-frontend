import React, { useState } from 'react';
import { ChevronDown, ChevronsUpDown } from 'lucide-react';

export default function AccordionPanel({ items, sectionTitle }) {
  const [openIds, setOpenIds] = useState([items[0]?.id]);

  const toggleItem = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allOpen = openIds.length === items.length;

  const toggleAll = () => {
    setOpenIds(allOpen ? [] : items.map((item) => item.id));
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion-header-bar">
        <div>
          <h4 className="accordion-heading">Detalles de la solución · {sectionTitle}</h4>
          <p className="accordion-hint">
            Abrí o cerrá cada desplegable con clic o con teclado (<code>Tab</code> +{' '}
            <code>Enter</code> / <code>Espacio</code>).
          </p>
        </div>
        <button
          type="button"
          className="btn-text-toggle"
          onClick={toggleAll}
        >
          <ChevronsUpDown size={15} aria-hidden="true" />
          {allOpen ? 'Cerrar todos' : 'Abrir todos'}
        </button>
      </div>

      <div className="accordion-list">
        {items.map((item) => {
          const isOpen = openIds.includes(item.id);
          const triggerId = `trigger-${item.id}`;
          const panelId = `panel-${item.id}`;

          return (
            <div key={item.id} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
              <h5 className="accordion-title-wrap">
                <button
                  type="button"
                  id={triggerId}
                  className="accordion-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="accordion-trigger-left">
                    <span className="accordion-tag">{item.tag}</span>
                    <span className="accordion-title">{item.title}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`accordion-chevron ${isOpen ? 'rotated' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </h5>

              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="accordion-panel"
                hidden={!isOpen}
              >
                <div className="accordion-body">
                  <p className="accordion-intro">{item.content.intro}</p>
                  <ul className="accordion-bullets">
                    {item.content.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                  {item.content.highlight && (
                    <div className="accordion-highlight">{item.content.highlight}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
