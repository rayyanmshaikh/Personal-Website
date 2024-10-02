import React from 'react';
import './Navbar.css';
import { Zoom } from "react-awesome-reveal"

const Navbar = () => {
    const navigation = ['Tech Stack', 'Projects']

    return (
        <nav className="navbar">
            <ul className='nav-links'>
                {navigation.map((link, index) => (
                    <li key={index} className='underline-hover'><a href={link}>{link}</a></li>
                ))}
            </ul>
            
            <Zoom>
                <ul className='nav-links'>
                    <li className='nav-contact'>
                        <a href='mailto:rayyan.shaikh@mail.utoronto.ca'>Contact</a>
                    </li>
                </ul>
            </Zoom>
        </nav>
    );
};

export default Navbar;