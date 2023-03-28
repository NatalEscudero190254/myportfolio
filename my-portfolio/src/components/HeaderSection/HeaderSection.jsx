import React from 'react';
import Logo from "../../assets/logo.svg"
import ContactSection from '../ContactSection/ContactSection';
import "./HeaderSection.css"
import {AiOutlineArrowDown} from "react-icons/ai"


const HeaderSection = () => {
    return (
        <div id='home' className='headerInfo'>
            <h6>Hi, i'm</h6>
            <h1>Natal Escudero</h1>
            <h6>Full Stack Developer</h6>
            <ContactSection/>
            <ul>
                <li> <AiOutlineArrowDown size={30} className="Arrow"/></li>
            </ul>
        </div>
    );
}

export default HeaderSection;
