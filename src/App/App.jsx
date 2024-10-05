import React from 'react'
import Desc from '../Description/Description'
import Nav from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import TechStack from '../Techstack/TechStack'
import Projects from '../Projects/Projects'
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
