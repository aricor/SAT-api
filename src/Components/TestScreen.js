import React from 'react'
import styles from "./testscreen.css"
import Timer from './timer'
import Highlight from './getHighlight'
import ButtonComponent from './button'
import {Button } from "reactstrap"

export default class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "This passage is from James Joyce, The Dubliners originally published in 1914",
            isTestSubmitted: false,
            numberOfCorrectAnswers: 0,
            sections: [
                {
                    id:1, 
                    questions: [
                        {
                            id: 1,
                            question: 
                            "1. As presented in the passage, Mr. Kearney is best described as",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:"independent and strong willed.", 
                                    check: false, 
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"paternal and affectionate.",  
                                    check:false, 
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "serious and family oriented.",  
                                    check:true, 
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "boring and simple minded.",  
                                    check:false, 
                                } 
                            ],
                            selectedChoice: '',
                       
                        },
                        {
                            id: 2,
                            question: 
                            "2. As presented in the passage, Mr. Kearney is best described as",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:"2independent and strong willed.", 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"2paternal and affectionate.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "2serious and family oriented.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "2boring and simple minded.",  
                                    check: true, 
        
                                } 
                            ],
                            selectedChoice: '',
                       
                        },
                    ]
                },
                {
                    id:2, 
                    questions: [
                        {
                            id: 1,
                            question: 
                            "1. As presented in the passage, Mr. Kearney is best described as",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:"independent and strong willed.", 
                                    check: false, 
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"paternal and affectionate.",  
                                    check:false, 
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "serious and family oriented.",  
                                    check:true, 
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "boring and simple minded.",  
                                    check:false, 
                                } 
                            ],
                            selectedChoice: '',
                    
                        },
                        {
                            id: 2,
                            question: 
                            "2. As presented in the passage, Mr. Kearney is best described as",  
                            choices: [
                                {
                                    opt: 'A',
                                    id: 1, 
                                    text:"2independent and strong willed.", 
                                    check: false, 
        
                                },
                                {
                                    opt: 'B',
                                    id:2, 
                                    text:"2paternal and affectionate.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'C',
                                    id:3, 
                                    text: "2serious and family oriented.",  
                                    check: false, 
        
                                },
                                {
                                    opt: 'D',
                                    id:4, 
                                    text: "2boring and simple minded.",  
                                    check: true, 
        
                                } 
                            ],
                            selectedChoice: '',
                        }
                    ],
                },
            ], 
        };
    }

    renderAllQuestions() {
        const {sections} = this.state; 
        return sections.map((section, index1) => {
            return (
                <div>
                    <h4> SECTION {section.id}</h4>
                    {
                        section.questions.map((subquestion, index2) => {
                            return (
                                    <ButtonComponent
                                    key={subquestion.id}
                                    onClick={(selectedId) => {
                                        subquestion.selectedChoice = selectedId; // update the selectedChoice of this question with the clicked choice
                                        this.setState({
                                            questions: [
                                                ...section.questions.slice(0, index2), // questions array before updated question - stay exactly the same
                                                subquestion, // updated question - it's updated with the selectedChoice
                                                ...section.questions.slice(index2+1, section.questions.length), // questions array after updated question - stays exactly the same
                                            ]
                                        });
                                    }}
                                    selectedChoice={subquestion.selectedChoice}
                                    question={subquestion.question}
                                    choices={subquestion.choices}
                            />
                            )

                        })
                    }
                </div>
            )
        })

    }

    checkingAllQuestions() {
        const {questions} = this.state; 
        let numberOfCorrectAnswers = 0;
        questions.map((question) => {
            //find function
            const correctAnswer = question.choices.find((choice) => choice.check === true);
            if(correctAnswer.id === question.selectedChoice) {
                numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
            }
        });

        //alert("Number of Correct Answers: " + numberOfCorrectAnswers);

        this.setState({
            isTestSubmitted: true,
            numberOfCorrectAnswers: numberOfCorrectAnswers,
        });
    }

    renderTestResult(percentageOfCorrectAnswers) {
        if(percentageOfCorrectAnswers > 50) {
            return <h3>PASSED</h3>
        } else {
            return <h3>FAILED</h3>
        }
    }

    render() {
        const {
            isTestSubmitted,
            numberOfCorrectAnswers,
            questions,
        } = this.state;


        if(isTestSubmitted) {
            return (
                <div className="appContainer">
                    <h1>Test Submitted!</h1>
                    <h2>Number of Question is: {questions.length}</h2>
                </div>
            );
        }

        return <div className="appContainer">
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
                    {this.renderAllQuestions()}
                    <button class="btn btn-primary" onClick={() => this.checkingAllQuestions()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    }
}