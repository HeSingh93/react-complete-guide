import React from 'react';

const userInput = (props) => {

    const style = {
        border: '10px solid blue'
    };

    return (
        <div>
            <h1> User Input</h1>
            <input type="text"
                style={style}
                onChange={props.change}
                value={props.currentName} />
        </div>
    );
};

export default userInput;