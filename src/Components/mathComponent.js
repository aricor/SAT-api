import React, {Component} from "react";
import {Form, FormControl, FormGroup, FormLabel, Row, Col } from "reactstrap"; 
export default class ButtonComponent extends Component {
    constructor(props) {
        super(props); 
        
    }

    displayResult() {
        const correctAnswer = this.props.correctAnswer;
        const input = this.props.input; 
        if (input === '' || input === correctAnswer) {
            return (
                <Form>
                    <Form.Group as={Row} controlId="formPlainCorrectAnswer">
                    <Form.Label column sm="2">
                    Correct Answer 
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={correctAnswer} />
                    </Col>
                    </Form.Group>
                </Form>
            )
        } else {
            return (
                <Form>
                    <Form.Group as={Row} controlId="formPlainCorrectAnswer">
                    <Form.Label column sm="2">
                    Correct Answer 
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={correctAnswer} />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlainIncorrectAnswer">
                    <Form.Label column sm="2">
                    Your Incorrect Answer 
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={input} />
                    </Col>
                    </Form.Group>
                </Form>
            )
        }
    }
    render() {
        return (
            <div>
                <p><b> {this.props.question} </b></p>
                <div> 
                    {
                        !this.props.isTestSubmitted && 
                        <Form>
                        <Form.Group controlId="fillInAnswer">
                        <Form.Control onChange={(event) => this.props.onChange(event.target.value)} name="ans" type="text" />
                        <Form.Text className="text-muted">
                            Letters are not accepted as answer
                        </Form.Text>
                        </Form.Group>
                        </Form>
                    }

                    {
                        this.props.isTestSubmitted && this.displayResult()
                    }
                    
               </div>
            </div>
    
        );
    }
}

