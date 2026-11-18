import React from 'react';
import { GitBranch } from 'lucide-react';

export function nodeStatusClass(nodeId, activeNodes) {
  if (!activeNodes) return '';
  return activeNodes.includes(nodeId) ? 'is-active' : 'is-dimmed';
}

export function isEdgeActive(ids, activeNodes) {
  return !activeNodes || ids.every((id) => activeNodes.includes(id));
}

export function ArrowDown({ label, active = true }) {
  return (
    <div className={`flow-arrow-v ${active ? '' : 'is-dimmed'}`} aria-hidden="true">
      {label && <span className="flow-branch-pill">{label}</span>}
      <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
        <line x1="12" y1="0" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
        <path
          d="M6 18L12 25L18 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ArrowRight({ label, active = true }) {
  return (
    <div className={`flow-arrow-h ${active ? '' : 'is-dimmed'}`} aria-hidden="true">
      {label && <span className="flow-branch-pill flow-branch-pill-no">{label}</span>}
      <svg width="46" height="24" viewBox="0 0 46 24" fill="none">
        <line x1="0" y1="12" x2="38" y2="12" stroke="currentColor" strokeWidth="2" />
        <path
          d="M33 6L40 12L33 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function DecisionDiamond({ id, title, subtitle, activeNodes, height = 220 }) {
  const midY = Math.round(height / 2);
  const maxY = height - 3;

  return (
    <div
      className={`flow-diamond-wrap ${nodeStatusClass(id, activeNodes)}`}
      style={{ height: `${height}px` }}
    >
      <svg
        className="flow-diamond-bg"
        viewBox={`0 0 440 ${height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon
          points={`220,3 437,${midY} 220,${maxY} 3,${midY}`}
          fill="var(--diamond-fill)"
          stroke="var(--diamond-stroke)"
          strokeWidth="2.2"
        />
      </svg>
      <div className="flow-diamond-content">
        <span className="node-kicker node-kicker-decision">
          <GitBranch size={13} aria-hidden="true" />
          {title}
        </span>
        <p className="node-text-decision">{subtitle}</p>
      </div>
    </div>
  );
}
