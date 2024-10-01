import React from 'react'
import './TechStack.css'
import Python from './assets/Python.png'
import Java from './assets/Java.png'
import C from './assets/C.png'
import Cpp from './assets/Cpp.png'
import Reactjs from './assets/Reactjs.png'
import Nodejs from './assets/Nodejs.png'
import SQL from './assets/SQL.png'

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
        <div>
            <h1>Technology Stack</h1>

            <div class="technology__list" id='container'>

                    {tech.map((tech_name) => (
                        <div class="technology">
                            <figure class="technology__img--wrapper">
                                <img src={techImages[tech_name]} class="technology__img" />
                            </figure>

                            <span class="technology__name">{tech_name}</span>
                        </div>
                    ))}

            </div>
        </div>
    )
}

export default TechStack