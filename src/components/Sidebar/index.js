import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper,
    SidebarMenu, 
    SidebarItem,
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarItem>
                        <SidebarLink to ='home' onClick={toggle}>Home</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to ='about' onClick={toggle}>About</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to ='skills' onClick={toggle}>Skills</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to ='portfolio' onClick={toggle}>Portfolio</SidebarLink>
                    </SidebarItem>                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to= 'contact'>Contact</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default Sidebar
