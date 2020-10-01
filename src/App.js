import React, { useState } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Herman', age: 27 },
      { name: 'Bruh', age: 1337 },
      { name: 'Bruh2', age: 123 }
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    setPersonsState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Bruh', age: 1337 },
        { name: 'Bruh2', age: 123123 }
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Herman', age: 27 },
        { name: event.target.value, age: 1337 },
        { name: 'Bruh2', age: 12372 }

      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1> Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button
        style={style}
        onClick={() => switchNameHandler('ASDF')}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        //click={switchNameHandler.bind(this, 'HELLO GUYS!')}
        changed={nameChangedHandler}
      > My hobbies: Racing</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?' ));
}

export default App;

