import React, { Component } from "react";
import {Button } from "reactstrap"; 
import './button.css';

export default class ButtonComponent extends Component {
    constructor(props) {
      super(props); 
    }
    
    render() {
      return (
        <div>
          <p><b>  {this.props.question} </b></p>
    
          <div className="choice">
            <div className='mb-2' >
            { 
                this.props.choices.map((choice) => {
                  const selected = this.props.selectedChoice === choice.id;
                  const correctAnswer = choice.check === true;
                  const selectedCorrectly =  selected === correctAnswer;
                  if (!this.props.isTestSubmitted) {
                    return(
                      <div key={choice.id} className="mt-2">
                        <Button
                          key={choice.id}
                          onClick={() => this.props.onClick(choice.id)}  
                          className="btn-circle" 
                          outline={!selected} 
                          color={ "warning"}>
                          {choice.opt}
                      </Button>
                      <span className="m-2">
                        {choice.text}
                      </span>
                    </div>
                    )
                  } else {
                    return(
                      <div key={choice.id} className="mt-2">
                        <Button
                          key={choice.id}
                          className="btn-circle" 
                          color={correctAnswer? 'success' : !selectedCorrectly? 'danger' : 'outline-warning'}>
                          {choice.opt}
                      </Button>
                      <span className="m-2">
                        {choice.text}
                      </span>
                    </div>
                    )
                  }

                })
            }
            </div>
          </div>
        </div>
    
      );
    }
}


