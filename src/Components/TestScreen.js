import React from 'react';
import styles from "./testscreen.css";
import Timer from './timer';
import Highlight from './getHighlight';
import ButtonComponent from './button';
import ProgressBar from './progressbar';
import {Progress} from 'reactstrap';

export default class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "This passage is from James Joyce, The Dubliners originally published in 1914",
            isTestSubmitted: false,
            numberOfCorrectAnswers: 0,
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
            ],
        };
    }

    renderAllQuestions() {
        const {questions} = this.state; 
        return questions.map((question, index) => {
            return (
                <ButtonComponent
                        key={question.id}
                        onClick={(selectedId) => {
                            question.selectedChoice = question.selectedChoice != selectedId ? selectedId : ''; // update the selectedChoice of this question with the clicked choice
                            this.setState({
                                questions: [
                                    ...questions.slice(0, index), // questions array before updated question - stay exactly the same
                                    question, // updated question - it's updated with the selectedChoice
                                    ...questions.slice(index+1, questions.length), // questions array after updated question - stays exactly the same
                                ]
                            });
                        }}
                        selectedChoice={question.selectedChoice}
                        question={question.question}
                        choices={question.choices}
                    />
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

        alert("Number of Correct Answers: " + numberOfCorrectAnswers);

        this.setState({
            isTestSubmitted: true,
            numberOfCorrectAnswers: numberOfCorrectAnswers,
        });
    }

    calculatePercentageOfAnsweredQuestions() {
        const {questions} = this.state; 
        let numberOfAnsweredQuestions = 0;
        const answeredQuestions = questions.filter((question) => {
            return question.selectedChoice != '';
        });
        numberOfAnsweredQuestions = answeredQuestions.length;
        return (numberOfAnsweredQuestions * 100) / questions.length;
    }

    renderTestResult(percentageOfCorrectAnswers) {
        if(percentageOfCorrectAnswers > 50) {
            return <h3>PASSED</h3>
        } else {
            return <h3>FAILED</h3>
        }
    }
    checkNotAllSectionQuestionsAnswered() {
        /*
         * TODO VI
         * Check if one of the questions of the current section is not answered
         * hint: you can use the "some" or "every" function
         */ 

         /* return true if every choice is selected and return false if not */
        const {questions} = this.state; 
        let result = true;
        questions.map((question) => {
             result = question.choices.every((choice) => choice.selectedChoice != '') 
        })
        return result;
    }

    IsTheLastPage() {
        const {sections, currentSection} = this.state; 
    }    

    render() {
        const {
            isTestSubmitted,
            numberOfCorrectAnswers,
            questions,
        } = this.state;

        const percentageOfCorrectAnswers = (numberOfCorrectAnswers*100)/questions.length;

        if(isTestSubmitted) {
            return (
                <div className="appContainer">
                    <h1>Test Submitted!</h1>
                    <h2>Number of Question is: {questions.length}</h2>
                    <h2>Number of Correct Answers is: {numberOfCorrectAnswers}</h2>
                    <h2>Percentage of Correct Answers: {percentageOfCorrectAnswers} %</h2>
                    {this.renderTestResult(percentageOfCorrectAnswers)}
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
            <div className = "progressbar">
                <div>
                    <ProgressBar questions={questions}/>
                </div>
            </div>
            <div className = "">
                <div>
                    <Progress value={this.calculatePercentageOfAnsweredQuestions()} />
                </div>
            </div>
        </div>
    }
}