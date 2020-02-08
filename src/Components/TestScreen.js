import React from 'react'
import styles from "./testscreen.css"
import Timer from './timer'
import Highlight from './getHighlight'
import ButtonComponent from './button'
import ProgressNum from './progressNum'
import {Progress} from 'reactstrap'
import MathComponent from './MathComponent'
export default class TestScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTestSubmitted: false,
            currentSection: 0,
            currentSubject:0, 
            NumeberOfCorrectAnswersOfEachSubject: [], 
            ReadingScore: 0, 
            WritingScore: 0, 
            MathScore: 0,
            MathNoCal:0, 
            MathWithCal:0, 
            CorrectReading: 0, 
            CorrectWriting: 0,
            CorrectMathNoCal:0, 
            CorrectMathWithCal:0, 
            Verbal: 0, 
            Total:0, 
            sections: [
                {
                    id:1, 
                    defaultTimer: 65,
                    sectionType:  'reading', 
                    title: "This passage is from James Joyce, The Dubliners originally published in 1914",
                    passage: '1914 Mr Holohan, assistant secretary of the Eire Abu Society, had been walking up and down Dublin for nearly a month, with his hands and pockets full of dirty pieces of paper, arranging about the series of concerts. He had a game leg and for this his friends called him Hoppy Holohan. He walked up and down constantly, stood by the hour at street corners arguing the point and made notes; but in the end it was Mrs Kearney who arranged every Miss Devlin had become Mrs Kearney out of spite. She had been educated in a', 
                    IsLastSectionType: false, 
                    IsFirstSectionType: true, 

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
                    defaultTimer: 65,
                            sectionType: 'reading', 
                            IsLastSectionType: true, 
                            IsFirstSectionType: false, 
                            title: 'Questions 11-20 are based on the following passage and supplementary material.', 
                            passage: 'The central aim of the current study was to eschew the experimental context traditionally used to study over-imitation, in order to determine whether visibly causally irrelevant actions would be copied in a naturalistic context in which the participants were unaware that they were taking part in an experiment, and therefore free from any social pressures. In order to achieve such a real-world context our child and adult participants viewed an individual, whom they believed to be another zoo visitor, retrieve a reward from inside a transparent puzzle box, using an action sequence which contained elements that were readily discernible as causally irrelevant. The task demonstration involved the model performing a sequence of causally',
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
                {
                    id:3, 
                    defaultTimer: 1,
                            sectionType: 'break', 
                            IsLastSectionType: true, 
                            IsFirstSectionType: true, 
                            title:'', 
                            passage:'', 
                            questions:[], 
                            
                }, 

                {
                    id:4, 
                    defaultTimer: 35,
                            sectionType: 'writing', 
                            IsLastSectionType: false, 
                            IsFirstSectionType: true, 
                            title:' Violet Wood Sorrel Plant', 
                            passage: 'only attraction possessed by this charming little plant. As a family, the wood-sorrels have great interest for botanists since Darwin devoted such         1 long study to their power of movement. and many other scientists have described the several forms assumed by perfect flowers of the same',
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
                    id:5, 
                    defaultTimer: 35,
                            sectionType: 'writing', 
                            IsLastSectionType: true, 
                            IsFirstSectionType: false, 
                            title:' Violet Wood Sorrel Plant 2', 
                            passage: 'The first Ohio stories are part of the common story of the wonderful Ice Age, when a frozen deluge pushed down from the north and covered a vast part of the earth’s surface with slowly moving glaciers',
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
                            ]
                }, 
                
                {
                    id:6, 
                    defaultTimer: 20,
                            sectionType: 'mathNoCal', 
                            IsLastSectionType: true, 
                            IsFirstSectionType: true, 
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
                            ], 
                            fillInQuestions: [
                                {
                                    id:1, 
                                    question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                                    text: "1.21", 
                                    correctAnswer: 'answer 1', 
                                    input:'', 
                                }, 
                                {
                                    id:2, 
                                    question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                                    text: "1.21", 
                                    correctAnswer: 'answer 2',
                                    input:'', 
                                }
                            ]
                }, 
                {
                    id:7, 
                    defaultTimer: 5,
                    sectionType: 'break', 
                    IsLastSectionType: true, 
                    IsFirstSectionType: true, 
                    title:'', 
                    passage:'', 
                    questions:[], 
                }, 
                {
                    id:8,
                    defaultTimer: 20,
                    sectionType: 'mathWithCal', 
                    IsLastSectionType: true, 
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
                        }
                    ], 
                    fillInQuestions: [
                        {
                            id:1, 
                            question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                            text: "1.21", 
                            correctAnswer: 'answer 3',
                            input:'',

                        }, 
                        {
                            id:2, 
                            question: "Juan purchased an antique that had a value of $200 at the time of purchase. Each year, the value of the antique is estimated to increase 10% over its value the previous year. The estimated value of the antique, in dollars, 2 years after purchase can be represented by the expression 200a, where a is a constant. What is the value of a ?",
                            text: "1.21", 
                            correctAnswer: 'answer 4',
                            input:'',

                        }
                    ]

                }, 
                
            ],
           
        };
 }
    renderAllQuestions() {
        const {sections, currentSection} = this.state; 
        const section = sections[currentSection];

        if (section.sectionType === 'reading' || section.sectionType === 'writing' ) {
            return (
                <div>
                    
                    <h4> SECTION {section.sectionType}</h4>
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
        else if (section.sectionType === 'break' ) {
            return (
                <div>
                    
                    <h4> SECTION {section.sectionType}</h4>
                    <p>You can be back in {section.defaultTimer} minutes</p>
                </div>
            )  
        }
        else {
            return (
                <div>
                    
                    <h4> SECTION {section.sectionType}</h4>
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

                    {
                        section.fillInQuestions.map((subfillInQuestion, index)=> {
                        return (
                            <MathComponent
                                key = {subfillInQuestion.id}
                                question={subfillInQuestion.question}
                                onChange={(text) => {
                                    subfillInQuestion.input = text;
                                    this.setState({
                                        fillInQuestions: [
                                            ...section.questions.slice(0, index), // questions array before updated question - stay exactly the same
                                            subfillInQuestion, // updated question - it's updated with the selectedChoice
                                            ...section.questions.slice(index+1, section.questions.length), // questions array after updated question - stays exactly the same
                                        ]
                                    });
                                }}
                            />
                        )
                        })
                    }
                    
                </div>
            )  
        }

    }
    IsLastElementOfSectionsArray() {
        const {currentSection, sections} = this.state;
        /*  if id of the current subject = the size of the subjects then return true */
        return (currentSection === sections.length-1);
   }

    IsLastSection() {
        const {
            currentSection,
            sections,
        } = this.state;
        const section = sections[currentSection];
        if (section.IsLastSectionType === true) {
            return section.id; 
        }
    }
   // checkingFillInQuestions() {
//
  //  }
    addPassageOrNot() {
        const {
            currentSection,
            sections,
        } = this.state;
        const section = sections[currentSection];
        if (section.sectionType === 'reading' ||section.sectionType === 'writing' ) {
            return (

                <div className="passageSection">
                <div className="passagename">
                <b>{section.title}</b>
                </div>
                <Highlight passage = {section.passage}/>
                </div>
            ) 
        }        
    }

    renderRightButton() {
        const {
            currentSection,
            sections,
        } = this.state;
        const section = sections[currentSection];
        let buttonText = 'Next'; 
        if (this.IsLastSection() && section.sectionType === 'reading') {
            buttonText = 'Go to Writing and Language'; 
        }
        else if (this.IsLastSection() && section.sectionType === 'writing') {
            buttonText = 'Go to Math (No Calculators)'; 
        }
        else if (this.IsLastSection() && section.sectionType === 'mathNoCal') {
            buttonText = 'Go to Math (With Calculators)'; 
        }
        else if (this.IsLastSection() && section.sectionType === 'mathWithCal') {
            buttonText = 'Submit'; 
        }

        return (<button className="btn btn-primary m-2" onClick={() => this.checkingAllQuestions()}>{buttonText}</button>);

    }
    
    checkingAllQuestions() {
        const {currentSection, sections, CorrectWriting, CorrectMathNoCal, CorrectMathWithCal} = this.state; 

            if  (this.IsLastElementOfSectionsArray() && this.IsLastSection()) {
                sections.map(section => {
                    section.questions.map((question) => {
                        const correctAnswer = question.choices.find((choice) => choice.check === true);
                        if (section.sectionType === 'reading' ) {
                            if(correctAnswer.id === question.selectedChoice) { 
                                this.setState(currentState => {
                                    return {
                                        CorrectReading: currentState.CorrectReading + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        } //TODO: else  if(section.sectionType === 'writing' ) { Exactly the same logic as reading but for the others}
                    });
        
                    if(section.sectionType === 'writing' ) {
                        section.questions.map((question) => {
                            const correctAnswer = question.choices.find((choice) => choice.check === true);
                            if(correctAnswer.id === question.selectedChoice) { 
                                this.setState(currentState => {
                                    return {
                                        CorrectWriting: currentState.CorrectWriting + 1
                                    }
                                }, () => this.CalculateScores()); 
                            }
                        })
                    }
                    else if(section.sectionType === 'mathNoCal' ) {
                        section.questions.map((question) => {
                            const correctAnswer = question.choices.find((choice) => choice.check === true);
                            if(correctAnswer.id === question.selectedChoice) { 
                                this.setState(currentState => {
                                    return {
                                        CorrectMathNoCal: currentState.CorrectMathNoCal + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        })

                        section.fillInQuestions.map((fillInQuestion) => {
                            if (fillInQuestion.correctAnswer ===fillInQuestion.input ) {
                                this.setState(currentState => {
                                    return {
                                        CorrectMathNoCal: currentState.CorrectMathNoCal + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        })
                    }
                    else if(section.sectionType === 'mathWithCal' ) {
                        section.questions.map((question) => {
                            const correctAnswer = question.choices.find((choice) => choice.check === true);
                            if(correctAnswer.id === question.selectedChoice) { 
                                this.setState(currentState => {
                                    return {
                                        CorrectMathWithCal: currentState.CorrectMathWithCal + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        })

                        section.fillInQuestions.map((fillInQuestion) => {
                            if (fillInQuestion.correctAnswer ===fillInQuestion.input ) {
                                this.setState(currentState => {
                                    return {
                                        CorrectMathWithCal: currentState.CorrectMathWithCal + 1
                                    }
                                }, () => this.CalculateScores());
                            }
                        })
                    }
                });


            } else {
                const section = sections[currentSection];
                const nextSection = sections[currentSection + 1];
                if(section.sectionType !== nextSection.sectionType) {
                    if (window.confirm("Are you sure? By clicking OK, you'll be moving on to the next section and can't go back")) {
                        this.setState({
                            currentSection: currentSection + 1,
                        })
                    }
                    else {
                        this.setState({
                            currentSection: currentSection ,
                        });
                    }            
                }
                else {
                    this.setState({
                        currentSection: currentSection + 1,
                    });
                }

            }
    }

    CalculateScores() {

        const {isTestSubmitted, ReadingScore, WritingScore, currentSection, MathScore,MathNoCal,MathWithCal, sections, CorrectReading, CorrectWriting, CorrectMathNoCal, CorrectMathWithCal} = this.state; 

        //READING
        if (CorrectReading >= 0 && CorrectReading <= 3) {
            this.setState({
                ReadingScore: 100
            }) 
        } 
        else if ( CorrectReading === 4 ) {
            this.setState({
                ReadingScore: 110
            })         
        }
        else if ( CorrectReading === 5) {
            this.setState({
                ReadingScore: 120
            })        
        }
        else if ( CorrectReading >= 6 && CorrectReading <= 7) {
            this.setState({
                ReadingScore: 130
            })
        }
        else if (CorrectReading === 8) {
            this.setState({
                ReadingScore: 140
            })        
        }
        else if (CorrectReading === 9) {
            this.setState({
                ReadingScore: 150
            }) 
        }
        else if (CorrectReading >= 10 && CorrectReading <= 11) {
            this.setState({
                ReadingScore: 160
            }) 
        }
        else if (CorrectReading >= 12 && CorrectReading <= 13) {
            this.setState({
                ReadingScore: 170
            }) 
        }
        else if (CorrectReading >= 14 && CorrectReading <= 15) {
            this.setState({
                ReadingScore: 180
            }) 
        }
        else if (CorrectReading >= 16 && CorrectReading <= 17) {
            this.setState({
                ReadingScore: 190
            }) 
        }
        else if (CorrectReading >= 18 && CorrectReading <= 19) {
            this.setState({
                ReadingScore: 200
            }) 
        }
        else if (CorrectReading >= 20 && CorrectReading <= 21) {
            this.setState({
                ReadingScore: 210
            }) 
        }
        else if (CorrectReading >= 22 && CorrectReading <= 23) {
            this.setState({
                ReadingScore: 220
            }) 
        }
        else if (CorrectReading >= 24 && CorrectReading <= 25) {
            this.setState({
                ReadingScore: 230
            }) 
        }
        else if (CorrectReading >= 26 && CorrectReading <= 27) {
            this.setState({
                ReadingScore: 240
            }) 
        }
        else if (CorrectReading >= 28 && CorrectReading <= 29) {
            this.setState({
                ReadingScore: 250
            }) 
        }
        else if (CorrectReading >= 30 && CorrectReading <= 31) {
            this.setState({
                ReadingScore: 260
            })  
        }
        else if (CorrectReading === 32) {
            this.setState({
                ReadingScore: 270
            })  
        }
        else if (CorrectReading >= 33 && CorrectReading <= 34) {
            this.setState({
                ReadingScore: 280
            })  
        }
        else if (CorrectReading >= 35 && CorrectReading <= 36) {
            this.setState({
                ReadingScore: 290
            })  
        }
        else if (CorrectReading >= 37 && CorrectReading <= 38) {
            this.setState({
                ReadingScore: 300
            })  
        }
        else if (CorrectReading >= 39 && CorrectReading <= 41) {
            this.setState({
                ReadingScore: 310
            })  
        }
        else if (CorrectReading >= 42 && CorrectReading <= 43) {
            this.setState({
                ReadingScore: 320
            })  
        }
        else if (CorrectReading >= 44 && CorrectReading <= 45) {
            this.setState({
                ReadingScore: 330
            })  
        }
        else if ( CorrectReading === 46) {
            this.setState({
                ReadingScore: 340
            })  
        }
        else if ( CorrectReading === 47) {
            this.setState({
                ReadingScore: 350
            })  
        }
        else if (CorrectReading >= 48 && CorrectReading <= 49) {
            this.setState({
                ReadingScore: 360
            })  
        }
        else if ( CorrectReading === 50) {
            this.setState({
                ReadingScore: 370
            })  
        }
        else if ( CorrectReading === 51) {
            this.setState({
                ReadingScore: 380
            })  
        }
        else if ( CorrectReading === 52) {
            this.setState({
                ReadingScore: 400
            })  
        }
        //WRITING SCORE
        if (CorrectWriting >= 0 && CorrectWriting <= 3) {
            this.setState({
                WritingScore: 100
            })   
        } 
        else if ( CorrectWriting === 4 ) {
            this.setState({
                WritingScore: 110
            }) 
        }
        else if ( CorrectWriting === 5) {
            this.setState({
                WritingScore: 120
            }) 
        }
        else if ( CorrectWriting >= 6 && CorrectWriting <= 7) {
            this.setState({
                WritingScore: 130
            }) 
        }
        else if (CorrectWriting === 8) {
            this.setState({
                WritingScore: 140
            }) 
        }
        else if (CorrectWriting === 9) {
            this.setState({
                WritingScore: 150
            }) 
        }
        else if (CorrectWriting >= 10 && CorrectWriting <= 11) {
            this.setState({
                WritingScore: 160
            }) 
        }
        else if (CorrectWriting >= 12 && CorrectWriting <= 13) {
            this.setState({
                WritingScore: 170
            }) 
        }
        else if (CorrectWriting >= 14 && CorrectWriting <= 16) {
            this.setState({
                WritingScore: 180
            }) 
        }
        else if (CorrectWriting >= 17 && CorrectWriting <= 18) {
            this.setState({
                WritingScore: 190
            }) 
        }
        else if (CorrectWriting >= 19 && CorrectWriting <= 20) {
            this.setState({
                WritingScore: 200
            }) 
        }
        else if (CorrectWriting >= 21 && CorrectWriting <= 22) {
            this.setState({
                WritingScore: 210
            }) 
        }
        else if (CorrectWriting === 23) {
            this.setState({
                WritingScore: 220
            }) 
        }
        else if (CorrectWriting >= 24 && CorrectWriting <= 25) {
            this.setState({
                WritingScore: 230
            }) 
        }
        else if (CorrectWriting >= 26 && CorrectWriting <= 27) {
            this.setState({
                WritingScore: 240
            }) 
        }
        else if (CorrectWriting >= 28 && CorrectWriting <= 29) {
            this.setState({
                WritingScore: 250
            }) 
        }
        else if (CorrectWriting === 30) {
            this.setState({
                WritingScore: 260
            }) 
        }
        else if (CorrectWriting >= 31 && CorrectWriting <= 32) {
            this.setState({
                WritingScore: 270
            }) 
        }
        else if (CorrectWriting === 33) {
            this.setState({
                WritingScore: 280
            }) 
        }
        else if (CorrectWriting >= 34 && CorrectWriting <= 35) {
            this.setState({
                WritingScore: 290
            }) 
        }
        else if (CorrectWriting <= 36) {
            this.setState({
                WritingScore: 300
            }) 
        }
        else if (CorrectWriting >= 37 && CorrectWriting <= 38) {
            this.setState({
                WritingScore: 310
            }) 
        }
        else if (  CorrectWriting === 39) {
            this.setState({
                WritingScore: 320
            }) 
        }
        else if (CorrectWriting ===40) {
            this.setState({
                WritingScore: 330
            }) 
        }
        else if ( CorrectWriting === 41) {
            this.setState({
                WritingScore: 340
            }) 
        }
        else if ( CorrectWriting === 42) {
            this.setState({
                WritingScore: 360
            }) 
        }
        else if (CorrectWriting === 43) {
            this.setState({
                WritingScore: 380
            }) 
        }
        else if ( CorrectWriting === 44) {
            this.setState({
                WritingScore: 400
            }) 
        }

        //MATH
        if ((CorrectMathNoCal + CorrectMathWithCal) >= 0 && (CorrectMathNoCal + CorrectMathWithCal)  <= 1) {
            this.setState({
                MathScore: 200
            }) 
        } 
        else if ( (CorrectMathWithCal + CorrectMathNoCal) === 2 ) {
            this.setState({
                MathScore: 210
            }) 
        }
        else if ( (CorrectMathWithCal + CorrectMathNoCal) === 3) {
            this.setState({
                MathScore: 220
            }) 
        }
        else if ( (CorrectMathWithCal + CorrectMathNoCal) === 4) {
            this.setState({
                MathScore: 230
            }) 
        }
        else if ((CorrectMathWithCal + CorrectMathNoCal) === 5) {
            this.setState({
                MathScore: 250
            }) 
        }
        else if ((CorrectMathWithCal + CorrectMathNoCal) === 6) {
            this.setState({
                MathScore: 270
            }) 
        }
        else if ((CorrectMathWithCal + CorrectMathNoCal) === 7) {
            this.setState({
                MathScore: 280
            }) 
        }
        else if ((CorrectMathWithCal + CorrectMathNoCal) === 8) {
            this.setState({
                MathScore: 300
            }) 
        }
        else if ((CorrectMathWithCal + CorrectMathNoCal) === 9) {
            this.setState({
                MathScore: 310
            }) 
        }
        else if ((CorrectMathWithCal + CorrectMathNoCal) === 10) {
            this.setState({
                MathScore: 320
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 11) {
            this.setState({
                MathScore: 340
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 12) {
            this.setState({
                MathScore: 350
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 13) {
            this.setState({
                MathScore: 360
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 14) {
            this.setState({
                MathScore: 370
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 15) {
            this.setState({
                MathScore: 380
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 16) {
            this.setState({
                MathScore: 390
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 17) {
            this.setState({
                MathScore: 400
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 18) {
            this.setState({
                MathScore: 410
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 19) {
            this.setState({
                MathScore: 420
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 20) {
            this.setState({
                MathScore: 430
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 21) {
            this.setState({
                MathScore: 440
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 22) {
            this.setState({
                MathScore: 450
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 23) {
            this.setState({
                MathScore: 460
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 24) {
            this.setState({
                MathScore: 470
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 25) {
            this.setState({
                MathScore: 480
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 26) {
            this.setState({
                MathScore: 490
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 27) {
            this.setState({
                MathScore: 500
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 28) {
            this.setState({
                MathScore: 500
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 29) {
            this.setState({
                MathScore: 510
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 30) {
            this.setState({
                MathScore: 520
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 31) {
            this.setState({
                MathScore: 520
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 32) {
            this.setState({
                MathScore: 530
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 33) {
            this.setState({
                MathScore: 540
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 34) {
            this.setState({
                MathScore: 540
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 35) {
            this.setState({
                MathScore: 550
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 36) {
            this.setState({
                MathScore: 560
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 37) {
            this.setState({
                MathScore: 570
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 38) {
            this.setState({
                MathScore: 580
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 39) {
            this.setState({
                MathScore: 580
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 40) {
            this.setState({
                MathScore: 590
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 41) {
            this.setState({
                MathScore: 600
            })
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 42) {
            this.setState({
                MathScore: 610
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 43) {
            this.setState({
                MathScore: 610
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 44) {
            this.setState({
                MathScore: 620
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 45) {
            this.setState({
                MathScore: 630
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 46) {
            this.setState({
                MathScore: 640
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 47) {
            this.setState({
                MathScore: 650
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 48) {
            this.setState({
                MathScore: 660
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 49) {
            this.setState({
                MathScore: 670
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 50) {
            this.setState({
                MathScore: 680
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 51) {
            this.setState({
                MathScore: 690
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 52) {
            this.setState({
                MathScore: 700
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 53) {
            this.setState({
                MathScore: 710
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 54) {
            this.setState({
                MathScore: 730
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 55) {
            this.setState({
                MathScore: 750
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 56) {
            this.setState({
                MathScore: 770
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 57) {
            this.setState({
                MathScore: 790
            }) 
        }
        else if  ((CorrectMathWithCal + CorrectMathNoCal) === 58) {
            this.setState({
                MathScore: 800
            }) 
        }
        this.setState((state) => ({
            isTestSubmitted: true,
            Verbal: state.ReadingScore + state.WritingScore, 
            Total: state.ReadingScore + state.WritingScore + state.MathScore
        }))
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
            })

        let allQuestions = [];
            sections.map((section) => {
                allQuestions = [...allQuestions, ...section.questions]; 
            })

        return (numberOfAnsweredQuestions * 100) / allQuestions.length;
    }

    NotAllQuestionsAnswered() {
        /*
         * Check if one of the questions of the current section is not answered
         */ 
        const {subjects} = this.state;
        return subjects.some((subject) => subject.sections.some((section) => section.questions.map((question) => question.selectedChoice === '' ))); 
    }  

    IsNotTheFirstPage() {
        const {currentSection} = this.state;
        return ((currentSection !== 0))
    }
    IsTheFirstSectionType() {
        const {sections, currentSection} = this.state; 

        const section = sections[currentSection];
        return (section.IsFirstSectionType === true); 
    }

    moveToAnotherSubject() {
        const {sections, currentSection} = this.state; 

        const section1 = sections[currentSection];
        const section2 = sections[currentSection + 1]; 
        while (section1.sectionType === section2.sectionType) {
            this.setState({
                currentSection: currentSection + 1,
            })
        }
        this.setState({
            currentSection: currentSection + 1,
        })
    }
    render() {
        const {
            isTestSubmitted,
            Verbal,
            ReadingScore,
            WritingScore,
            MathScore, 
            Total,
            currentSection, sections, 
            CorrectReading, 
            CorrectWriting, 
            CorrectMathWithCal, 
            CorrectMathNoCal
        } = this.state;

        /*
         * 
         * check if the current section is the last one
         * 
         */

       if(isTestSubmitted) {
            
            return (
                <div className="appContainer">
                    <h1>results</h1>
                    <h2>Reading Score: {ReadingScore}</h2>
                    <h2>Writing and Language Score: {WritingScore}</h2>
                    <h2>Verbal Score: {Verbal}</h2>
                    <h2>Math Score: {MathScore}</h2>
                    <h2>Total Score: {Total} </h2>
                    <h2>Number of correct Reading section: {CorrectReading} (out of 52)</h2>
                    <h2>Number of correct Writing and Language section: {CorrectWriting} (out of 44)</h2>
                    <h2>Number of correct Math (No Calculator) section: {CorrectMathNoCal} (out of 20)</h2>
                    <h2>Number of correct Math (With Calculator) section: {CorrectMathWithCal} (out of 38)</h2>

                    <button className="btn btn-primary"  onClick={() => this.setState({ currentSection: currentSection - 1})}> Go Back To Review</button>
                </div>
            );
        }

        console.log(this.state.CorrectReading);
        console.log(this.state.CorrectWriting);
        console.log(this.state.CorrectMathNoCal);
        console.log(this.state.CorrectMathWithCal);
        const currentSectionObject = sections[currentSection];

        return <div className="appContainer">
            <div className= "header">
                <Timer 
                    initialTimer={currentSectionObject.defaultTimer} 
                    sectionType={currentSectionObject.sectionType}
                    onTimeEnd={() =>this.currentSectionObject.moveToAnotherSubject()}
                />     

            </div>
            
            <div className="testContainer">

                {this.addPassageOrNot()}

                <div className="questionSection">
                    <div className="article2">
                    {this.renderAllQuestions()}
                    {!this.IsTheFirstSectionType() ?  <button className="btn btn-primary"  onClick={() => this.setState({ currentSection: currentSection - 1})}> Back</button> : '' }
                    {this.renderRightButton()}
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

