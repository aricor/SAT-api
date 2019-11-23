import React from "react";
import {Button} from "reactstrap"; 
//I create this to check if a question has answers selected or not 
const Toggle = props => {
    return (
        <div>
            {
                 props.choices.map( choice => {
                    const IsSelected = props.choice.active;
                    this.setState({
                        active: !IsSelected
                    });
                    return(
                        <div>
                      <Button
                         className="btn-circle" 
                          outline={!IsSelected} 
                          onClick={this.Toggle}  
                          color="primary"
                          >
                          {choice.opt}
                      </Button>
                    </div>
                    )
                  })
            }
        </div>
    ); 
}

export default Toggle; 
