import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>WELCOME TO MY SITE!</h1>
          <p>Hello! My name is Tri Nguyen, I'm a freelance Illustrator who loves to draw and paint!</p>
          <p>I love to draw Manga, anime, chibi, cartoony and sketchy. I really really enjoy creating something from my mind. I'm terrible at writing, and I feel difficulty to talk with people about my feeling and issues, I can transfer those feelings into an image that reflects them. </p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>       
          </div>
        </div>
    </div>
    )
}

export default HeroSection
