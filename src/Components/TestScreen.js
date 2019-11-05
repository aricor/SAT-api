import React from 'react'
import styles from "./testscreen.css"
import Timer from './timer'
import Highlight from './getHighlight'
import ButtonComponent from './button'
export default class TestScreen extends React.Component {
<<<<<<< Updated upstream
    
=======

    constructor(props) {
        super(props);
        this.state = {
            title: "This passage is from James Joyce, The Dubliners originally published in 1914",
            questions: [
                {
                    question: 
                    "1. As presented in the passage, Mr. Kearney is best described as",  
                    choices: [
                        {
                            opt: 'A',
                            id: 1, 
                            text:"independent and strong willed.", 
                        },
                        {
                            opt: 'B',
                            id:2, 
                            text:"paternal and affectionate.",  
                        },
                        {
                            opt: 'C',
                            id:3, 
                            text: "serious and family oriented.",  
                        },
                        {
                            opt: 'D',
                            id:4, 
                            text: "boring and simple minded.",  
                        } 
                    ],
                    selectedChoice: '',
               
                },
                {
                    question: 
                    "1. As presented in the passage, Mr. Kearney is best described as",  
                    choice: [
                        {
                            opt: 'A',
                            id: 1, 
                            text:"independent and strong willed.", 
                        },
                        {
                            opt: 'B',
                            id:2, 
                            text:"paternal and affectionate.",  
                        },
                        {
                            opt: 'C',
                            id:3, 
                            text: "serious and family oriented.",  
                        },
                        {
                            opt: 'D',
                            id:4, 
                            text: "boring and simple minded.",  
                        } 
                    ],
                    selectedChoice: '',
               
                },
            ],
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
                        selectedChoice={questions.selectedChoice}
                        question={questions.question}
                        choices={questions.choices}
                    />
            )
        })
    }

>>>>>>> Stashed changes
    render() {
        const {testData, submitHandler} = this.props
        return <div className="appContainer">
            <Timer/>            
            <div className="testContainer">
                <div className="passageSection">
                <div className="passagename">
                <b>
                This passage is from James Joyce, The Dubliners originally published in 1914                
                </b>
                </div>
                <Highlight/>
                </div>
                <div className="questionSection">
                    <div className="article2">
<<<<<<< Updated upstream
                    <ButtonComponent question="1. As presented in the passage, Mr. Kearney is best
described as" choice1="independent and strong willed." choice2="paternal and aectionate." choice3="serious and family oriented." choice4="boring and simple minded." />

                    <ButtonComponent question="1. As presented in the passage, Mr. Kearney is best
                        described as" choice1="independent and strong willed." choice2="paternal and aectionate." choice3="serious and family oriented." choice4="boring and simple minded." />

<ButtonComponent question="1. As presented in the passage, Mr. Kearney is best
                        described as" choice1="independent and strong willed." choice2="paternal and aectionate." choice3="serious and family oriented." choice4="boring and simple minded." />

<ButtonComponent question="1. As presented in the passage, Mr. Kearney is best
                        described as" choice1="independent and strong willed." choice2="paternal and aectionate." choice3="serious and family oriented." choice4="boring and simple minded." />

<ButtonComponent question="1. As presented in the passage, Mr. Kearney is best
                        described as" choice1="independent and strong willed." choice2="paternal and aectionate." choice3="serious and family oriented." choice4="boring and simple minded." />
=======
                    { this.renderAllQuestions() }
>>>>>>> Stashed changes
                    </div>
                </div>
            </div>
        </div>
    }
}