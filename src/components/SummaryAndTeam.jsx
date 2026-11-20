import React from 'react';
import { CheckCircle2, ShieldAlert, Users, GraduationCap, ArrowUpRight } from 'lucide-react';
import { STARTUP_INFO } from '../data/tp3Data';

export default function SummaryAndTeam() {
  return (
    <>
      <section className="section-surface comparison-section">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">
              <ShieldAlert size={15} aria-hidden="true" />
              Síntesis comparativa
            </span>
            <h2 className="section-title">Dos flujos complementarios para RedBarrioAnimal</h2>
            <p className="section-subtitle">
              Juntos cubren todo el ciclo solidario del bloque <strong>{STARTUP_INFO.blockName}</strong>:
              desde que el comprador confirma el redondeo hasta que el refugio rinde los fondos.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Flujo 1 · R3 (Guardián del pago solidario)</th>
                  <th>Flujo 2 · R4 (Revisor de rendición de cuentas)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Evento de inicio</td>
                  <td>El cliente confirma el total de la compra</td>
                  <td>Un refugio solicita una transferencia</td>
                </tr>
                <tr>
                  <td>Herramientas consultadas</td>
                  <td>Registro de compra + servicio de pagos externo</td>
                  <td>Registro de solicitudes + informes de gastos</td>
                </tr>
                <tr>
                  <td>Decisión principal</td>
                  <td>Validación de pago previo, medio habilitado y confirmación del proveedor</td>
                  <td>Verificación de si el informe de gastos está pendiente</td>
                </tr>
                <tr>
                  <td>Intervención humana</td>
                  <td>No requerida en el flujo normal (solo conciliación excepcional)</td>
                  <td>Obligatoria: una persona responsable revisa el informe</td>
                </tr>
                <tr>
                  <td>Decisiones agregadas del grupo</td>
                  <td>Bloquear el pago e informar motivo si falla la condición inicial</td>
                  <td>Continuar el circuito normal si el informe ya fue verificado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="equipo" className="team-section">
        <div className="container">
          <div className="team-grid">
            <div className="team-card">
              <div className="team-card-head">
                <Users size={18} aria-hidden="true" />
                <h3>Equipo · {STARTUP_INFO.groupNumber}</h3>
              </div>
              <p className="team-desc">
                Proyecto desarrollado para <strong>{STARTUP_INFO.targetInstitute}</strong> a partir
                de la startup <strong>{STARTUP_INFO.name}</strong> creada por estudiantes del{' '}
                <strong>{STARTUP_INFO.origin}</strong>.
              </p>
              <ul className="member-grid">
                {STARTUP_INFO.members.map((member) => {
                  const isIgnacio = member.variant === 'ignacio';

                  return (
                    <li
                      key={member.name}
                      className={`member-pill${member.github ? ' member-pill--linked' : ''}`}
                    >
                      {member.github ? (
                        <a
                          className={`member-pill-link${isIgnacio ? ' member-pill-link--ignacio' : ''}`}
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Perfil de GitHub de ${member.name}`}
                        >
                          <span className="member-avatar" aria-hidden="true">
                            {member.initials}
                          </span>
                          <span className="member-name-text">{member.name}</span>
                          {isIgnacio && (
                            <span className="member-ext-badge" aria-hidden="true">
                              <ArrowUpRight size={15} />
                            </span>
                          )}
                        </a>
                      ) : (
                        <>
                          <span className="member-avatar" aria-hidden="true">
                            {member.initials}
                          </span>
                          <span>{member.name}</span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="team-card">
              <div className="team-card-head">
                <GraduationCap size={18} aria-hidden="true" />
                <h3>Verificación lógica de la propuesta</h3>
              </div>
              <ul className="checklist">
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>
                    Identidad original completa de <strong>{STARTUP_INFO.name}</strong> y bloque{' '}
                    <strong>{STARTUP_INFO.blockName}</strong> ({STARTUP_INFO.sorteoCode}).
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>
                    Redacción original de las sentencias R3 y R4 respetada sin alterar operadores.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>
                    Dos diagramas legibles con distinción explícita de decisiones del grupo e
                    intervención humana.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>
                    Desplegables accesibles por clic y teclado con datos, acciones, excepciones y
                    casos límite.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>
            <strong>{STARTUP_INFO.name}</strong> · Asignación {STARTUP_INFO.groupNumber} (
            {STARTUP_INFO.sorteoCode}) · Origen {STARTUP_INFO.origin}
          </span>
          <span>TP3 · Dos sentencias, dos soluciones · IFTS 29 (2026)</span>
        </div>
      </footer>
    </>
  );
}
