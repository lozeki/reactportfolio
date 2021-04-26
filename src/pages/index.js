import React, {useState} from 'react'
import DisplaySection from '../components/DisplaySection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle =() =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen ={isOpen} toggle ={toggle}/>
            <Navbar toggle ={toggle}/>
            {/* <DisplaySection/> */}
        </>
    )
}

export default Home
