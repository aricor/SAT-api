import React, {Component} from "react";

import { Form, FormGroup, Label, Input, FormText , Row, Col } from "reactstrap"; 
export default class MathComponent extends Component {
    constructor(props) {
        super(props); 
        
    }

    displayResult() {
        const correctAnswer = this.props.correctAnswer;
        const input = this.props.input; 
        console.log(correctAnswer)
        if (input === '' || input === correctAnswer) {
            return (
                <Form>
                    <FormGroup as={Row} controlId="formPlainCorrectAnswer">
                    <Label >Correct Answer</Label>
                    <Input plaintext value ={correctAnswer} />
                    </FormGroup>
                </Form>
            )
        } else {
            return (
                <Form>
                    <FormGroup as={Row} controlId="formPlainCorrectAnswer">
                    <Label >Correct Answer</Label>
                    <Input plaintext value ={correctAnswer} />
                    </FormGroup>

                    <FormGroup as={Row} controlId="formPlainCorrectAnswer">
                    <Label >Your Incorrect Answer</Label>
                    <Input plaintext value ={input} />
                    </FormGroup>
                </Form>
            )
        }
    }

    displayForm() {
        return (
            <Form>
                <FormGroup controlId="fillInAnswer">
                <Input type="text" onChange={(event) => this.props.onChange(event.target.value)} name="ans"  required  />
                    <FormText className="text-muted">
                        Letters are not accepted as answer
                    </FormText>
                </FormGroup>
            </Form>
        )
    }

    render() {
        return (
            <div>
                <p className="question"><b> {this.props.question} </b></p>
                <div> 
                    {
                        !this.props.isTestSubmitted && this.displayForm()
                    }

                    {
                        this.props.isTestSubmitted && this.displayResult()
                    }
                    
               </div>
            </div>
    
        );
    }
}

