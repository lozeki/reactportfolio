import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Display from '../Display';

function Home() {
  return (
    <>
      <HeroSection />  
      <Cards/>
      <Display />      
    </>
  );
}

export default Home;