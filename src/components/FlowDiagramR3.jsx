import React from 'react';
import { CheckCircle2, XCircle, Play, Database, Clock, Ban } from 'lucide-react';
import {
  nodeStatusClass,
  isEdgeActive,
  ArrowDown,
  ArrowRight,
  DecisionDiamond,
} from './FlowPrimitives';

export default function FlowDiagramR3({ activeNodes }) {
  return (
    <div
      className="diagram-canvas"
      role="img"
      aria-label="Diagrama de flujo agéntico para la Propuesta 1: Guardián del pago solidario (Sentencia R3)"
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
          <span className="legend-swatch swatch-group" /> Decisión del grupo (borde punteado)
        </span>
      </div>

      <div className="flow-canvas-grid">
        {/* Tronco superior */}
        <div className="flow-trunk-cell">
          <div className={`flow-node node-terminator ${nodeStatusClass('r3-inicio', activeNodes)}`}>
            <span className="node-kicker">
              <Play size={12} aria-hidden="true" /> 1. Inicio
            </span>
            <strong>El cliente confirma el total de la compra</strong>
          </div>
          <ArrowDown active={isEdgeActive(['r3-inicio', 'r3-datos'], activeNodes)} />

          <div className={`flow-node node-data ${nodeStatusClass('r3-datos', activeNodes)}`}>
            <span className="node-kicker">
              <Database size={12} aria-hidden="true" /> 2. Datos de entrada
            </span>
            <span>
              Estado de la compra, medio de pago elegido y si la donación estaba incluida en el total
            </span>
          </div>
          <ArrowDown active={isEdgeActive(['r3-datos', 'r3-dec1'], activeNodes)} />
        </div>

        {/* Decisión 1 + Rama NO lateral */}
        <div className="flow-trunk-cell">
          <DecisionDiamond
            id="r3-dec1"
            title="3. Decisión 1"
            subtitle="¿La compra NO fue pagada Y el total está confirmado Y el medio es (tarjeta habilitada O billetera habilitada)?"
            activeNodes={activeNodes}
            height={224}
          />
        </div>

        <div className="flow-side-cell flow-side-r3-1">
          <ArrowRight
            label="NO"
            active={isEdgeActive(['r3-dec1', 'r3-dec1-no', 'r3-no-permitir'], activeNodes)}
          />
          <div className="flow-side-stack">
            <div
              className={`flow-node node-group-decision ${nodeStatusClass(
                'r3-no-permitir',
                activeNodes
              )}`}
            >
              <span className="node-kicker node-kicker-dashed">
                <Ban size={12} aria-hidden="true" /> Decisión del grupo
              </span>
              <strong>No permitir el pago e informar el motivo al cliente</strong>
            </div>
            <ArrowDown
              active={isEdgeActive(['r3-no-permitir', 'r3-fin-no-iniciado'], activeNodes)}
            />
            <div
              className={`flow-node node-terminator node-end-muted ${nodeStatusClass(
                'r3-fin-no-iniciado',
                activeNodes
              )}`}
            >
              <span className="node-kicker">
                <XCircle size={12} aria-hidden="true" /> Fin
              </span>
              <strong>Pago no iniciado</strong>
            </div>
          </div>
        </div>

        {/* Rama SÍ de Decisión 1 */}
        <div className="flow-trunk-cell">
          <ArrowDown
            label="SÍ"
            active={isEdgeActive(['r3-dec1', 'r3-dec1-si', 'r3-iniciar'], activeNodes)}
          />
          <div className={`flow-node node-action ${nodeStatusClass('r3-iniciar', activeNodes)}`}>
            <span className="node-kicker">Acción del agente</span>
            <strong>Permitir iniciar el pago</strong>
          </div>
          <ArrowDown active={isEdgeActive(['r3-iniciar', 'r3-esperar'], activeNodes)} />
          <div className={`flow-node node-action ${nodeStatusClass('r3-esperar', activeNodes)}`}>
            <span className="node-kicker">
              <Clock size={12} aria-hidden="true" /> Espera externa
            </span>
            <strong>Esperar la respuesta del proveedor de pagos</strong>
          </div>
          <ArrowDown active={isEdgeActive(['r3-esperar', 'r3-dec2'], activeNodes)} />
        </div>

        {/* Decisión 2 + Rama NO lateral */}
        <div className="flow-trunk-cell">
          <DecisionDiamond
            id="r3-dec2"
            title="4. Decisión 2 (tras esperar)"
            subtitle="¿La donación estaba incluida en ese total Y el proveedor confirmó el pago exitoso de esa misma operación?"
            activeNodes={activeNodes}
            height={224}
          />
        </div>

        <div className="flow-side-cell flow-side-r3-2">
          <ArrowRight
            label="NO"
            active={isEdgeActive(['r3-dec2', 'r3-dec2-no', 'r3-no-registrar'], activeNodes)}
          />
          <div className="flow-side-stack">
            <div
              className={`flow-node node-action node-action-warn ${nodeStatusClass(
                'r3-no-registrar',
                activeNodes
              )}`}
            >
              <span className="node-kicker">Acción del agente</span>
              <strong>No registrar la donación como pagada</strong>
            </div>
            <ArrowDown
              active={isEdgeActive(['r3-no-registrar', 'r3-fin-sin-registro'], activeNodes)}
            />
            <div
              className={`flow-node node-terminator node-end-muted ${nodeStatusClass(
                'r3-fin-sin-registro',
                activeNodes
              )}`}
            >
              <span className="node-kicker">
                <XCircle size={12} aria-hidden="true" /> Resultado
              </span>
              <strong>Donación sin registrar como pagada</strong>
            </div>
          </div>
        </div>

        {/* Rama SÍ de Decisión 2 */}
        <div className="flow-trunk-cell">
          <ArrowDown
            label="SÍ"
            active={isEdgeActive(['r3-dec2', 'r3-dec2-si', 'r3-registrar'], activeNodes)}
          />
          <div className={`flow-node node-action ${nodeStatusClass('r3-registrar', activeNodes)}`}>
            <span className="node-kicker">Acción del agente</span>
            <strong>Registrar la donación como pagada</strong>
          </div>
          <ArrowDown active={isEdgeActive(['r3-registrar', 'r3-fin-ok'], activeNodes)} />
          <div
            className={`flow-node node-terminator node-end-success ${nodeStatusClass(
              'r3-fin-ok',
              activeNodes
            )}`}
          >
            <span className="node-kicker">
              <CheckCircle2 size={12} aria-hidden="true" /> Resultado
            </span>
            <strong>Pago concretado y donación registrada</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
