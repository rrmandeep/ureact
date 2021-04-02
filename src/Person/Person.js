import React from 'react';
import stlyed from 'styled-components'
// import Radium from 'radium';
// import './Person.css';
// const person = () => {
//     return <p>I am a person and I am {Math.floor(Math.random() * 30)} year old</p>
// };

const StyledDiv = stlyed.div`
  width: 60%;
  margin: 16px auto;
  text-align: center;
  padding: 16px;
  border: 1px solid red;
  box-shadow: 0 2px 3px;

  @media (max-width: 500px) {
    width: '450px'
  }
`;


const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>I am a {props.name} and I am {props.age} year old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </StyledDiv>
  );
};

// const man = () => {
//     return <p>I am a Mandeep</p>
// };

export default person
// export default Radium(person)


// export default man;