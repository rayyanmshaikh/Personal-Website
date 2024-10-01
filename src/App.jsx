import React from 'react'
import Desc from './Description'
import Nav from './Navbar'
import Sidebar from './Sidebar'
import TechStack from './TechStack'
import './App.css'

function App() {
  return (
    <>
      <div id="front">
        <Nav />
        <Sidebar />
        <Desc />
      </div>
      
      <TechStack />
    </>
  )
}

export default App
