import React from 'react'
import { Bounce } from "react-awesome-reveal"
import './Projects.css'

import Treasure from '../assets/Project/TreasureHunter.png'
import Boggle from '../assets/Project/boggle.png'
import Huffman from '../assets/Project/huffman2.png'
import Farquad from '../assets/Project/Farquad.png'
import Github from '../assets/Links/github-logo.svg'

function Projects() {
    return (
        <div id='Projects'>
            <Bounce><h1>Here are some of my <span class='text-green'>projects</span></h1></Bounce>

            <ul class='project_list'>
                <li class='project'>
                    <div class='project_wrapper'>
                        <img src={Treasure} class='project_img' />

                        <div class='project_description'>
                            <h3 class='project_title'>Treasure Hunter</h3>

                            <h4 class='project_sub-title'>Java</h4>

                            <p class='project_para'>
                                Treasure Hunter is a 2D single-player arcade type game created using Java along with the
                                educational IDE Greenfoot. The objective is to gain as many points as possible whilst 
                                dodging a scaling difficulty of traps trying to stop you. Compete against friends and 
                                get yourself on the leaderboard!
                            </p>

                            <a href='https://github.com/rayyanmshaikh/Treasure-Hunter-Game' target='_blank'><img className='github' src={Github} /></a>
                        </div>
                    </div>
                </li>

                <li class='project'>
                    <div class='project_wrapper'>
                        <img src={Boggle} class='project_img' />

                        <div class='project_description'>
                            <h3 class='project_title'>Boggle</h3>

                            <h4 class='project_sub-title'>Java</h4>

                            <p class='project_para'>
                            A remake on the hit game Boggle, this was created using Java with various libraries and
                            modules in a group of 4. With various features to personalize the game to your preference, 
                            and able to continue from where you last left off this is a great way to waste some of
                                your boredom away.
                            </p>
                        </div>
                    </div>
                </li>

                <li class='project'>
                    <div class='project_wrapper'>
                        <img src={Huffman} class='project_img' />

                        <div class='project_description'>
                            <h3 class='project_title'>Huffman Compression</h3>

                            <h4 class='project_sub-title'>Python</h4>

                            <p class='project_para'>
                                A program that allows users to compress and decompress any file type from images to text
                                files using Huffman compression. On average, can reduce a file size to 25% of its original.
                            </p>
                        </div>
                    </div>
                </li>

                <li class='project'>
                    <div class='project_wrapper'>
                        <img src={Farquad} class='project_img' />

                        <div class='project_description'>
                            <h3 class='project_title'>Farquad - Discord Bot</h3>

                            <h4 class='project_sub-title'>Python</h4>

                            <p class='project_para'>
                                Farquad is a Discord bot created to assist users in administrating a server with helpful
                                features such as pinging,
                                banning, unbanning and more. This bot utilizes Python and the Discord API.
                            </p>

                            <a href='https://github.com/rayyanmshaikh/Discord-Farquad-Bot' target='_blank'><img className='github' src={Github} /></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Projects