import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const navigation = ['Languages', 'Projects']

    return (
        <nav className="navbar">
            <ul className='nav-links'>
                {navigation.map((link, index) => (
                    <li key={index} className='underline-hover'><a href={link}>{link}</a></li>
                ))}
            </ul>
        
            <ul className='nav-links'>
                <li className='nav-contact'>
                    <a href='mailto:rayyan.shaikh@mail.utoronto.ca'>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;