import React,{ useContext } from "react"
import { FormDataContext } from "../App";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";


function HeaderForm(){
    
    const {headerObject,setHeaderObject} = useContext(FormDataContext);
    
    
     const {fullName,email,phone,address,isOpen} = headerObject;
    console.log(isOpen);
    return (
    <form className="header-form">
        <fieldset>
            <div className="legend-container">
                <div className="legend-content">
                    <legend>Header</legend>
                    {isOpen && fullName && (
                        <div className="legend-fullname-preview">
                            <span className="legend-dash">-</span>
                            {fullName}
                        </div>
                    )}
                </div>
                {isOpen?<ExpandLessIcon/>:<ExpandMoreIcon/>}
            </div>
        </fieldset>
    </form>
  )
}

export default HeaderForm