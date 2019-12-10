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
            currentSection: 0,
            currentSubject: 0, 
            NumeberOfCorrectAnswersOfEachSubject: [], 
            ReadingScore: 0, 
            WritingScore: 0, 
            MathScore: 0,
            subjects: [
                {
                    id: 1, 
                    score: 0, 
                    numberOfCorrectAnswers: 0, 
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
                                    id: 3,
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
                                    id: 4,
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
                    ]
                }, 
                {
                    id: 2, 
                    score: 0, 
                    numberOfCorrectAnswers: 0, 
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
                                    id: 3,
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
                                    id: 4,
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
                    ]
                }, 
                {
                    id: 3, 
                    score: 0, 
                    numberOfCorrectAnswers: 0, 
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
                                    id: 3,
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
                                    id: 4,
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
                    ]
                }, 
                {
                    id: 4, 
                    score: 0, 
                    numberOfCorrectAnswers: 0, 
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
                                    id: 3,
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
                                    id: 4,
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
                    ]
                }
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
    IsLastSubject() {
        const {subjects, currentSubject} = this.state;
        /*  if id of the current subject = the size of the subjects then return true */
        return (currentSubject === subjects.length-1);
    }

    IsLastSection() {
        const {subjects, currentSection} = this.state;
        subjects.map((subject) => {
            return (
                subject.sections.map((section) => {
                    currentSection === section.length-1; 
                })
            )
        })
    }
    checkAllQuestions() {
        const {subjects, currentSection, currentSubject, NumeberOfCorrectAnswersOfEachSubject} = this.state; 
        let numberOfCorrectAnswers = 0;
        if (this.IsLastSubject() && this.IsLastSection()) {
            subjects.map((subject) => {
                
                    subject.sections.map((section) => {
                        
                            section.questions.map((question) => {
                                const correctAnswer = question.choices.find((choice) => {
                                    if(choice.check === true) {
                                      return choice.id;
                                    }
                                  });
                                  
                                  if(correctAnswer.id === question.selectedChoice) {
                                      numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
                                  };
                            };
                        
                    };
                    NumeberOfCorrectAnswersOfEachSubject[currentSubject] = numberOfCorrectAnswers; 
                    return (NumeberOfCorrectAnswersOfEachSubject); 
            }
        }
        else if (!this.IsLastSubject() && this.IsLastSection()) {
            this.setState({
                currentSection: 0, 
                currentSubject: currentSubject + 1
            })
        }
        else {
            this.setState({
                currentSection: currentSection + 1 
            });
        }

    }
    ReadingScore() {
        const {ReadingScore,  NumeberOfCorrectAnswersOfEachSubject} = this.state; 
        if (0 <= NumeberOfCorrectAnswersOfEachSubject[1] <=3) {
            ReadingScore = 100; 
        } 
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 4 ) {
            ReadingScore = 110; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 5) {
            ReadingScore = 120; 
        }
        else if ( 6 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 7) {
            ReadingScore = 130; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[1] === 8) {
            ReadingScore = 140; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[1] === 9) {
            ReadingScore = 150; 
        }
        else if (10 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 11) {
            ReadingScore = 160; 
        }
        else if (12 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 13) {
            ReadingScore = 170; 
        }
        else if (14 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 15) {
            ReadingScore = 180; 
        }
        else if (16 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 17) {
            ReadingScore = 190; 
        }
        else if (18 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 19) {
            ReadingScore = 200; 
        }
        else if (20 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 21) {
            ReadingScore = 210; 
        }
        else if (22 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 23) {
            ReadingScore = 220; 
        }
        else if (24 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 25) {
            ReadingScore = 230; 
        }
        else if (26 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 27) {
            ReadingScore = 240; 
        }
        else if (28 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 29) {
            ReadingScore = 250; 
        }
        else if (30 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 31) {
            ReadingScore = 260; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[1] === 32) {
            ReadingScore = 270; 
        }
        else if (33 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 34) {
            ReadingScore = 280; 
        }
        else if (35 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 36) {
            ReadingScore = 290; 
        }
        else if (37 <=NumeberOfCorrectAnswersOfEachSubject[1] <= 38) {
            ReadingScore = 300; 
        }
        else if (39 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 41) {
            ReadingScore = 310; 
        }
        else if ( 42 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 43) {
            ReadingScore = 320; 
        }
        else if (44 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 45) {
            ReadingScore = 330; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 46) {
            ReadingScore = 340; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 47) {
            ReadingScore = 350; 
        }
        else if (48 <= NumeberOfCorrectAnswersOfEachSubject[1] <= 49) {
            ReadingScore = 360; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 50) {
            ReadingScore = 370; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 51) {
            ReadingScore = 380; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[1] === 52) {
            ReadingScore = 400; 
        }
        return (ReadingScore); 
    }
    WritingScore() {
        const {WritingScore,  NumeberOfCorrectAnswersOfEachSubject} = this.state; 
        if (0 <= NumeberOfCorrectAnswersOfEachSubject[2] <=3) {
            WritingScore = 100; 
        } 
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 4 ) {
            WritingScore = 110; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 5) {
            WritingScore = 120; 
        }
        else if ( 6 <= NumeberOfCorrectAnswersOfEachSubject[2] <= 7) {
            WritingScore = 130; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 8) {
            WritingScore = 140; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 9) {
            WritingScore = 150; 
        }
        else if (10 <= NumeberOfCorrectAnswersOfEachSubject[2] <= 11) {
            WritingScore = 160; 
        }
        else if (12 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 13) {
            WritingScore = 170; 
        }
        else if (14 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 16) {
            WritingScore = 180; 
        }
        else if (17 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 18) {
            WritingScore = 190; 
        }
        else if (19 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 20) {
            WritingScore = 200; 
        }
        else if (21 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 22) {
            WritingScore = 210; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 23) {
            WritingScore = 220; 
        }
        else if (24 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 25) {
            WritingScore = 230; 
        }
        else if (26 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 27) {
            WritingScore = 240; 
        }
        else if (28 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 29) {
            WritingScore = 250; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 30) {
            WritingScore = 260; 
        }
        else if (31 <=NumeberOfCorrectAnswersOfEachSubject[2] === 32) {
            WritingScore = 270; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] === 33) {
            WritingScore = 280; 
        }
        else if (34 <=NumeberOfCorrectAnswersOfEachSubject[2] <= 35) {
            WritingScore = 290; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] <= 36) {
            WritingScore = 300; 
        }
        else if (37 <= NumeberOfCorrectAnswersOfEachSubject[2] <= 38) {
            WritingScore = 310; 
        }
        else if (  NumeberOfCorrectAnswersOfEachSubject[2] === 39) {
            WritingScore = 320; 
        }
        else if (NumeberOfCorrectAnswersOfEachSubject[2] ===40) {
            WritingScore = 330; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 41) {
            ReadingScore = 340; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 42) {
            ReadingScore = 360; 
        }
        else if (48 <= NumeberOfCorrectAnswersOfEachSubject[2] <= 43) {
            ReadingScore = 380; 
        }
        else if ( NumeberOfCorrectAnswersOfEachSubject[2] === 44) {
            ReadingScore = 400; 
        }
      
        return (WritingScore); 
    }
    MathScore() {
        const {MathScore,  NumeberOfCorrectAnswersOfEachSubject} = this.state; 
        let ScoreOfTwoMathTests = NumeberOfCorrectAnswersOfEachSubject[3] +  NumeberOfCorrectAnswersOfEachSubject[4]; 
        if (0 <=ScoreOfTwoMathTests <=1) {
            MathScore = 200; 
        } 
        else if ( ScoreOfTwoMathTests === 2 ) {
            MathScore = 210; 
        }
        else if ( ScoreOfTwoMathTests === 3) {
            MathScore = 220; 
        }
        else if ( ScoreOfTwoMathTests === 4) {
            MathScore = 230; 
        }
        else if (ScoreOfTwoMathTests === 5) {
            MathScore = 250; 
        }
        else if (ScoreOfTwoMathTests === 6) {
            MathScore = 270; 
        }
        else if (ScoreOfTwoMathTests === 7) {
            MathScore = 280; 
        }
        else if (ScoreOfTwoMathTests === 8) {
            MathScore = 300; 
        }
        else if (ScoreOfTwoMathTests === 9) {
            MathScore = 310; 
        }
        else if (ScoreOfTwoMathTests === 10) {
            ReadingScore = 320; 
        }
        else if  (ScoreOfTwoMathTests === 11) {
            ReadingScore = 340; 
        }
        else if  (ScoreOfTwoMathTests === 12) {
            ReadingScore = 350; 
        }
        else if  (ScoreOfTwoMathTests === 13) {
            ReadingScore = 360; 
        }
        else if  (ScoreOfTwoMathTests === 14) {
            ReadingScore = 370; 
        }
        else if  (ScoreOfTwoMathTests === 15) {
            ReadingScore = 380; 
        }
        else if  (ScoreOfTwoMathTests === 16) {
            ReadingScore = 390; 
        }
        else if  (ScoreOfTwoMathTests === 17) {
            ReadingScore = 400; 
        }
        else if  (ScoreOfTwoMathTests === 18) {
            ReadingScore = 410; 
        }
        else if  (ScoreOfTwoMathTests === 19) {
            ReadingScore = 420; 
        }
        else if  (ScoreOfTwoMathTests === 20) {
            ReadingScore = 430; 
        }
        else if  (ScoreOfTwoMathTests === 21) {
            ReadingScore = 440; 
        }
        else if  (ScoreOfTwoMathTests === 22) {
            ReadingScore = 450; 
        }
        else if  (ScoreOfTwoMathTests === 23) {
            ReadingScore = 460; 
        }
        else if  (ScoreOfTwoMathTests === 24) {
            ReadingScore = 470; 
        }
        else if  (ScoreOfTwoMathTests === 25) {
            ReadingScore = 480; 
        }
        else if  (ScoreOfTwoMathTests === 26) {
            ReadingScore = 490; 
        }
        else if  (ScoreOfTwoMathTests === 27) {
            ReadingScore = 500; 
        }
        else if  (ScoreOfTwoMathTests === 28) {
            ReadingScore = 500; 
        }
        else if  (ScoreOfTwoMathTests === 29) {
            ReadingScore = 510; 
        }
        else if  (ScoreOfTwoMathTests === 30) {
            ReadingScore = 520; 
        }
        else if  (ScoreOfTwoMathTests === 31) {
            ReadingScore = 520; 
        }
        else if  (ScoreOfTwoMathTests === 32) {
            ReadingScore = 530; 
        }
        else if  (ScoreOfTwoMathTests === 33) {
            ReadingScore = 540; 
        }
        else if  (ScoreOfTwoMathTests === 34) {
            ReadingScore = 540; 
        }
        else if  (ScoreOfTwoMathTests === 35) {
            ReadingScore = 550; 
        }
        else if  (ScoreOfTwoMathTests === 36) {
            ReadingScore = 560; 
        }
        else if  (ScoreOfTwoMathTests === 37) {
            ReadingScore = 570; 
        }
        else if  (ScoreOfTwoMathTests === 38) {
            ReadingScore = 580; 
        }
        else if  (ScoreOfTwoMathTests === 39) {
            ReadingScore = 580; 
        }
        else if  (ScoreOfTwoMathTests === 40) {
            ReadingScore = 590; 
        }
        else if  (ScoreOfTwoMathTests === 41) {
            ReadingScore = 600; 
        }
        else if  (ScoreOfTwoMathTests === 42) {
            ReadingScore = 610; 
        }
        else if  (ScoreOfTwoMathTests === 43) {
            ReadingScore = 610; 
        }
        else if  (ScoreOfTwoMathTests === 44) {
            ReadingScore = 620; 
        }
        else if  (ScoreOfTwoMathTests === 45) {
            ReadingScore = 630; 
        }
        else if  (ScoreOfTwoMathTests === 46) {
            ReadingScore = 640; 
        }
        else if  (ScoreOfTwoMathTests === 47) {
            ReadingScore = 650; 
        }
        else if  (ScoreOfTwoMathTests === 48) {
            ReadingScore = 660; 
        }
        else if  (ScoreOfTwoMathTests === 49) {
            ReadingScore = 670; 
        }
        else if  (ScoreOfTwoMathTests === 50) {
            ReadingScore = 680; 
        }
        else if  (ScoreOfTwoMathTests === 51) {
            ReadingScore = 690; 
        }
        else if  (ScoreOfTwoMathTests === 52) {
            ReadingScore = 700; 
        }
        else if  (ScoreOfTwoMathTests === 53) {
            ReadingScore = 710; 
        }
        else if  (ScoreOfTwoMathTests === 54) {
            ReadingScore = 730; 
        }
        else if  (ScoreOfTwoMathTests === 55) {
            ReadingScore = 750; 
        }
        else if  (ScoreOfTwoMathTests === 56) {
            ReadingScore = 770; 
        }
        else if  (ScoreOfTwoMathTests === 57) {
            ReadingScore = 790; 
        }
        else if  (ScoreOfTwoMathTests === 58) {
            ReadingScore = 800; 
        }
        return (MathScore); 
    }

    calculatePercentageOfAnsweredQuestions() {
        const {subjects} = this.state; 
        let numberOfAnsweredQuestions = 0;
        subjects.map((subject) => {
            subject.sections.map((section) => {
                section.questions.map((question) => {
                    if (question.selectedChoice != '') {
                        numberOfAnsweredQuestions = numberOfAnsweredQuestions + 1;
                      };
                })
            })
        })
       // sections.map((section) => {
       //     section.questions.map((question) => {
       //         if (question.selectedChoice != '') {
       //           numberOfAnsweredQuestions = numberOfAnsweredQuestions + 1;
       //         };
       //     })
       // });

        let allQuestions = [];
        subjects.map((subject) => {
            subject.sections.map((section) => {
                allQuestions = [...allQuestions, ...section.questions]; 
            })
        })
      //  sections.map((section) => {
       //   allQuestions = [...allQuestions, ...section.questions]; 
       // });

        return (numberOfAnsweredQuestions * 100) / allQuestions.length;
    }

    NotAllQuestionsAnswered() {
        /*
         * Check if one of the questions of the current section is not answered
         */ 
        const {subjects} = this.state;
        return subjects.some((subject) => subject.sections.some((section) => section.questions.map((questions) => question.selectedChoice === '' ))); 
  //  return sections.some((section) => section.questions.some((question) => question.selectedChoice === ''));
    }

  //  IsTheLastPage() {
    //    const {sections, currentSection} = this.state;
        /*  if id of the current section = the size of the sections then return true */
   //     return ((currentSection === sections.length-1))

    //}    

    IsNotTheFirstPage() {
        const {currentSection} = this.state;
        return ((currentSection !== 0))
    }

    render() {
        const {
            isTestSubmitted,
            NumeberOfCorrectAnswersOfEachSubject , 
            ReadingScore,
            WritingScore,
            MathScore  
        } = this.state;

        /*
         * 
         * check if the current section is the last one
         * 
         */

    //    let allQuestions = [];
      //  sections.map((section) => {
      //    allQuestions = [...allQuestions, ...section.questions]; 
       // });
        let TotalScore = ReadingScore + WritingScore + MathScore; 
        //const percentageOfCorrectAnswers = (numberOfCorrectAnswers*100)/sections.questions.length;
        if(isTestSubmitted) {
            
            return (
                <div className="appContainer">
                    <h1>Result:!</h1>
                    <h2>Reading Score: {ReadingScore}</h2>
                    <h2>Writing and Language Score: {WritingScore}</h2>
                    <h2>Math Score: {MathScore}</h2>
                    <h2>Total Score: {TotalScore} </h2>

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
                    {this.IsNotTheFirstPage() ?  <button className="btn btn-primary"  onClick={() => this.setState({ currentSection: currentSection - 1})}> Back</button> : '' }
                    <button className="btn btn-primary m-2" onClick={() => this.checkingAllQuestions()}>{this.IsLastSection() ? 'Submit' : 'Next'}</button>
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

