import React from 'react';

const Experience = () => {
  return (
    <div>
      <h2 className="text-left text-xl font-semibold text-blue-900 mb-2">EXPERIENCE</h2>
      <div className="border-t-2 pt-4 space-y-6">
        
        {/* Freelance Web Developer */}
        <div className="flex justify-between">
          <div className="text-left">
            <p className="font-semibold text-blue-900">• Freelance Web Developer</p>
            <p className="text-sm text-gray-600 italic">Self-employed</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-1">
              <li>Developed and deployed <span className="font-semibold">over 10 websites</span> using modern web technologies tailored to business needs.</li>
              <li>Collaborated closely with clients to deliver <span className="font-semibold">intuitive UI/UX solutions</span>, leading to high project satisfaction.</li>
            </ul>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>Remote</p>
            <p>2020 – Present</p>
          </div>
        </div>

        {/* Home Tutor */}
        <div className="flex justify-between">
          <div className="text-left">
            <p className="font-semibold text-blue-900">• Home Tutor</p>
            <p className="text-sm text-gray-600 italic">Private Tutor for School Students</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-1">
              <li>Taught <span className="font-semibold">science and mathematics</span> to secondary students, strengthening their academic foundations.</li>
              <li>Raised performance through <span className="font-semibold">personalized lesson plans</span> and targeted instruction strategies.</li>
            </ul>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>Mirpur, Dhaka</p>
            <p>2019 – 2024</p>
          </div>
        </div>

        {/* Class Representative */}
        <div className="flex justify-between">
          <div className="text-left">
            <p className="font-semibold text-blue-900">• Class Representative</p>
            <p className="text-sm text-gray-600 italic">Student Leadership Position</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-1 ">
              <li>Acted as liaison between faculty and <span className="font-semibold">50+ classmates</span> to facilitate smooth communication.</li>
              <li>Led <span className="font-semibold">study sessions and class events</span>, fostering collaboration and academic support.</li>
            </ul>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>Green University of Bangladesh</p>
            <p>2021 – Present</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;