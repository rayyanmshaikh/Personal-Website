import './TechStack.css'
import { techStack } from '../data/tech'
import SectionTitle from '../components/SectionTitle'

function TechStack() {
    return (
        <div className='stack-section'>
            <SectionTitle start='My' highlight='Stack' />

            <div className="technology_list">
                {techStack.map((tech) => (
                    <div className="technology" key={tech.name}>
                        <figure className="technology_img-wrapper"><img src={tech.image} className="technology_img" alt={tech.name} /></figure>
                        <span className="technology_name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack