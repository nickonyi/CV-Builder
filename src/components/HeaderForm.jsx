import React,{ useContext } from "react"
import { FormDataContext } from "../App";




function HeaderForm(){
    
    const {headerObject,setHeaderObject} = useContext(FormDataContext);
    
    
     const {fullName,email,phone,address,isOpen} = headerObject;
    
    return (
    <form className="header-form">
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
        </div>
    </form>
  )
}

export default HeaderForm