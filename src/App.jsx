import React from 'react'
import Desc from './Description'
import Nav from './Navbar'
import Sidebar from './Sidebar'
import TechStack from './TechStack'
import Projects from './Projects'
import './App.css'

function App() {
  return (
    <>
      <div id="section">
        <Nav />
        <Sidebar />
        <Desc />
      </div>
      
      <div id='section'>
        <TechStack />
      </div>

      <div id='section'>
        <Projects />
      </div>
    </>
  )
}

export default App
