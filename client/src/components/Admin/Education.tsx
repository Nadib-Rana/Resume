import React, { useState } from 'react'

const Education = () => {
  const [education, setEducation] = useState({
    university: '',
    universityDegree: '',
    expectedGraduation: '',
    universityLocation: '',
    universityCgpa: '',

    school: '',
    schoolDegree: '',
    schoolGraduation: '',
    schoolLocation: '',
    schoolGpa: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEducation({
      ...education,
      [name]: value,
    })
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Education Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
          <input
            name="university"
            placeholder="Green University of Bangladesh"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
          <input
            name="universityDegree"
            placeholder="Bachelor of Science in Computer Science & Engineering"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected</label>
          <input
            name="expectedGraduation"
            placeholder="Expected 2025"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location:</label>
          <input
            name="universityLocation"
            placeholder="Dhaka, Bangladesh"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">University CGPA</label>
          <input
            name="universityCgpa"
            placeholder="3.85"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
          <input
            name="school"
            placeholder="Guzadia A.H. Secondary School"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
          <input
            name="schoolDegree"
            placeholder="Secondary School Certificate (Science)"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected</label>
          <input
            name="schoolGraduation"
            placeholder="Expected 2017"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            name="schoolLocation"
            placeholder="Kishoreganj, Bangladesh"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">School GPA</label>
          <input
            name="schoolGpa"
            placeholder="4.18"
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Display */}
      <h2 className="text-left text-xl font-semibold text-blue-900 mb-2 mt-8">EDUCATION</h2>
      <div className="border-t-2">
        <div className="flex justify-between">
          <div className="text-left font-semibold text-blue-900">
            <li>
              {education.university} <br />
              <span className="text-sm pl-6 text-gray-600">{education.universityDegree}</span>
              <span className="text-sm pl-6 text-gray-600">{education.expectedGraduation}</span>
            </li>
            <li>
              {education.school} <br />
              <span className="text-sm pl-6 text-gray-600">{education.schoolDegree}</span>
              <span className="text-sm pl-6 text-gray-600">{education.schoolGraduation}</span>
            </li>
          </div>
          <div className="text-right text-gray-600">
            <span className="text-sm">{education.universityLocation}</span> <br />
            <span>{education.universityCgpa}</span> <br />
            <span className="text-sm">{education.schoolLocation}</span> <br />
            <span>{education.schoolGpa}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education