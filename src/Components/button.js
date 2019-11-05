//https://magnusbenoni.com/radio-buttons-react/

import React from "react";
import {Button } from "reactstrap"; 


const ButtonComponent = props => {
  return (
    <div>
      <p><b> {props.question} </b></p>
      <div className="choice">
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
      </div>
    </div>

  );
}

export default ButtonComponent; 




