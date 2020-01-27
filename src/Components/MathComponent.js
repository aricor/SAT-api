import React from "react";
import './button.css';

const MathComponent = props => {
    return (
        <div>
            <p><b> {props.question} </b></p>
            <div>
            <form id="someForm" >
            <input name="ans" type="text" required />
            </form>
           </div>
        </div>

    );
}
    


export default MathComponent; 
