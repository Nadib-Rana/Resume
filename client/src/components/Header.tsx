import React from 'react'
import { FaEnvelope } from 'react-icons/fa';


//import for phone
import { FaPhone } from 'react-icons/fa';
//import for github
import { FaGithub } from 'react-icons/fa';
//import for linkedin
import { FaLinkedin } from 'react-icons/fa';


const header = () => {
  return (
    <div className="flex justify-between items-center p-0 m-0 bg-white">
  <div>
    <img  src="https://showupmart.com/wp-content/uploads/2025/07/85154.jpg" 
    alt="Brand Logo" 
    className="
    h-30 
    w-30
    pb-1.5
    " 
    />
  </div>
  <div className="text-center">
    <h1 className='text-6xl'><b>Nadib Rana</b></h1>
    <p className='text-xl'>B.Sc in Computer Science & Engineering</p>
    <p className='text-xl'>Green University Of Bangladesh</p>
  </div>
  <div className="text-right text-xl">
  <p className="flex justify-end items-center gap-2 text-xl">
    <FaPhone className="text-xl " />
    <span>+8801567823568</span>
  </p>
  <p className="flex justify-end text-xl items-center gap-2">
    <FaEnvelope className="text-xl mr-1 mt-1" />
    <span className='text-xl'>nadibrana9@mainl.com</span>
  </p>
  <p className="flex justify-end text-xl">
    <FaGithub className="text-xl mr-2 mt-1" />
     <a href="https://github.com/Nadib-Rana">GitHub</a> 
    </p>
  <p className="flex justify-end text-xl">
    <FaLinkedin className="text-xl mr-2 mt-1" />
   <a href="https://www.linkedin.com/in/nadib-rana-72923430a/">LinkedIn</a> 
    </p>
</div>
</div>
  )
}

export default header