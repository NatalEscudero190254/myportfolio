import React from 'react';
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiFillMail} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import Button from '../Button/Button';
import "./ContactSection.css"




const ContactSection = () => {
    return (
        <div id='contact' className='socials'>
            <ul>
                <li><Button href={"https://github.com/NatalEscudero190254"} content={<AiOutlineGithub size={"25px"}/>}/></li>
                <li><Button href={"https://www.linkedin.com/in/natal-escudero-0a0020210/"} content={<AiOutlineLinkedin size={"25px"}/>}/></li>
                <li><Button href={"https://api.whatsapp.com/send?phone=1128706823"} content={<AiOutlineWhatsApp size={"25px"}/>}/></li>
            </ul>
        </div>
    );
}

export default ContactSection;
