import React from 'react';
import { Zoom } from "react-awesome-reveal"
import './Navbar.css';

const Navbar = () => {
    const navigation = ['#Tech_Stack', '#Projects']

    return (
        <nav className="navbar">
            <ul className='nav-links'>
                {navigation.map((link, index) => (
                    <li key={index} className='underline-hover'><a href={link}>{link.replace('#', '').replace('_', ' ')}</a></li>
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