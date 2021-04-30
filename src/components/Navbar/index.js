import {FaBars} from 'react-icons/fa';
import { animateScroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLinkr
} 
from './NavbarElements';

const Navbar = ({toggle}) => {    
    const toggleHome = () => { // Use react-scroll from npmjs
        animateScroll.scrollToTop();
    };
         
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome} >Tri Nguyen</NavLogo>
                    <MobileIcon onClick ={toggle}>                        
                        <FaBars />
                    </MobileIcon>                    
                    <NavMenu>
                        {/* <NavItem>
                            <NavLinks to='home' 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Home</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}
                            >Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='work'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}
                            >Work Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='portfolio'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}
                            >Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>                            
                            <NavLinkr  to='resume'
                            target='blank'
                            offset={0} >Resume</NavLinkr>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to ='contact'>Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}
export default Navbar;
