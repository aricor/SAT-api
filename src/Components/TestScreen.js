import React from 'react'
import styles from "./testscreen.css"
import Timer from './timer'
import Highlight from './getHighlight'
import ButtonComponent from './button'
const qa = ({
        
})
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
                        id: 1, 
                        text:"independent and strong willed.", 
                    },
                    choice2: {
                        id:2, 
                        text:"paternal and affectionate.",  
                    },
                    choice3: {
                        id:3, 
                        text: "serious and family oriented.",  
                    },
                    choice4: {
                        id:4, 
                        text: "boring and simple minded.",  
                    } 
               
                },
                {
                    question: 
                    "1. As presented in the passage, Mr. Kearney is best described as",  
                    choice1: {
                        id: 1, 
                        text:"independent and strong willed.", 
                    },
                    choice2: {
                        id:2, 
                        text:"paternal and affectionate.",  
                    },
                    choice3: {
                        id:3, 
                        text: "serious and family oriented.",  
                    },
                    choice4: {
                        id:4, 
                        text: "boring and simple minded.",  
                    },
                    choice5: {
                        id:5, 
                        text: "boring and simple minded.",  
                    } 
               
                }
            ],
            selectedChoice: '',
        };
    }

    renderAllQuestions() {
        const {questions, selectedChoice} = this.state; 
        return questions.map(question => {
            return (
                <ButtonComponent
                        onClick={(selectedId) => this.setState({
                            selectedChoice: selectedId
                        })}
                        selectedChoice={selectedChoice}
                        question={question.question}
                        choice1={question.choice1}
                        choice2={question.choice2}
                        choice3={question.choice3}
                        choice4={question.choice4}
                    />
            )
        })
    }

    render() {
        const {testData, submitHandler} = this.props;
        const {questions, selectedChoice} = this.state; 
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
                        onClick={(selectedId) => this.setState({
                            selectedChoice: selectedId
                        })}
                        selectedChoice={selectedChoice}
                        question={questions[0].question}
                        choice1={questions[0].choice1}
                        choice2={questions[0].choice2}
                        choice3={questions[0].choice3}
                        choice4={questions[0].choice4}
                    />

                    { this.renderAllQuestions() }
                    </div>
                </div>
            </div>
        </div>
        )
    }
}