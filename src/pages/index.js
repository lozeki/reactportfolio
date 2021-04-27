import React, {useState} from 'react'
import InfoSection from '../components/InfoSection';
import DisplaySection from '../components/DisplaySection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree
  } from '../components/InfoSection/Data';

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
            
        </>
    )
}

export default Home
