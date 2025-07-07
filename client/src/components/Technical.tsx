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
    <div>
      

      {/* Editable List */}
      

      {/* Display Section */}
      <h2 className="text-left text-xl font-semibold text-blue-900 mb-2 mt-8">TECHNICAL SKILLS</h2>
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