import React from 'react'
import './Description.css'
import headshot from './assets/headshot.jpg'

function Desc() {
    return (
        <div id='desc'>
            <h1>Hey! I'm <span className='text-green'>Rayyan Shaikh</span><span className='wave'>👋</span></h1>

            <div className='flexbox'>
                <img className='headshot' src={headshot} />

                <p>I am an aspiring software engineer studying at the University of Toronto, with a strong passion for building responsive and performant applications that have a positive impact on the world.</p>            </div>
        </div>
    )
}

export default Desc