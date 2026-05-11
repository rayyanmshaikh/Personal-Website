import { Zoom } from "react-awesome-reveal"
import './Navbar.css';
import { getProfileLinkById, navigationLinks } from '../data/links';

const Navbar = () => {
    const contactLink = getProfileLinkById('contact')

    return (
        <nav className="navbar">
            <ul className='nav-links'>
                {navigationLinks.map((link) => (
                    <li key={link.href} className='underline-hover'><a href={link.href}>{link.label}</a></li>
                ))}
            </ul>
            
            <Zoom>
                <ul className='nav-links'>
                    {contactLink && (
                        <li className='nav-contact'>
                            <a href={contactLink.href}>{contactLink.label}</a>
                        </li>
                    )}
                </ul>
            </Zoom>
        </nav>
    );
};

export default Navbar;