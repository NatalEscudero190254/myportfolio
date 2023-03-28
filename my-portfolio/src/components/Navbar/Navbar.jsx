import React from 'react';
import Logo from "../../assets/logo2.svg"
import Button from '../Button/Button';
import "./Navbar.css"
import CV from "../../assets/CurriculumNatalPDF.pdf"

const Navbar = () => {
    return (
        <header className='header'>
            <div className='logo'>
                    <img src={Logo} alt="svg" href="#home"  className='nav-img'/>
            </div>
            <nav className='nav-links'>
                    <Button href={CV} content={"DOWNLOAD CV"}/>  
            </nav>
            
        </header>
    );
}

export default Navbar;
