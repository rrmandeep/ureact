import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Mandeep", age: "28"},
      {name: "Satwant", age: "32"},
      {name: "Kimmat", age: "33"},
    ],
    otherState: "Some other state"
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
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>I am a react app</h1>
        {/* passing arrguments to function
        <button onClick={this.swichNameHandler.bind(this, "Ishmeet")}>Click me</button> */}
        <button style={style} onClick={ () => this.swichNameHandler("Ishmeet!!!")}>Click me</button>
        <Person 
          name={this.state.persons[0]['name']} 
          age={this.state.persons[0]['age']}/>
        <Person 
          name={this.state.persons[1]['name']} 
          age={this.state.persons[1]['age']}
          click={this.swichNameHandler.bind(this, "Ishmeet")}
          change={this.changeNameHandler}>I am from Ujjain
        </Person>
        <Person 
          name={this.state.persons[2]['name']} 
          age={this.state.persons[2]['age']}>I am from Ujjain
        </Person>
      </div>
    );
    //  return React.createElement('div', {className: "App"}, React.createElement('h1', null, "I am a react app"));
   }
  
}

// function App() {
//   return (
//     <div className="App">
//       <h1>I am a react app</h1>
//     </div>
//   );
// }

export default App;



//  Function based component with state managemnt

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = props => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       {name: "Amit", age: "28"},
//       {name: "Satwant", age: "32"},
//       {name: "Kimmat Singh", age: "33"},
//     ],
//     otherState: "Some other state" 
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         {name: "Mandeep", age: "28"},
//         {name: "Satwant", age: "32"},
//         {name: "Singh", age: "33"},
//       ] 
//     });
//   }
//   return (
//     <div className="App">
//       <h1>I am a react app</h1>
//       <button onClick={switchNameHandler}>Click me</button>
//       <Person name={personState.persons[0]['name']} age={personState.persons[0]['age']}/>
//       <Person name={personState.persons[1]['name']} age={personState.persons[1]['age']}>I am from Ujjain</Person>
//       <Person name={personState.persons[2]['name']} age={personState.persons[2]['age']}>I am from Ujjain</Person>
//     </div>
//   );
// }

// export default App;
