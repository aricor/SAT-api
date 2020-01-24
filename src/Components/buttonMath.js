import React from "react";
import {Button } from "reactstrap"; 
import './button.css';

const MathButton = props => {
    return (
        <div>
            <p><b> {props.question} </b></p>
            <div>
            <form id="someForm" on>
            <input name="ans" type="text" required />
            </form>
           </div>
        </div>

    );
}
    


export default MathButton; 
