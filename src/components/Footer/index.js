import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,    
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    FooterLink,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
  } from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        animateScroll.scrollToTop();
      };
    return (
        <FooterContainer>
      <FooterWrap>        
        <SocialMedia>
          <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome} >
              Tri Nguyen
            </SocialLogo>
            <WebsiteRights>
                <FooterLink href='mailto:nguyenmtri83@gmail.com.com' to=''>Nguyenmtri83@gmail.com.com</FooterLink> 
                   (603)264-3168 © Copyright 2020-2021. All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink to='' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink to='' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com/'
                to=''
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                to=''
                target='_blank'
                aria-label='Twitter'
                href='//www.twitter.com/'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/tri-minh-nguyen' target='_blank' to='' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    )
}

export default Footer;
