import React from 'react';
import Oneko from 'oneko';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SentenceBreakdown from './components/SentenceBreakdown';
import ProposalSection from './components/ProposalSection';
import FlowDiagramR3 from './components/FlowDiagramR3';
import FlowDiagramR4 from './components/FlowDiagramR4';
import SummaryAndTeam from './components/SummaryAndTeam';
import { PROPOSALS } from './data/tp3Data';

export default function App() {
  const [propuestaR3, propuestaR4] = PROPOSALS;

  return (
    <div className="app-shell">
      <Oneko
        skin="honey"
        meow={false}
        freerunChance={0}
        bubbleEnabled={false}
        storageKey="redbarrioanimal:oneko"
      />
      <Navbar />
      <main>
        <Hero />
        <SentenceBreakdown />
        <ProposalSection
          proposal={propuestaR3}
          DiagramComponent={FlowDiagramR3}
          variant="tinted"
        />
        <ProposalSection
          proposal={propuestaR4}
          DiagramComponent={FlowDiagramR4}
          variant="light"
        />
        <SummaryAndTeam />
      </main>
    </div>
  );
}
