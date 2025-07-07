import React, { useEffect, useState } from 'react'

const Experience = () => {
  const [experienceList, setExperienceList] = useState([
    {
      role: '',
      organization: '',
      highlights: ['', ''],
      location: '',
      timeline: '',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...experienceList];
    if (field === 'highlight1') updated[index].highlights[0] = value;
    else if (field === 'highlight2') updated[index].highlights[1] = value;
    else updated[index][field] = value;
    setExperienceList(updated);
  };

  const handleAddExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        role: '',
        organization: '',
        highlights: ['', ''],
        location: '',
        timeline: '',
      },
    ]);
  };


    useEffect(() => {
      const savedData = localStorage.getItem("experienceList");
      if (savedData) {
        setExperienceList(JSON.parse(savedData));
      }
    }, []);
  
    const handleSave = () => {
      localStorage.setItem("experienceList", JSON.stringify(experienceList));
      alert(" Profile info saved!");
    };
  

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-semibold text-blue-900 mb-4">Fill Up Your Experience</h2>

      {/* Input Section */}
      {experienceList.map((exp, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border-b pb-4">
          <input
            placeholder="Role/Title"
            value={exp.role}
            onChange={(e) => handleChange(index, 'role', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Organization/Employer"
            value={exp.organization}
            onChange={(e) => handleChange(index, 'organization', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Highlight #1"
            value={exp.highlights[0]}
            onChange={(e) => handleChange(index, 'highlight1', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Highlight #2"
            value={exp.highlights[1]}
            onChange={(e) => handleChange(index, 'highlight2', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Location (e.g. Dhaka)"
            value={exp.location}
            onChange={(e) => handleChange(index, 'location', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Timeline (e.g. 2021 – Present)"
            value={exp.timeline}
            onChange={(e) => handleChange(index, 'timeline', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
        </div>
      ))}

    <div className="flex justify-between">

    
      <button
        onClick={handleAddExperience}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mb-8"
      >
        + Add Experience
      </button>

       <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mb-8"
          onClick={handleSave}
        >
          Save
        </button>

      </div>

      {/* Display Section */}

      <h2 className="text-left text-xl font-semibold text-blue-900 mb-4">EXPERIENCE</h2>
      <div className="border-t-2 pt-6 space-y-6">
        
        {experienceList.map((exp, index) => (
          <div key={index} className="flex justify-between">
            <div className="text-left">
              <p className="font-semibold text-blue-900">• {exp.role}</p>
              <p className="text-sm text-gray-600 italic">{exp.organization}</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-1">
                <li>{exp.highlights[0]}</li>
                <li>{exp.highlights[1]}</li>
              </ul>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>{exp.location}</p>
              <p>{exp.timeline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;