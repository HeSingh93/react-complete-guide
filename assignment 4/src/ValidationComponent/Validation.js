import React from 'react';

const validation = props => {
    let validationMsg = 'Text is is perfect my dude!';

    if(props.inputLength <= 5) {
        validationMsg = 'Text is too short fam!';
    }

    return (
        <div>
            <p>{validationMsg}</p>
        </div>
    )
}

export default validation;