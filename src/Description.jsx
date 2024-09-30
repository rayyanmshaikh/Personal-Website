import React from 'react'
import './Description.css'
import headshot from './assets/headshot.jpg'

function Desc() {
    return (
        <div>
            <h1>Hey! I'm <span className='text-green'>Rayyan Shaikh</span><span className='wave'>👋</span></h1>

            <div className='flexbox'>
                <img className='headshot' src={headshot} />

                <p> This is temporary filler text. This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. Currently, two official plugins are available: @vitejs/plugin-react uses Babel for Fast Refresh @vitejs/plugin-react-swc uses SWC for Fast Refresh</p>
            </div>
        </div>
    )
}

export default Desc