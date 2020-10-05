import React, { Component } from 'react';
import './App.css';
import Char from './CharComponent/Char';
import Validation from './ValidationComponent/Validation';

class App extends Component {

  state = {
    text: "Fill me up boi!"
  }

  inputTextHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  deleteTextHandler = (index) => {
    const text = this.state.text.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ text: updatedText });
  }

  render() {
    const charList = this.state.text.split("").map((char, index) => {
      return <Char
        character={char}
        key={index}
        click={this.deleteTextHandler(index)} />;
    });

    return (
      <div className="App">

        <hr />
        <input type="text"
          onChange={this.inputTextHandler}
          value={this.state.text} />
        <p>{this.state.text}</p>
        <Validation inputLength={this.state.text.length} />
        {charList}

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
