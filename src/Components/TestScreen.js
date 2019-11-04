import React from 'react'
import ReactDom from 'react-dom'
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
                        text: "paternal and affectionate.",  
                        selected: false
                    },
                    choice3: {
                        text:  "serious and family oriented.",  
                        selected: false 
                    },
                    choice4: {
                        text:"boring and simple minded.",  
                        selected: false
                        }
                }, 
                {
                    question: 
                    "2. It can be inferred from the passage that Miss Devlin married Mr. Kearney because",  
                    choice1: "independent and strong willed.",  
                    choice2: "she had no other marriage offers.",  
                    choice3: "other men were too ordinary.",  
                    choice4: "her friends were irritating her.",
                },
                {
                    question: 
                    "3. Which choice provides the best evidence for the answer to the previous question?",  
                    choice1: "Lines 9-10 (“Miss...spite.”)",  
                    choice2: "Lines 22-26 (“But the...secret.”)",  
                    choice3: "Lines 26-30 (“However...Quay.”)",  
                    choice4: "Lines 33-37 (“After the...away.”)",
                },
                {
                    question: 
                    "4. In line 18, the word “ivory” most nearly means",  
                    choice1: "proper",  
                    choice2: "gentle",  
                    choice3: "sincere",  
                    choice4: "renowned",
                },
            ]
        };
    }
    onClick = () => {
        this.setState({
            questions: [
                {
                    question: 
                    "1. As presented in the passage, Mr. Kearney is best described as",  
                    choice1: {
                        text:"independent and strong willed.",
                        selected: true 
                    },
                    choice2: {
                        text: "paternal and affectionate.",  
                        selected: true
                    },
                    choice3: {
                        text:  "serious and family oriented.",  
                        selected: true 
                    },
                    choice4: {
                        text:"boring and simple minded.",  
                        selected: true
                        }
                }, 
            ]
        })
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
                                choice1={questions[0].choice1}
                                choice2={questions[0].choice2}
                                choice3={questions[0].choice3}
                                choice4={questions[0].choice4} 
                            />

                            <ButtonComponent 
                                question={questions[1].question}
                                choice1={questions[1].choice1}
                                choice2={questions[1].choice2}
                                choice3={questions[1].choice3}
                                choice4={questions[1].choice4} 
                            />

                            <ButtonComponent 
                                question={questions[2].question}
                                choice1={questions[2].choice1}
                                choice2={questions[2].choice2}
                                choice3={questions[2].choice3}
                                choice4={questions[2].choice4} 
                            />

                            <ButtonComponent 
                                question={questions[3].question}
                                choice1={questions[3].choice1}
                                choice2={questions[3].choice2}
                                choice3={questions[3].choice3}
                                choice4={questions[3].choice4} 
                            />

                        </div>
                    </div>
                </div>
            </div>
        ) 

    }
}