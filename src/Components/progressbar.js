
import React from "react";
import {Button } from "reactstrap"; 
import Toggle from "./togglestate";

const ProgressBar = props => {
    choices.map((choice) => {
        const IsSelected = props.choice.active;
        return (
            <div class="d-flex justify-content-center">
                <div className="btn-toolbar">
                <div className="mr-2">
                    <div className="mt-2">
                        <div className="mb-2"> 
                            <Button >
                                <Toggle  
                                color="secondary">
                                </Toggle>
                                {props.questions.id}
                            </Button>    
                        </div>
                    </div>
                </div>

    
                </div>
    
    
            </div> 
        );
    })

}
export default ProgressBar; 
