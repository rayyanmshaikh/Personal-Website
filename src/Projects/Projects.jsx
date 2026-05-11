import './Projects.css'

import Github from '../assets/Links/github-logo.svg'
import { projects } from '../data/projects'
import SectionTitle from '../components/SectionTitle'
import useModalState from '../hooks/useModalState'

function Projects() {
    const { activeItem: activeProject, setActiveItem: setActiveProject, closeModal } = useModalState()

    return (
        <div className='projects-section'>
            <SectionTitle start='Here are some of my' highlight='projects' />

            <ul className='project_list'>
                {projects.map((project) => (
                    <li className='project' key={project.title}>
                        <button
                            type='button'
                            className='project_card'
                            onClick={() => setActiveProject(project)}
                            aria-label={`Open details for ${project.title}`}
                        >
                            <img src={project.image} className='project_img' alt={project.alt} />
                            <span className='project_card-title'>{project.title}</span>
                        </button>
                    </li>
                ))}
            </ul>

            {activeProject && (
                <div
                    className='project_overlay'
                    role='presentation'
                    onClick={closeModal}
                >
                    <div
                        className='project_modal'
                        role='dialog'
                        aria-modal='true'
                        aria-labelledby='project-modal-title'
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type='button'
                            className='project_modal-close'
                            onClick={closeModal}
                            aria-label='Close project details'
                        >
                            ×
                        </button>

                        <img
                            src={activeProject.image}
                            className='project_modal-image'
                            alt={activeProject.alt}
                        />

                        <div className='project_modal-content'>
                            <h3 className='project_title' id='project-modal-title'>{activeProject.title}</h3>
                            <h4 className='project_sub-title'>{activeProject.subtitle}</h4>

                            {activeProject.description.map((paragraph) => (
                                <p className='project_para' key={paragraph}>
                                    {paragraph}
                                </p>
                            ))}

                            {activeProject.links.length > 0 && (
                                <div className='github-links'>
                                    {activeProject.links.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='github-link'
                                        >
                                            <img className='github' src={Github} alt='' aria-hidden='true' />
                                            <span className='github-text'>{link.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects