import React, { useState } from 'react';

const Interests = () => {
  const [interests, setInterests] = useState([
    { text: 'Web Application Development' },
    
  ]);

  const [newInterest, setNewInterest] = useState('');

  const handleAddInterest = () => {
    if (newInterest.trim()) {
      setInterests([...interests, { text: newInterest.trim() }]);
      setNewInterest('');
    }
  };

  const handleChange = (index, value) => {
    const updated = [...interests];
    updated[index].text = value;
    setInterests(updated);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
    
      {/* Add New Interest */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder="Add a new interest"
          className="border border-gray-300 px-3 py-2 rounded-lg w-full"
        />
        <button
          onClick={handleAddInterest}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          + Add
        </button>
      </div>

      {/* Display & Edit */}
        <h2 className="text-left text-xl font-semibold text-blue-900 mb-2">INTERESTS</h2>
      <div className="border-t-2 pt-4 space-y-3">
        {interests.map((interest, index) => (
          <div key={index}>
            <input
              type="text"
              value={interest.text}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-full bg-transparent  border-gray-300 text-sm text-gray-700 focus:outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;