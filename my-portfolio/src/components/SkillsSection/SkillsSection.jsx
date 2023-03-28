import React from 'react';
import "./SkillsSection.css"
import {IoLogoJavascript} from "react-icons/io"
import {AiOutlineHtml5} from "react-icons/ai"
import {TbBrandCss3} from "react-icons/tb"
import {DiReact} from "react-icons/di"
import {DiNodejsSmall} from "react-icons/di"
import {SiPostgresql} from "react-icons/si"


const SkillsSection = () => {
    const tecnologies = [
            {
                name:"JavaScript",
                logo: <IoLogoJavascript size={35} color={"#ffba08"}/>
            },
            {
                name:"HTML",
                logo: <AiOutlineHtml5 size={35} color={"#d62828"}/>
            },
            {
                name:"CSS",
                logo: <TbBrandCss3 size={35} color={"#0077b6"}/>
            },
            {
                name:"React",
                logo: <DiReact size={35} color={"#023e8a"}/>
            },
            {
                name:"Node",
                logo: <DiNodejsSmall size={35} color={"#588157"}/>
            },
            {
                name:"postgreSQL",
                logo: <SiPostgresql size={35} color={"#ade8f4"}/>
            }
    ]
    
    return (
        <div id='skills' className='skills-container'>
            <h2>My tech skills</h2>
            <div className='tecnologies-container'>

            {
                tecnologies?.map((e) => {
                    return (
                        
                        <div className='tecnologies'>
                            <h6>{e.name}</h6>
                        <ul>
                            <li>{e.logo}</li>
                        </ul>
                        </div>
                    )
                })
            }
           
            </div>
        </div>
    );
}

export default SkillsSection;
