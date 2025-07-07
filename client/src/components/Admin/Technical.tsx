import React, { useEffect, useState } from 'react';

const Technical = () => {
  const [technicalSkills, setTechnicalSkills] = useState([
    { name: 'Programming Languages', value: 'C, C++, Java, Python, JavaScript' },
    { name: 'Frameworks & Libraries', value: 'React.js, Node.js, Express.js' },
    { name: 'Tools & Platforms', value: 'Git, GitHub, VS Code, Postman' },
    { name: 'Databases', value: 'MongoDB, MySQL' },
    { name: 'Testing Methodologies', value: 'Unit Testing, Integration Testing' },
    { name: 'Soft Skills', value: 'Problem Solving, Team Collaboration' },
  ]);

  const [newSkill, setNewSkill] = useState({ name: '', value: '' });

  const handleChange = (index, field, value) => {
    const updated = [...technicalSkills];
    updated[index][field] = value;
    setTechnicalSkills(updated);
  };

  const handleAddSkill = () => {
    if (newSkill.name.trim() && newSkill.value.trim()) {
      setTechnicalSkills([...technicalSkills, { ...newSkill }]);
      setNewSkill({ name: '', value: '' });
    }
  };

 useEffect(() => {
  const saveData = localStorage.getItem("technicalSkills");
  if (saveData) {
    setTechnicalSkills(JSON.parse(saveData)); // ✅ parse instead of stringify
  }
}, []);

const handleSave = () => {
  localStorage.setItem("technicalSkills", JSON.stringify(technicalSkills)); // ✅ store data correctly
  alert("Technical skills are added!");
};

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Fill Up Your Technical Skills</h1>

      {/* New Skill Input */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          placeholder="Skill Category (e.g. APIs, DevOps, etc.)"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          className="border border-gray-300 px-3 py-2 rounded-lg"
        />
        <input
          placeholder="Tools/Technologies"
          value={newSkill.value}
          onChange={(e) => setNewSkill({ ...newSkill, value: e.target.value })}
          className="border border-gray-300 px-3 py-2 rounded-lg"
        />
      </div>
      <div className="flex justify-between">
      <button
        onClick={handleAddSkill}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mb-4"
      >
        + Add Technical Skill
      </button>
       <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mb-4"
          onClick={handleSave}
        >
          Save
        </button>

        </div>

      {/* Editable List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 border-t pt-4">
        {technicalSkills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              className="w-full mb-1 border-b border-gray-300 px-2 py-1 font-semibold text-blue-900"
            />
            <input
              type="text"
              value={skill.value}
              onChange={(e) => handleChange(index, 'value', e.target.value)}
              className="w-full border-b border-gray-300 px-2 py-1 text-sm text-gray-700"
            />
          </div>
        ))}


      </div>

      {/* Display Section */}
      <h2 className="text-xl font-semibold text-blue-900 mb-2">TECHNICAL SKILLS</h2>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-800 border-t pt-4">
        {technicalSkills.map((skill, index) => (
          <li key={index}>
            <span className="font-semibold">{skill.name}:</span> {skill.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technical;