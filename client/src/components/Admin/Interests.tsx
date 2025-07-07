import React, { useState , useEffect } from 'react';

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

     useEffect(() => {
        const savedData = localStorage.getItem("interests");
        if (savedData) {
          setInterests(JSON.parse(savedData));
        }
      }, []);
    
      const handleSave = () => {
        localStorage.setItem("interests", JSON.stringify(interests));
        alert(" Interests  saved!");
      };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-center text-xl font-semibold text-blue-900 mb-4">Fill Up Your Intersts</h2>
      {/* Add New Interest */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder="Add a new interest"
          className="border border-gray-300 px-3 py-2 rounded-lg w-full"
        />
      </div>
       <div className="flex justify-between">
        <button
          onClick={handleAddInterest}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition duration-200 mb-8"
        >
          + Add
        </button>

        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition duration-200 mb-8"
        >
          save
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