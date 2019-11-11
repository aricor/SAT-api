
import React from "react";
import {Button } from "reactstrap"; 
import './button.css';


const ButtonComponent = props => {
  return (
    <div>
      <p><b> {props.question} </b></p>
      <div className="choice">
        <div className='mb-2' >
        {
          props.choices.map( choice => {
            return(
              <div className="mt-2">
                <Button
                onClick={() => props.onClick(choice.id)}  
                className="btn-circle" 
                outline={choice.selectedChoice !== choice.id} 
                color="primary">
                  {choice.opt}
              </Button>
              <span className="m-2">
                {choice.text}
              </span>
            </div>
            )
          })
        }
        </div>
      </div>
    </div>

  );
}

export default ButtonComponent; 




