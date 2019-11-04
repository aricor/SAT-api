import React from "react";
import { Button } from "reactstrap";
import "./button.css";

const ButtonComponent = props => {
  return (
    <div>
      <p><b> {props.question} </b></p>
      <div className="choice">
        <div className='mb-2' >
          <Button
            onClick={() => props.onClick(props.choice1.id)}  
            className="btn-circle" 
            outline={props.selectedChoice !== props.choice1.id} 
            color="primary">
              A
          </Button>{' '}
          {props.choice1.text}
        </div>
      </div>
      
      <div className="choice">
        <div className='mb-2' >
          <Button onClick={() => props.onClick(props.choice2.id)} className="btn-circle" outline={props.selectedChoice !== props.choice2.id} color="primary">B</Button>{' '}
          {props.choice2.text}
        </div>
      </div>

      <div className="choice">
        <div className='mb-2' >
          <Button onClick={() => props.onClick(props.choice3.id)} className="btn-circle" outline={props.selectedChoice !== props.choice3.id} color="primary">C</Button>{' '}
          {props.choice3.text}
        </div>
      </div>

      <div className="choice">
        <div className='mb-2' >
          <Button onClick={() => props.onClick(props.choice4.id)} className="btn-circle" outline={props.selectedChoice !== props.choice4.id} color="primary">D</Button>{' '}
          {props.choice4.text}
        </div>
      </div>
    </div>

  );
}

export default ButtonComponent;
