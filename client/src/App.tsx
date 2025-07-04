import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Summary from './components/summary'
import Education from './components/Education'
import Technical from './components/Technical'
import Project from './components/Project'
import Experience from './components/Experience'
import Interests from './components/Interests'


function App() {

  return (
    <>
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

    </>
  )
}

export default App
