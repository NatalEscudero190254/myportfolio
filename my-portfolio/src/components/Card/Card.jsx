import React from 'react';
import "./Card.css"

const Card = ({img, name, text, sourceCode }) => {
    return (
        <div className='projects-card'>
            
            <div className='card-container'>
                <img src={img} alt="projectimg" loading='lazy' />
            </div>
            
           
                <h3>{name}</h3>
                <p>{text}</p>
                <a href={sourceCode} target="_blank">View source code</a>
            
        </div>
    );
}

export default Card;
