import React, { useState } from 'react';
import { engineers, candidates } from './data/mockData';
import { getOverlappingSlots } from './utils/availability';
import CandidateSelector from './components/CandidateSelector';
import Calendar from './components/Calendar';
import ConfirmationModal from './components/ConfirmationModal';

export default function App() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{ time: string; engineer: string } | null>(null);

  const candidate = candidates.find(c => c.id === selectedCandidate);

  const overlappingSlots = candidate
    ? getOverlappingSlots(candidate.availability, engineers)
    : [];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">SpeerCheck Interview Scheduler</h1>

      <CandidateSelector
        candidates={candidates}
        selected={selectedCandidate}
        onSelect={setSelectedCandidate}
      />

      {candidate && (
        <Calendar
          slots={overlappingSlots}
          onSelectSlot={setSelectedSlot}
        />
      )}

      {selectedSlot && candidate && (
        <ConfirmationModal
          candidate={candidate.name}
          time={selectedSlot.time}
          engineer={selectedSlot.engineer}
          onClose={() => setSelectedSlot(null)}
        />
      )}
    </div>
  );
}
