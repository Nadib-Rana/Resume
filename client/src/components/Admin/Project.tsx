import React, { useState } from 'react';

const Project = () => {
  const [projects, setProjects] = useState([
    {
      title: '',
      subtitle: '',
      points: ['', ''],
      timeline: '',
      technologies: '',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedProjects = [...projects];
    if (field === 'point1') updatedProjects[index].points[0] = value;
    else if (field === 'point2') updatedProjects[index].points[1] = value;
    else updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        title: '',
        subtitle: '',
        points: ['', ''],
        timeline: '',
        technologies: '',
      },
    ]);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-left text-xl font-semibold text-blue-900 mb-2">PROJECT</h2>

      {projects.map((project, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border-b pb-4">
          <input
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => handleChange(index, 'title', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Short Description"
            value={project.subtitle}
            onChange={(e) => handleChange(index, 'subtitle', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Highlight #1"
            value={project.points[0]}
            onChange={(e) => handleChange(index, 'point1', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Highlight #2"
            value={project.points[1]}
            onChange={(e) => handleChange(index, 'point2', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Timeline"
            value={project.timeline}
            onChange={(e) => handleChange(index, 'timeline', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
          <input
            placeholder="Technologies Used"
            value={project.technologies}
            onChange={(e) => handleChange(index, 'technologies', e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg"
          />
        </div>
      ))}

      <button
        onClick={handleAddProject}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition duration-200 mb-8"
      >
        + Add Project
      </button>

      {/* Display */}
      <div className="border-t-2 pt-6 space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-between">
            <div className="text-left">
              <p className="font-semibold text-blue-900">• {project.title}</p>
              <p className="text-sm text-gray-600 italic">{project.subtitle}</p>
              <ul className="list-none pl-5 text-sm text-gray-700 mt-2 space-y-1">
                <li>- {project.points[0]}</li>
                <li>- {project.points[1]}</li>
              </ul>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>{project.timeline}</p>
              <p>Tech: {project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;