import React from 'react';
import "./AboutSection.css"

const AboutSection = () => {
    return (
        <div id='about' className='container'>
            <h2>About me</h2>
            
            <div className='about-container'>
                    <div className='background-img'>
                         <img src="https://images.pexels.com/photos/15670518/pexels-photo-15670518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    </div>
               
                    <div className='text-about-container'>

                        <p>Bachelor degree student in systems and <b>web developer</b>, passionate about technology and soccer, I <b>love</b> to design custom websites helping and listening to people to give them the <b>best experience.</b></p>
                    </div>
            </div>

        </div>
    );
}

export default AboutSection;
