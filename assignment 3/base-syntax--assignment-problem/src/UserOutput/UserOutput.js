import React from 'react';

import './UserOutput.css';

const userOutput = props => {
    return (
        <div className="UserOutput">
            <h1>Username: {props.userName}</h1>
            <p>Random second paragraph</p>
        </div>
    );
};

export default userOutput;