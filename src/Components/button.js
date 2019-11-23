
import React from "react";
import {Button } from "reactstrap"; 
import './button.css';
import {Toggle} from "./togglestate";
// I want to select and unselect an answer so I created togglestate component and then put this inside the button component 
const ButtonComponent = props => {
  return (
    <div>
      <p><b> {props.question} </b></p>
      <div className="choice">
        <div className='mb-2' >
        {
          props.choices.map( choice => {
            const selected = props.selectedChoice === choice.id;
            return(
              <div className="mt-2">
                <Button>
                  <Toggle 
                  key={choice.id}
                  onClick={() => props.onClick(choice.id)}  
                  className="btn-circle" 
                  outline={!selected} 
                  color="primary">
                  </Toggle>

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




