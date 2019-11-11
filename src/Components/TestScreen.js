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
                    id: 1,
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
                    id: 2,
                    question: 
                    "2. As presented in the passage, Mr. Kearney is best described as",  
                    choices: [
                        {
                            opt: 'A',
                            id: 1, 
                            text:"2independent and strong willed.", 
                        },
                        {
                            opt: 'B',
                            id:2, 
                            text:"2paternal and affectionate.",  
                        },
                        {
                            opt: 'C',
                            id:3, 
                            text: "2serious and family oriented.",  
                        },
                        {
                            opt: 'D',
                            id:4, 
                            text: "2boring and simple minded.",  
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
                            question.selectedChoice = selectedId; // update the selectedChoice of this question with the clicked choice
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

    render() {
        const {testData, submitHandler} = this.props
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
                    </div>
                </div>
            </div>
        </div>
    }
}