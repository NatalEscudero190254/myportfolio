import React from 'react';
import "./Footer.css"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"


const Footer = () => {
    return (
        <div className='footer-container'>
            
            <h6>Designed & Development by NatalEscudero</h6>
            <ul>
                <li><a href="https://www.instagram.com/natalescudero/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram size={25}></AiOutlineInstagram></a></li>
                <li><a href="mailto:natalescudero543@gmail.com" target="_blank" rel="noopener noreferrer"><AiOutlineMail size={25}></AiOutlineMail></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=1128706823" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp size={25}></AiOutlineWhatsApp></a></li>
            </ul>

        </div>
    );
}

export default Footer;
