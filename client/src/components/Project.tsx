import React from 'react';

const Project = () => {
  return (
    <div>
      <h2 className="text-left text-xl font-semibold text-blue-900 mb-2">PROJECT</h2>
      <div className="border-t-2 pt-4 space-y-6">
        {/* Project 1 */}
        <div className="flex justify-between">
          <div className="text-left">
            <p className="font-semibold text-blue-900">• Green University StudentBridge</p>
            <p className="text-sm text-gray-600 italic">University community platform with multiple services</p>
            <ul className="list-none pl-5 text-sm text-gray-700 mt-2 space-y-1">
              <li>- Developed key features including a <span className="font-semibold">food corner, housing listings, and a blood donation system</span>, enhancing campus life.</li>
              <li>- Implemented <span className="font-semibold">real-time chatting and marketplace functionalities</span> to foster student interaction and resource sharing.</li>
            </ul>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>Ongoing</p>
            <p>Tech: Figma, React.js, Node.js, MongoDB</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex justify-between">
          <div className="text-left">
            <p className="font-semibold text-blue-900">• A-Tech-iT-Solution Website</p>
            <p className="text-sm text-gray-600 italic">Professional website for a technology solutions company</p>
            <ul className="list-none pl-5 text-sm text-gray-700 mt-2 space-y-1">
              <li>- Successfully developed and deployed a comprehensive business website, improving the company’s online presence.</li>
              <li>- Integrated essential features like <span className="font-semibold">contact forms and service showcase sections</span> to facilitate client engagement.</li>
            </ul>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>2023</p>
            <p>Tech: WordPress, Elementor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;