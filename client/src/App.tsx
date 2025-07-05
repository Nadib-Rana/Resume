import { useState } from 'react'
import './App.css'
import AdminView from './components/Admin/AdminView'

// import ResumeView from './components/ResumeView'


function App() {

  return (
    <>   
      <div className='pl-10 pr-10'>
        <AdminView /> 
        {/* <ResumeView /> */}
      </div>   
    </>
  )
}

export default App
