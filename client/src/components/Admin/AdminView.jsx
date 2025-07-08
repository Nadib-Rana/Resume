import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Technical from './Technical';
import Project from './Project';
import Experience from './Experience';
import Interests from './Interests';
import ResumeView from '../ResumeView';
import HomePage from '../HomePage';

const AdminView = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 p-4 space-y-4">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Dashboard</h2>
        <nav className="space-y-2 text-blue-700">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/header" className="block hover:underline">Header</Link>
          <Link to="/summary" className="block hover:underline">Summary</Link>
          <Link to="/education" className="block hover:underline">Education</Link>
          <Link to="/technical" className="block hover:underline">Technical</Link>
          <Link to="/projects" className="block hover:underline">Projects</Link>
          <Link to="/experience" className="block hover:underline">Experience</Link>
          <Link to="/interests" className="block hover:underline">Interests</Link>
          <Link to="/resumeview" className="block hover:underline">Resume View</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Routes>
          <Route path="/" element={
            <div className="p-[-50px] m-[-50px]">
              <HomePage />
            </div>
          } />
          <Route path="/header" element={<Header />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/education" element={<Education />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/resumeview" element={<ResumeView />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminView;