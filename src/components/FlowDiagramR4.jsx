import React from 'react';
import {
  Play,
  Database,
  UserCheck,
  PauseCircle,
  CheckCircle2,
  ArrowRightCircle,
} from 'lucide-react';
import {
  nodeStatusClass,
  isEdgeActive,
  ArrowDown,
  ArrowRight,
  DecisionDiamond,
} from './FlowPrimitives';

export default function FlowDiagramR4({ activeNodes }) {
  return (
    <div
      className="diagram-canvas"
      role="img"
      aria-label="Diagrama de flujo agéntico para la Propuesta 2: Revisor de rendición de cuentas (Sentencia R4)"
    >
      <div className="diagram-legend">
        <span className="legend-item">
          <span className="legend-swatch swatch-start" /> Inicio / Resultado
        </span>
        <span className="legend-item">
          <span className="legend-swatch swatch-data" /> Datos de entrada
        </span>
        <span className="legend-item">
          <span className="legend-swatch swatch-decision" /> Decisión lógica
        </span>
        <span className="legend-item">
          <span className="legend-swatch swatch-human" /> Intervención humana
        </span>
        <span className="legend-item">
          <span className="legend-swatch swatch-group" /> Decisión del grupo (borde punteado)
        </span>
      </div>

      <div className="flow-canvas-grid">
        {/* Tronco superior */}
        <div className="flow-trunk-cell">
          <div className={`flow-node node-terminator ${nodeStatusClass('r4-inicio', activeNodes)}`}>
            <span className="node-kicker">
              <Play size={12} aria-hidden="true" /> 1. Inicio
            </span>
            <strong>Un refugio solicita una transferencia</strong>
          </div>
          <ArrowDown active={isEdgeActive(['r4-inicio', 'r4-datos'], activeNodes)} />

          <div className={`flow-node node-data ${nodeStatusClass('r4-datos', activeNodes)}`}>
            <span className="node-kicker">
              <Database size={12} aria-hidden="true" /> 2. Datos de entrada
            </span>
            <span>
              La solicitud de transferencia y el estado del informe de gastos del refugio
            </span>
          </div>
          <ArrowDown active={isEdgeActive(['r4-datos', 'r4-dec'], activeNodes)} />
        </div>

        {/* Decisión + Rama NO lateral */}
        <div className="flow-trunk-cell">
          <DecisionDiamond
            id="r4-dec"
            title="3. Decisión"
            subtitle="¿El informe de gastos está pendiente de verificación?"
            activeNodes={activeNodes}
            height={186}
          />
        </div>

        <div className="flow-side-cell flow-side-r4">
          <ArrowRight
            label="NO"
            active={isEdgeActive(['r4-dec', 'r4-dec-no', 'r4-circuito-normal'], activeNodes)}
          />
          <div className="flow-side-stack">
            <div
              className={`flow-node node-group-decision ${nodeStatusClass(
                'r4-circuito-normal',
                activeNodes
              )}`}
            >
              <span className="node-kicker node-kicker-dashed">
                <ArrowRightCircle size={12} aria-hidden="true" /> Decisión del grupo
              </span>
              <strong>Seguir con el circuito normal de transferencia</strong>
            </div>
            <ArrowDown
              active={isEdgeActive(['r4-circuito-normal', 'r4-fin-normal'], activeNodes)}
            />
            <div
              className={`flow-node node-terminator node-end-success ${nodeStatusClass(
                'r4-fin-normal',
                activeNodes
              )}`}
            >
              <span className="node-kicker">
                <CheckCircle2 size={12} aria-hidden="true" /> Resultado
              </span>
              <strong>Transferencia sigue su curso</strong>
            </div>
          </div>
        </div>

        {/* Rama SÍ */}
        <div className="flow-trunk-cell">
          <ArrowDown
            label="SÍ"
            active={isEdgeActive(['r4-dec', 'r4-dec-si', 'r4-en-revision'], activeNodes)}
          />
          <div className={`flow-node node-action ${nodeStatusClass('r4-en-revision', activeNodes)}`}>
            <span className="node-kicker">Acción del agente</span>
            <strong>Dejar la solicitud en revisión</strong>
          </div>
          <ArrowDown active={isEdgeActive(['r4-en-revision', 'r4-humana'], activeNodes)} />
          <div className={`flow-node node-human ${nodeStatusClass('r4-humana', activeNodes)}`}>
            <span className="node-kicker node-kicker-human">
              <UserCheck size={13} aria-hidden="true" /> Acción · Intervención humana
            </span>
            <strong>Una persona responsable revisa el informe</strong>
          </div>
          <ArrowDown active={isEdgeActive(['r4-humana', 'r4-fin-revision'], activeNodes)} />
          <div
            className={`flow-node node-terminator node-end-human ${nodeStatusClass(
              'r4-fin-revision',
              activeNodes
            )}`}
          >
            <span className="node-kicker">
              <PauseCircle size={12} aria-hidden="true" /> Resultado
            </span>
            <strong>Solicitud en revisión</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
