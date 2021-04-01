import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Mandeep", age: "28"},
      {name: "Satwant", age: "32"},
      {name: "Kimmat", age: "33"},
    ],
    otherState: "Some other state",
    doseShow: true
  } 

  swichNameHandler = (newName) => {
    // console.log("Yooooooooo")
    // Don't use this.state.persons[0]['name'] = "Singh"
    this.setState({
      persons: [
        {name: newName, age: "28"},
        {name: "Satwant", age: "32"},
        {name: "Kimmat Singh", age: "33"},
      ]
    })
  }

  changeNameHandler = (e) => {
    this.setState({
      persons: [
        {name: "Amit", age: "28"},
        {name: e.target.value, age: "32"},
        {name: "Kimmat Singh", age: "33"},
      ]
    })
  } 

  toggleNames = () => {
    const doseShowold = this.state.doseShow
    this.setState({doseShow: !doseShowold});
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;
    if (this.state.doseShow) {
      persons = (
        <div>
          { this.state.persons.map(person => {
              return <Person name={person.name} 
              age={person.age} />
            })
          }
        </div>
      );
    }
    return (
      <div className="App">
        <h1>I am a react app</h1>
        {/* passing arrguments to function
        <button onClick={this.swichNameHandler.bind(this, "Ishmeet")}>Click me</button> */}
        <button style={style} onClick={ () => this.swichNameHandler("Ishmeet!!!")}>Click me</button>
        <button style={style} onClick={ this.toggleNames}>Toggle Name</button>
        { persons }      
      </div>
    );
   }
}

export default App;


