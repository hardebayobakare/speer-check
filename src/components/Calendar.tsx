import React from 'react';

type Slot = {
  time: string;
  engineer: string;
};

type Props = {
  slots: Slot[];
  onSelectSlot: (slot: Slot) => void;
};

export default function Calendar({ slots, onSelectSlot }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {slots.map((slot, i) => (
        <button
          key={i}
          onClick={() => onSelectSlot(slot)}
          className="p-2 border rounded hover:bg-blue-100"
        >
          {slot.time} — {slot.engineer}
        </button>
      ))}
    </div>
  );
}
