import React from 'react';
import styled from 'styled-components';

const person = (props) => {
    const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eeee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

    return (

        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.onClick}> I'm
              {props.name} and I am
              {props.age} years old!
            </p>

            <p>{props.children}</p>

            <input type="text"
                onChange={props.changed}
                value={props.name}
            />
        </StyledDiv>
        //</div>
    )
};

export default person;