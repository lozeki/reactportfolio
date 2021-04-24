import React from 'react';
// import '../App.css';
import './Display.css';
import { Button } from './Button';

function Display() {  
    return (
      <div className='display-container'>
        <div className='display-text'>
          <h1>CODING PORTFOLIO</h1>
          <p>I have strong design and integration skills as well as knowledge of Java, Javascript, Python, and SQL. I love to collaborate in the development of high-impact, exciting technologies and learning along the way.</p>
          <div className='display-btns'>
          <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              page='Skills'
            >
              LAUNCH
            </Button>
          </div>           
        </div>
    </div>
    )
}
export default Display;