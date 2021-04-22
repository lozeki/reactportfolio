import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState (false); // Set up the hook
    const [button, setButton] =useState(true);

    const handleClick = () =>setClick(!click); // Function when uses click the menu icon
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{ // Disable or show the button depend on the width of the screen
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener('resize',showButton); // Listen to the window's size

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Tri Nguyen<i className='fas fa-feather-alt'/> 
                </Link> 
                <div className='menu-icon' onClick={handleClick}>
                    <i className ={click ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                            Skills
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>               
            </div>
        </nav>            
        </>
    );
}
export default Navbar;
