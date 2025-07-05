import React from 'react'
import Header from './Header'
import Summary from './Summary'
import Education from './Education'
import Technical from './Technical'
import Project from './Project'
import Experience from './Experience'
import Interests from './Interests'
const AdminView = () => {
  return (
    <div>
        <div>
        <div className="pl-10 pr-10  ">
        <Header />
      </div>
      <div className="pl-10 pr-10 tex-justify">
        <Summary />
      </div>
      <div className='pl-10 pr-10'>
        <Education />
      </div>
      <div className='pl-10 pr-10'>
        <Technical />
      </div>
      <div className='pl-10 pr-10'>
        <Project />
      </div>
      <div className='pl-10 pr-10'>
        <Experience />
      </div>
      
      <div className='pl-10 pr-10'>
        <Interests />
      </div>
      </div>       
    </div>
  )
}

export default AdminView