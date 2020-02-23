import React, {Component} from "react";
import {Form, FormGroup, FormText, Row, Col } from "reactstrap"; 
export default class MathComponent extends Component {
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

    displayForm() {
        return (
            <Form>
                <FormGroup controlId="fillInAnswer">
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
                <p><b> {this.props.question} </b></p>
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

