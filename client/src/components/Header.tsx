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
    alert(" Profile info saved!");
  };

  return (
    <>
     
      {/* Display Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-white  shadow ">
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
          <h1 className="text-3xl text-center font-bold text-gray-800 ">{formData.fullName || 'Your Name'}</h1>
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