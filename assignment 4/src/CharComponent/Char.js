import React from 'react';
import "./CharComponent.css";

const Char = (props) => {
    return (
        <p className="CharComponent" onClick= {props.click} >
            {props.character}
        </p>
    );
}

export default Char;