import React, { useState } from 'react';
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

  return (
    <>
      {/* Input Form */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Enter Profile Information</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
      <input name="fullName" placeholder="Nadib Rana" onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
      <input name="degree" placeholder="B.Sc in CSE" onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
      <input name="university" placeholder="Green University" onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
      <input name="phone" placeholder="+880..." onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input name="email" placeholder="you@email.com" onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">GitHub URL</label>
      <input name="github" placeholder="https://github.com/username" onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
      <input name="linkedin" placeholder="https://linkedin.com/in/username" onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Upload Profile Image</label>
      <input type="file" name="img" accept="image/*" onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

  </div>
  <button className='bg-green-600 border border-2 border-gray-300 w-full mt-2' >Save</button>
</div>
      {/*  Displaynn in the header */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-white border rounded shadow mb-50">
        {/* Image Section */}
        <div className="mb-4 md:mb-0">
          <img
            src={formData.img}
            alt="Profile"
            className="h-24 w-24 rounded object-cover border"
          />
        </div>

        {/* Info Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-center text-gray-800">{formData.fullName || 'Your Name'}</h1>
          <p className="text-lg text-center text-gray-600">{formData.degree}</p>
          <p className="text-lg text-center text-gray-600">{formData.university}</p>
        </div>

        {/* Contact Section */}
        <div className="text-right text-sm space-y-1 text-gray-700 ">
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