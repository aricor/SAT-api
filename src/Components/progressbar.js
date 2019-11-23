
import React from "react";
import {Button } from "reactstrap"; 

const ProgressBar = () => {
    return (
        <div class="d-flex justify-content-center">
            
            <div className="btn-toolbar">
            <div className="mr-2">
                <div className="mt-2">
                    <div className="mb-2"> 
                    <button className="btn btn-outline-secondary" >1</button>    
                    </div>
                </div>
            </div>

            <div className="mr-2">
                <div className="mt-2">
                    <div className="mb-2"> 
                    <button className="btn btn-outline-secondary" >2</button>    
                    </div>
                </div>
            </div>

            </div>


        </div> 
    );
}
export default ProgressBar; 
