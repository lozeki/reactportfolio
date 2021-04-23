import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {  
  return (
    <div className='cards'>
      <h1>Check out my skill set!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem   
              src='images/img-1.jpg'
              text='Advertise your Company through my designs!'
              label='Graphic Designer'
              path='/skills'
            />    
            <CardItem   
              src='images/img-2.jpg'
              text='In some ways, programming is like painting!'
              label='Programer'
              path='/skills'
            /> 
            <CardItem   
              src='images/img-3.jpg'
              text='In some ways, programming is like painting!'
              label='Programer'
              path='/skills'
            />           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;