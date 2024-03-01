import { useContext, ChangeEvent, FormEvent } from "react";
import { FormDataContext } from "../App";

import { v4 as uuidv4 } from "uuid";


import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";


function EducationForms(){
 const toggleDropdown = ()=> {
    alert('nannaana')
 }
    return (
        <div className="education-form">
            <fieldset>
                <div className="legend-container" onClick={toggleDropdown}>
                 <div className="legend-content">
                    <legend>Education</legend>
                    </div> 
                </div>
            </fieldset>
        </div>
    )
}

export default EducationForms