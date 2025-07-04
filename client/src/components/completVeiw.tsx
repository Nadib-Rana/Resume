import React from 'react';

const CompletVeiw: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800 bg-white shadow-lg rounded-lg my-8">
      {/* Header */}
      <div className="flex items-start mb-4">
        <div className="w-1/5">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            Image
          </div>
        </div>
        <div className="w-4/5">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold text-blue-900">Nadib Rana</h1>
              <p className="text-gray-600">B.Sc in Computer Science & Engineering</p>
              <p className="text-gray-600">Green University of Bangladesh</p>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p><i className="fas fa-phone mr-2"></i>+8801567823568</p>
              <p><i className="fas fa-envelope mr-2"></i>
                <a href="mailto:codecrafersnadib@gmail.com" className="hover:underline">codecrafersnadib@gmail.com</a>
              </p>
              <p><i className="fas fa-envelope mr-2"></i>
                <a href="mailto:213002247@student.green.edu.bd" className="hover:underline">213002247@student.green.edu.bd</a>
              </p>
              <p><i className="fab fa-github mr-2"></i>
                <a href="https://github.com/Nadib-Rana" className="hover:underline">GitHub</a>
              </p>
              <p><i className="fab fa-linkedin mr-2"></i>
                <a href="https://www.linkedin.com/in/nadib-rana-72923430a/" className="hover:underline">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-900 border-b-2 border-black pb-1 mb-2">Summary</h2>
        <p className="text-sm">
          A results-oriented and skilled <span className="font-semibold">Computer Science and Engineering</span> student with a strong command of modern web development technologies, including <span className="font-semibold">React.js, Node.js, and MongoDB</span>. Eager to apply practical project experience, robust problem-solving abilities, and a collaborative mindset to contribute to dynamic software development and quality assurance roles.
        </p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-900 border-b-2 border-black pb-1 mb-2">Education</h2>
        <div className="mb-2">
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold text-blue-900">Green University of Bangladesh</p>
              <p className="text-gray-600 italic">Bachelor of Science in Computer Science & Engineering (Expected 2025)</p>
            </div>
            <div className="text-gray-600 text-right">
              <p>Dhaka, Bangladesh</p>
              <p>CGPA: 3.10</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold text-blue-900">Guzadia A.H. Secondary School</p>
              <p className="text-gray-600 italic">Secondary School Certificate (Science)</p>
            </div>
            <div className="text-gray-600 text-right">
              <p>Kishoreganj, Bangladesh</p>
              <p>GPA: 4.18</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-900 border-b-2 border-black pb-1 mb-2">Technical Skills</h2>
        <ul className="text-sm list-disc pl-5">
          <li><span className="font-semibold">Programming Languages:</span> HTML, CSS, JavaScript, C++, Java, Python</li>
          <li><span className="font-semibold">Frameworks & Libraries:</span> Bootstrap, React.js, Node.js</li>
          <li><span className="font-semibold">Tools & Platforms:</span> VS Code, Git, Selenium, JUnit, Bugzilla</li>
          <li><span className="font-semibold">Databases:</span> MySQL, MongoDB</li>
          <li><span className="font-semibold">Design Tools:</span> Figma, Canva</li>
          <li><span className="font-semibold">Testing Methodologies:</span> Black Box, White Box, Gray Box Testing</li>
          <li><span className="font-semibold">Soft Skills:</span> Leadership, Problem-solving, Teamwork, Communication</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-900 border-b-2 border-black pb-1 mb-2">Projects</h2>
        <div className="mb-2">
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold text-blue-900">Green University StudentBridge</p>
              <p className="text-gray-600 italic">University community platform with multiple services</p>
            </div>
            <div className="text-gray-600 text-right">
              <p>Figma, React.js, Node.js, MongoDB</p>
              <p>Ongoing</p>
            </div>
          </div>
          <ul className="text-sm list-disc pl-5">
            <li>Developed key features including a <span className="font-semibold">food corner, housing listings, and a blood donation system</span>, enhancing campus life.</li>
            <li>Implemented <span className="font-semibold">real-time chatting and marketplace functionalities</span> to foster student interaction and resource sharing.</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold text-blue-900">A-Tech-iT-Solution Website</p>
              <p className="text-gray-600 italic">Designed and developed a professional website for a technology solutions company</p>
            </div>
            <div className="text-gray-600 text-right">
              <p>WordPress, Elementor</p>
              <p>2023</p>
            </div>
          </div>
          <ul className="text-sm list-disc pl-5">
            <li>Successfully developed and deployed a comprehensive business website, improving the company's online presence.</li>
            <li>Integrated essential features like <span className="font-semibold">contact forms and service showcase sections</span> to facilitate client engagement.</li>
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-900 border-b-2 border-black pb-1 mb-2">Experience</h2>
        <div className="mb-2">
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold text-blue-900">Freelance Web Developer</p>
              <p className="text-gray-600 italic">Self-employed</p>
            </div>
            <div className="text-gray-600 text-right">
              <p>Remote</p>
              <p>2020 - Present</p>
            </div>
          </div>
          <ul className="text-sm list-disc pl-5">
            <li>Developed and deployed <span className="font-semibold">over 10 websites</span> for various clients, leveraging modern web technologies to meet diverse business needs.</li>
            <li>Collaborated directly with clients to design and implement <span className="font-semibold">intuitive UI/UX solutions</span>, ensuring client satisfaction and project success.</li>
          </ul>
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold text-blue-900">Home Tutor</p>
              <p className="text-gray-600 italic">Private Tutor for School Students</p>
            </div>
            <div className="text-gray-600 text-right">
              <p>Mirpur, Dhaka</p>
              <p>2019 - 2024</p>
            </div>
          </div>
          <ul className="text-sm list-disc pl-5">
            <li>Taught science and mathematics to secondary school students, building foundational knowledge.</li>
            <li>Improved student academic performance through <span className="font-semibold">personalized learning plans</span> and targeted instruction.</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold text-blue-900">Class Representative</p>
              <p className="text-gray-600 italic">Student Leadership Position</p>
            </div>
            <div className="text-gray-600 text-right">
              <p>Green University of Bangladesh</p>
              <p>2021 - Present</p>
            </div>
          </div>
          <ul className="text-sm list-disc pl-5">
            <li>Served as the primary liaison between faculty members and a class of <span className="font-semibold">50+ students</span>, facilitating effective communication.</li>
            <li>Organized and led <span className="font-semibold">academic support sessions and various class events</span>, fostering a collaborative and supportive learning environment.</li>
          </ul>
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-xl font-semibold text-blue-900 border-b-2 border-black pb-1 mb-2">Interests</h2>
        <ul className="text-sm list-disc pl-5">
          <li>Web Application Development</li>
          <li>Software Quality Assurance & Testing</li>
          <li>UI/UX Design</li>
          <li>Open Source Contribution</li>
        </ul>
      </section>
    </div>
  );
};

export default CompletVeiw;
