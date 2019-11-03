//https://magnusbenoni.com/radio-buttons-react/

import React from "react";
import {Button } from "reactstrap"; 

import './button.css';


const ButtonComponent = props => {
  return (
    <div>
      <p><b> {props.question} </b></p>
      <div className="choice">
      <Button className="btn-circle" outline color="primary">A</Button>{' '} 
      {props.choice1}
      </div>
      <div className="choice mt-2">
      <Button className="btn-circle" outline color="primary">B</Button>{' '} 
      {props.choice2}
      </div>
      <div className="choice mt-2">
      <Button className="btn-circle" outline color="primary">C</Button>{' '} 
      {props.choice3}
      <div className="choice mt-2">
      <Button className="btn-circle" outline color="primary">D</Button>{' '} 
      {props.choice4}
      </div>
      </div>
    </div>

  );
}

export default ButtonComponent; 




