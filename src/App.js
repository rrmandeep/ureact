import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: "Mandeep SIngh", age: "28"},
      {id: '2', name: "Satwant", age: "32"},
      {id: '3', name: "Kimmat", age: "33"},
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

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;
 
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  } 

  toggleNames = () => {
    const doseShowold = this.state.doseShow
    this.setState({doseShow: !doseShowold});
  }

  deletePerson = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;
    if (this.state.doseShow) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
              return <Person 
              change={ (event) => this.changeNameHandler(event, person.id)}
              click={ () => this.deletePerson(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              />
            })
          }
        </div>
      );
      style.backgroundColor = 'red'
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('redColor'); 
    }
    if (this.state.persons <= 1) {
      classes.push('boldFont');
    }
    return (
      <div className="App">
        <h1 className={classes.join(' ')}>I am a react app</h1>
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


