import { Bounce } from "react-awesome-reveal"
import './TechStack.css'

import Python from '../assets/Tech/Python.png'
import Java from '../assets/Tech/Java.png'
import C from '../assets/Tech/C.png'
import Cpp from '../assets/Tech/Cpp.png'
import Reactjs from '../assets/Tech/Reactjs.png'
import Nodejs from '../assets/Tech/Nodejs.png'
import SQL from '../assets/Tech/SQL.png'

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
        <div className='stack-section'>
            <Bounce><h2 className='section-title'>My <span className='text-green'>Stack</span></h2></Bounce>

            <div className="technology_list">
                {tech.map((tech_name) => (
                    <div className="technology" key={tech_name}>
                        <figure className="technology_img-wrapper"><img src={techImages[tech_name]} className="technology_img" alt={tech_name} /></figure>
                        <span className="technology_name">{tech_name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack