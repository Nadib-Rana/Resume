// src/components/Admin/Header.tsx

import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';


const Header = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    degree: '',
    university: '',
    phone: '',
    email: '',
    github: '',
    linkedin: '',
    img: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'img' && files && files[0]) {
      const imageURL = URL.createObjectURL(files[0]);
      setFormData(prev => ({ ...prev, img: imageURL }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem("userProfile");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("✅ Profile info saved!");
  };

  return (
    <>
      {/* Input Form */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-xl font-semibold text-blue-900 mb-4">Enter Profile Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Full Name", name: "fullName", placeholder: "Nadib Rana" },
            { label: "Degree", name: "degree", placeholder: "B.Sc in CSE" },
            { label: "University", name: "university", placeholder: "Green University" },
            { label: "Phone", name: "phone", placeholder: "+880..." },
            { label: "Email", name: "email", placeholder: "you@email.com" },
            { label: "GitHub URL", name: "github", placeholder: "https://github.com/username" },
            { label: "LinkedIn URL", name: "linkedin", placeholder: "https://linkedin.com/in/username" }
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Profile Image</label>
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition duration-200 mb-8"
          onClick={handleSave}
        >
          Save
        </button>
      </div>

      {/* Display Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-white border rounded shadow mt-8">
        {/* Image */}
        <div className="mb-4 md:mb-0">
          <img
            src={formData.img}
            alt="Profile"
            className="h-24 w-24 rounded object-cover border"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl text-center font-bold text-gray-800">{formData.fullName || 'Your Name'}</h1>
          <p className="text-lg text-center text-gray-600">{formData.degree}</p>
          <p className="text-lg text-center text-gray-600">{formData.university}</p>
        </div>

        {/* Contact */}
        <div className="text-right text-sm space-y-1 text-gray-700">
          <p className="flex items-center justify-end gap-2"><FaPhone /> {formData.phone}</p>
          <p className="flex items-center justify-end gap-2"><FaEnvelope /> {formData.email}</p>
          <p className="flex items-center justify-end gap-2">
            <FaGithub />
            <a href={formData.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </p>
          <p className="flex items-center justify-end gap-2">
            <FaLinkedin />
            <a href={formData.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;