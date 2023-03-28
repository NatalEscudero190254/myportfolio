import React from 'react';
import "./Button.css"

const Button = ({href, content}) => {
    return (
        <div>
            <a href={href} className="btn" target={"_blank"}>{content}</a>
        </div>
    );
}

export default Button;
