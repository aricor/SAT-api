//https://magnusbenoni.com/radio-buttons-react/

import React from "react";
import {Button } from "reactstrap"; 


const ButtonComponent = props => {
  return (
    <div>
      <p><b> {props.question} </b></p>
      <div className="choice">
<<<<<<< Updated upstream
      <Button outline color="primary">A</Button>{' '} 
      {props.choice1}
      </div>
      <div className="choice">
      <Button outline color="primary">B</Button>{' '} 
      {props.choice2}
      </div>
      <div className="choice">
      <Button outline color="primary">C</Button>{' '} 
      {props.choice3}
      <div className="choice">
      <Button outline color="primary">D</Button>{' '} 
      {props.choice4}
      </div>
=======
        <div className='mb-2' >
        {
          props.choices.map( choice => {
            return(
              <Button
              onClick={() => props.onClick(props.choices.id)}  
              className="btn-circle" 
              outline={props.selectedChoice !== props.choices.id} 
              color="primary">
                {props.choices.opt}
            </Button>
            )
          })
        }
          {props.choices.text}
        </div>
>>>>>>> Stashed changes
      </div>
    </div>

  );
}

export default ButtonComponent; 




