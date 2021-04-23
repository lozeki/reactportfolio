import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <Link to='/'><h2>About</h2></Link>
            <p>Tri Nguyen is a freelancer who lives in New Hampshire. He does program and design. He has strong design and integration skills as well as knowledge of Java, Javascript Python, and SQL. He loves meeting new friends and is looking for new opportunities.
             </p>   
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <p>If you have any questions about my services, or just want to say hello, feel free to contact me. Below are my social pages and my email: <a href="mailto:nguyenmtri83@gmail.com">nguyenmtri83@gmail.com</a>
            </p>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.linkedin.com/in/tri-minh-nguyen'
              target='_blank'             
            >LinkedIn</a>
            <a href='https://www.linkedin.com/in/tri-minh-nguyen'
              target='_blank'             
            >Facebook</a>
            <p><a href="mailto:nguyenmtri83@gmail.com">Email</a></p>
          </div>
        </div>
      </div>
      <section class='social-media'>                
          <small class='website-rights'>Copyright © 2020 Tri Nguyen</small>
      </section>
    </div>
  );
}

export default Footer;