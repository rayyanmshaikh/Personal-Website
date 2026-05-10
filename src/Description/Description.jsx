import './Description.css'
import headshot from '../assets/Frontpage/headshot.jpg'

function Desc() {
    return (
        <div className='hero-layout'>
            <div className='hero-rail' aria-hidden='true'>
                <span className='hero-rail-label'>Backend / Infra</span>
                <span className='hero-rail-line'></span>
                <span className='hero-rail-meta'>Toronto</span>
            </div>

            <div className='hero-copy'>
                <p className='eyebrow'>Aspiring software engineer at the University of Toronto</p>
                <h1>
                    Hey! I&apos;m <span className='text-green'>Rayyan Shaikh</span><span className='wave'>👋</span>
                </h1>

                <p className='hero-text'>
                    I build responsive, performant systems with a focus on backend engineering,
                    infrastructure, clarity, and real-world usefulness. I care about software that is
                    reliable, direct, and easy to work with.
                </p>

                <div className='hero-signals' aria-label='Core focus areas'>
                    <span className='hero-signal'>APIs</span>
                    <span className='hero-signal'>Automation</span>
                    <span className='hero-signal'>Deployments</span>
                </div>

                <div className='hero-actions'>
                    <a href='#Projects' className='hero-button hero-button--primary'>See projects</a>
                    <a href='mailto:rayyanmshaikhh@gmail.com' className='hero-button hero-button--secondary'>Contact</a>
                </div>
            </div>

            <div className='hero-visual'>
                <div className='portrait-frame'>
                    <img className='headshot' src={headshot} alt='Rayyan Shaikh headshot' />
                </div>

                <div className='hero-note'>
                    Building dependable backend and infrastructure-driven systems.
                </div>
            </div>
        </div>
    )
}

export default Desc