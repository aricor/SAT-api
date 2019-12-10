import React from 'react'
import styles from "./testscreen.css"
import Timer from './timer'
import Highlight from './getHighlight'
import ButtonComponent from './button'
import {Button } from "reactstrap"
import ProgressNum from './progressNum';
import {Progress} from 'reactstrap'

export default class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "This passage is from James Joyce, The Dubliners originally published in 1914",
            isTestSubmitted: false,
            numberOfCorrectAnswers: 0,
            currentSection: 0,
            sections: [
                {
                    id:1, 
                    questions: [
                        {
                            id: 1,
                            question: 
                            "1.1 As presented in the passage, Mr. Kearney is best described as",  
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
                            "1.2 As presented in the passage, Mr. Kearney is best described as",  
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
                            "2.1 As presented in the passage, Mr. Kearney is best described as",  
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
                            "2.2 As presented in the passage, Mr. Kearney is best described as",  
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
        const {sections, currentSection} = this.state; 
        const section = sections[currentSection];
            return (
                <div>
                    <h4> SECTION {section.id}</h4>
                    {
                        section.questions.map((subquestion, index2) => {
                            return (
                                    <ButtonComponent
                                    key={subquestion.id}
                                    onClick={(selectedId) => {
                                        subquestion.selectedChoice = subquestion.selectedChoice != selectedId? selectedId : ''; // update the selectedChoice of this question with the clicked choice
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

    }

    checkingAllQuestions() {

        /*
         * 
         * if it's last page, do the navigation to finished page logic which needs to be fixed
         * if it's NOT last page, update the currentSection in state
         * 
         */
        const {sections, currentSection} = this.state; 

        if (this.IsTheLastPage()) {
            let numberOfCorrectAnswers = 0;
            sections.map((section) => {
                //find function
                return (
                    section.questions.map((question) => {
                        const correctAnswer = question.choices.find((choice) => {
                          if(choice.check === true) {
                            return choice.id;
                          }
                        });
                        
                        if(correctAnswer.id === question.selectedChoice) {
                            numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
                        }
                        this.setState({
                            isTestSubmitted: true,
                            numberOfCorrectAnswers: numberOfCorrectAnswers,
                        });
                    })
                )
            });
        }
        else {
            this.setState({currentSection: currentSection + 1});
        }

    }
    calculatePercentageOfAnsweredQuestions() {
        const {sections} = this.state; 
        let numberOfAnsweredQuestions = 0;
        
        sections.map((section) => {
            section.questions.map((question) => {
                if (question.selectedChoice != '') {
                  numberOfAnsweredQuestions = numberOfAnsweredQuestions + 1;
                };
            })
        });

        let allQuestions = [];
        sections.map((section) => {
          allQuestions = [...allQuestions, ...section.questions]; 
        });

        return (numberOfAnsweredQuestions * 100) / allQuestions.length;
    }

    NotAllQuestionsAnswered() {
        /*
         * Check if one of the questions of the current section is not answered
         */ 
        const {sections} = this.state;

        return sections.some((section) => section.questions.some((question) => question.selectedChoice === ''));
    }

    IsTheLastPage() {
        const {sections, currentSection} = this.state;
        /*  if id of the current section = the size of the sections then return true */
        return ((currentSection === sections.length-1))

    }    

 
    IsNotTheFirstPage() {
        const {sections, currentSection} = this.state;
        return ((currentSection !== 0))
    }
    render() {
        const {
            isTestSubmitted,
            numberOfCorrectAnswers,
            sections,
            currentSection,
        } = this.state;

        /*
         * 
         * check if the current section is the last one
         * 
         */

        let allQuestions = [];
        sections.map((section) => {
          allQuestions = [...allQuestions, ...section.questions]; 
        });

        //const percentageOfCorrectAnswers = (numberOfCorrectAnswers*100)/sections.questions.length;
        if(isTestSubmitted) {
            return (
                <div className="appContainer">
                    <h1>Test Submitted!</h1>
                    <h2>Number of Question is: {allQuestions.length}</h2>
                    <h2>Number of Correct Answers is: {numberOfCorrectAnswers}</h2>
                </div>
            );
        }

        console.log(this.state.sections);

        return <div className="appContainer">
            <div className= "header">
            <Timer/>            
            </div>
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
                    {this.NotAllQuestionsAnswered() && this.IsTheLastPage() && <h5>You did not answer all the questions of this section</h5>}
                    
                    {this.IsNotTheFirstPage() ?  <button className="btn btn-primary"  onClick={() => this.setState({ currentSection: currentSection - 1})}> Back</button> : '' }
                    <button className="btn btn-primary m-2" onClick={() => this.checkingAllQuestions()}>{this.IsTheLastPage() ? 'Submit' : 'Next'}</button>
                    </div>
                </div>
            </div>
            <div className = "progressNum">
                <div>
                    <ProgressNum currentSection={currentSection} sections={sections}/>
                </div>
            </div>
            <div className = "progressbar">
                <div> 
                    <Progress animated color="info" value={this.calculatePercentageOfAnsweredQuestions()} />
                </div>
            </div>
        </div>
        
    }
}