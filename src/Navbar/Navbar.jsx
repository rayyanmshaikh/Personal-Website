import { Zoom } from "react-awesome-reveal"
import './Navbar.css';

const Navbar = () => {
    const navigation = [
        { href: '#home', label: 'Home' },
        { href: '#Tech_Stack', label: 'Stack' },
        { href: '#Projects', label: 'Projects' }
    ]

    return (
        <nav className="navbar">
            <ul className='nav-links'>
                {navigation.map((link) => (
                    <li key={link.href} className='underline-hover'><a href={link.href}>{link.label}</a></li>
                ))}
            </ul>
            
            <Zoom>
                <ul className='nav-links'>
                    <li className='nav-contact'>
                        <a href='mailto:rayyanmshaikhh@gmail.com'>Contact</a>
                    </li>
                </ul>
            </Zoom>
        </nav>
    );
};

export default Navbar;