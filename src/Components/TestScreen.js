import React from 'react'
import styles from "./testscreen.css"
import Timer from './timer'
import Highlight from './getHighlight'
import ButtonComponent from './button'
export default class TestScreen extends React.Component {
    
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
                    </div>
                </div>
            </div>
        </div>
    }
}