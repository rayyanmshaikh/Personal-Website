import React from 'react'
import './TechStack.css'
import Python from './assets/Python.png'
import Java from './assets/Java.png'
import C from './assets/C.png'
import Cpp from './assets/Cpp.png'
import Reactjs from './assets/Reactjs.png'
import Nodejs from './assets/Nodejs.png'
import SQL from './assets/SQL.png'
import { Bounce } from "react-awesome-reveal"

const techImages = {
    'Python': Python,
    'Java': Java,
    'C': C,
    'C++': Cpp,
    'React.js': Reactjs,
    'Node.js': Nodejs,
    'SQL': SQL
  };

function TechStack() {
    const tech = ['Python', 'Java', 'C', 'C++', 'React.js', 'Node.js', 'SQL'];

    return (
        <div id='Tech_Stack'>
            <Bounce><h1>My <span className='text-green'>Stack</span></h1></Bounce>

            <div class="technology_list">
                {tech.map((tech_name) => (
                    <div class="technology">
                        <figure class="technology_img-wrapper"><img src={techImages[tech_name]} class="technology_img" /></figure>
                        <span class="technology_name">{tech_name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack