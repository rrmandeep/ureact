import React from 'react';
import './Person.css';
// const person = () => {
//     return <p>I am a person and I am {Math.floor(Math.random() * 30)} year old</p>
// };

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I am a {props.name} and I am {props.age} year old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

const man = () => {
    return <p>I am a Mandeep</p>
};
export default person
// export default man;