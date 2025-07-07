import React, { useState , useEffect} from 'react';

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
 useEffect(() => {
      const savedData = localStorage.getItem("projects");
      if (savedData) {
        setProjects(JSON.parse(savedData));
      }
    }, []);
  
    const handleSave = () => {
      localStorage.setItem("projects", JSON.stringify(projects));
      alert(" Profile info saved!");
    };
  return (
    <div className="">
      <h2 className="text-left text-xl font-semibold text-blue-900 mb-2">PROJECT</h2>

    

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