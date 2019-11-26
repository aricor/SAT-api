import React from "react";
import {Button } from "reactstrap"; 

const ProgressBar = props => {
    return props.sections.map((section) => {
        return (
            section.questions.map((question) => {
                const buttonColor = question.selectedChoice != '' ? 'btn-primary' : '';
                return (
                    <div class="d-flex justify-content-center">
                        <div className="btn-toolbar">
                            <div className="mr-2">
                                <div className="mt-2">
                                    <div className="mb-2"> 
                                        <button class={`btn ${buttonColor}`}>
                                            {question.id}
                                        </button>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                );
            })
        )

    })

}
export default ProgressBar; 