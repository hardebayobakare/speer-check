import React from 'react';

type Props = {
  candidate: string;
  time: string;
  engineer: string;
  onClose: () => void;
};

export default function ConfirmationModal({ candidate, time, engineer, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Interview Confirmed!</h2>
        <p><strong>Candidate:</strong> {candidate}</p>
        <p><strong>Engineer:</strong> {engineer}</p>
        <p><strong>Time:</strong> {time}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
