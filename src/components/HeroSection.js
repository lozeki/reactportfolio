import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>WELCOME TO MY SITE!</h1>
          <p>Hello! My name is Tri Nguyen, I am a freelance software engineer.</p>
          <p>I am interested in studying Computer Science because I find it fascinating. When I was a child, I was absolutely attracted to computer games and later it was programming. I also like studying math and drawing, but I chose IT as my career because of its opening, modernity and lots of challenges.</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              page ='About'
            >
              GET STARTED
            </Button>       
          </div>
        </div>
    </div>
    )
}

export default HeroSection
