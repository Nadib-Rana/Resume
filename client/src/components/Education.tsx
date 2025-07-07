import React, { useEffect, useState } from 'react'

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

   useEffect(() => {
      const savedData = localStorage.getItem("education");
      if (savedData) {
        setEducation(JSON.parse(savedData));
      }
    }, []);
  
    const handleSave = () => {
      localStorage.setItem("education", JSON.stringify(education));
      alert(" Education info saved!");
    };

  return (
    <div>
      {/* Display */}
      <h2 className="text-left text-xl font-semibold text-blue-900 mb-2 mt-8">EDUCATION</h2>
      <div className="border-t-2">
        <div className="flex justify-between">
          <div className="text-left ml-3 font-semibold text-blue-900">
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