import { useEffect, useState } from 'react'
import { Bounce } from "react-awesome-reveal"
import './Projects.css'

import Treasure from '../assets/Project/TreasureHunter.png'
import Boggle from '../assets/Project/boggle.png'
import Huffman from '../assets/Project/huffman2.png'
import BapcDealsBot from '../assets/Project/bapcbot.png'
import Farquad from '../assets/Project/Farquad.png'
import ML from '../assets/Project/ml.png'
import Github from '../assets/Links/github-logo.svg'
import Steg from '../assets/Project/steg.webp'

const projects = [
    {
        title: 'Sentiment ML Model',
        image: ML,
        alt: 'Sentiment ML model',
        subtitle: 'Python | scikit-learn | Model Validation',
        description: [
            'A Python sentiment analysis model trained on mixed numerical and free-text data, validated across multiple classifiers and reaching 90% test accuracy.',
            'KNN, Logistic Regression, Bernoulli Naive Bayes, and Random Forest were trained. Validation led to a stacked model that used Logistic Regression for numerical and continuous features and Bernoulli Naive Bayes for free-text features.',
            'The final implementation also includes manual versions of the models, with scikit-learn used only for training and extracting learned weights.'
        ],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/rayyanmshaikh/Sentiment-ML-Model'
            }
        ]
    },
    {
        title: 'Steganography Web App',
        image: Steg,
        alt: 'Steganography Web App',
        subtitle: 'Java | Spring-Boot | React | AWS',
        description: [
            'Created a full-stack web application that lets users upload an image and securely hide or extract secret text within it using steganography.',
            'The responsive frontend is deployed on AWS Amplify and connects to a Dockerized Spring Boot backend on EC2 through secure REST APIs, with CI/CD pipelines ensuring smooth and reliable updates.'
        ],
        links: [
            {
                label: 'Frontend',
                href: 'https://github.com/rayyanmshaikh/Steganography-Frontend'
            },
            {
                label: 'Backend',
                href: 'https://github.com/rayyanmshaikh/Steganography'
            }
        ]
    },
    {
        title: 'Treasure Hunter',
        image: Treasure,
        alt: 'Treasure Hunter game',
        subtitle: 'Java | JavaFX',
        description: [
            'Treasure Hunter is a 2D single-player arcade type game created using Java along with the educational IDE Greenfoot.',
            'The objective is to gain as many points as possible whilst dodging a scaling difficulty of traps trying to stop you. Compete against friends and get yourself on the leaderboard!'
        ],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/rayyanmshaikh/Treasure-Hunter-Game'
            }
        ]
    },
    {
        title: 'Boggle',
        image: Boggle,
        alt: 'Boggle game',
        subtitle: 'Java | JavaFX',
        description: [
            'A remake on the hit game Boggle, created using Java with various libraries and modules in a group of 4.',
            'With various features to personalize the game to your preference, and the ability to continue from where you last left off, this is a great way to waste some of your boredom away.'
        ],
        links: []
    },
    {
        title: 'Huffman Compression',
        image: Huffman,
        alt: 'Huffman compression visual',
        subtitle: 'Python',
        description: [
            'A program that allows users to compress and decompress any file type from images to text files using Huffman compression.',
            'Reduces file size to 25% of its original on average.'
        ],
        links: []
    },
    {
        title: 'PCDeals - Discord Bot',
        image: BapcDealsBot,
        alt: 'PCDealsBot Discord bot',
        subtitle: 'Python | Discord API',
        description: [
            'A Discord bot designed to monitor and share deals posted on r/bapcsalescanada.',
            'It uses filters based on the subreddit’s typical post structure to scrape relevant deals and notify the bot creator along with users following specific filters.',
            'Current filtering options include product type, price range, and optional keywords.'
        ],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/rayyanmshaikh/bapcDealsBot'
            }
        ]
    },
    {
        title: 'Farquad - Discord Bot',
        image: Farquad,
        alt: 'Farquad Discord bot',
        subtitle: 'Python',
        description: [
            'Farquad is a Discord bot created to assist users in administrating a server with helpful features such as pinging, banning, unbanning and more.',
            'This bot utilizes Python and the Discord API.'
        ],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/rayyanmshaikh/Discord-Farquad-Bot'
            }
        ]
    }
]

function Projects() {
    const [activeProject, setActiveProject] = useState(null)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setActiveProject(null)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        document.body.style.overflow = activeProject ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [activeProject])

    return (
        <div className='projects-section'>
            <Bounce><h2 className='section-title'>Here are some of my <span className='text-green'>projects</span></h2></Bounce>

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
                    onClick={() => setActiveProject(null)}
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
                            onClick={() => setActiveProject(null)}
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