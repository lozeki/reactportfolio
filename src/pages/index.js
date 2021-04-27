import React, {useState} from 'react'
import InfoSection from '../components/InfoSection';
import DisplaySection from '../components/DisplaySection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree
  } from '../components/InfoSection/Data';
import SkillSet from '../components/SkillSet';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle =() =>{
        setIsOpen(!isOpen)
    }

    return (
        <>        
            <Sidebar isOpen ={isOpen} toggle ={toggle}/>
            <Navbar toggle ={toggle}/>
            <DisplaySection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>            
            <SkillSet />
            <Footer/>
        </>
    )
}

export default Home
