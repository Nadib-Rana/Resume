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
    <div>
      <h2 className="text-left text-xl font-semibold text-blue-900 mb-2 mt-8">EXPERIENCE</h2>
      {/* Display Section */}
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