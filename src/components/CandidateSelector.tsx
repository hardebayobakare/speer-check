import React from 'react';

type Props = {
  candidates: { id: string; name: string }[];
  selected: string | null;
  onSelect: (id: string) => void;
};

export default function CandidateSelector({ candidates, selected, onSelect }: Props) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold">Select Candidate:</label>
      <select
        className="border p-2 rounded"
        value={selected || ''}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Select --</option>
        {candidates.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
    </div>
  );
}
