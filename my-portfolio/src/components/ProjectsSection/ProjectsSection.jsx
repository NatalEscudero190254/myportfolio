import React from 'react';
import Card from '../Card/Card';
import "./ProjectsSection.css"
import gamescript from './gamescriptimg.jpeg'
import aroundtheworld from "./aroundtheworld.jpeg"


console.log(gamescript)





const ProjectsSection = () => {
    const projects = [
        {
            image:{gamescript},
            name:"GameScript",
            text:"Videogames E-commerce, made with React, MUI, Node and postgreSQL",
            source:"https://github.com/NatalEscudero190254/proyecto-final-gameScript"
        },
        {
            image:{aroundtheworld},
            name:"Around the world",
            text:"SPA consuming data from a country API, made with React, Node and PostgreSQL",
            source:"https://github.com/NatalEscudero190254/pi-countries-main"
        },
       
    ]
    

    return (
        <div id='projects' className='projects-main' >
            <h2>My Projects</h2>
           <section className='projects'>
            <a href="https://game-script.netlify.app/" target={"_blank"}>
                <Card img={gamescript} name={projects[0].name} text={projects[0].text} sourceCode={projects[0].source}  ></Card>
            </a>
            <a href="">

                <Card img={aroundtheworld} name={projects[1].name} text={projects[1].text} sourceCode={projects[1].source} ></Card>
            </a>

           </section>

           
           
           
        </div>
    );
}

export default ProjectsSection;
