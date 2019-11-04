import React from 'react'
import styles from "./testscreen.css"
import Timer from './timer'
import Highlight from './getHighlight'
import ButtonComponent from './button'
export default class TestScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "This passage is from James Joyce, The Dubliners originally published in 1914",
            questions: [
                {
                    question: 
                    "1. As presented in the passage, Mr. Kearney is best described as",  
                    choice1: {
                        text:"independent and strong willed.",
                        selected: false 
                    },
                    choice2: {
                        text:"paternal and affectionate.",  
                        selected: false
                    },
                    choice3: {
                        text: "serious and family oriented.",  
                        selected: false
                    },
                    choice4: {
                        text: "boring and simple minded.",  
                        selected:false
                    } 
               
                }
            ]
        };
    }
    render() {
        const {testData, submitHandler} = this.props;
        const {questions} = this.state; 
        return (
        <div className="appContainer">
            <Timer/>            
            <div className="testContainer">
                <div className="passageSection">
                <div className="passagename">
                <b>{this.state.title}</b>
                </div>
                <Highlight/>
                </div>
                <div className="questionSection">
                    <div className="article2">
                    <ButtonComponent 
                    question={questions[0].question}
                    choice1={questions[0].choice1.text}
                    choice2={questions[0].choice2.text}
                    choice3={questions[0].choice3.text}
                    choice4={questions[0].choice4.text}
                    />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}