import React,{ useContext,ChangeEvent,FormEvent } from "react"
import { FormDataContext } from "../App";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";


function HeaderForm(){
    
    const {headerObject,setHeaderObject} = useContext(FormDataContext);

    function toggleDropdown(){
        setHeaderObject((prevHeader)=> ({
            ...prevHeader,
            isOpen:!prevHeader.isOpen
        }))
    }
    
   const handleChange = (e)=>{
    const { name, value } = e.target;
    setHeaderObject({ ...headerObject, [name]: value });
    }

    const handleClear = (e) => {
        e.preventDefault();
        setHeaderObject({ fullName: "", email: "", phone: "", address: "", isOpen: true });
        
    }

    const handleSave = (e)=> {
        e.preventDefault();
        toggleDropdown();
    }
    
     const {fullName,email,phone,address,isOpen} = headerObject;
     
   
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

            {/**Drop down menu */}
            <div className={`dropdown-menu ${isOpen?"open":""}`}>
                <ul>
                    <li className="input-container">
                        <label htmlFor="fullname">Full name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={handleChange}
                         />
                    </li>
                    <li className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                             type="email"
                             id="email"
                             name="email"
                             placeholder="Enter your email address"
                             value={email}
                             onChange={handleChange}
                        />
                    </li>
                    <li className="input-container">
                         <label htmlFor="phone">Phone</label>
                         <input
                           type="tel"
                           id="phone"
                           name="phone"
                           placeholder="Enter your phone number"
                           value={phone}
                           onChange={handleChange}
                         />
                    </li>
                    <li className="input-container">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        value={address}
                        onChange={handleChange}
                      />
                    </li>
                </ul>
                <div className="button-container">
                    <Button className="clear-button" label="Clear" onClick={handleClear}></Button>
                    <Button className="save-button" label="Save" onClick={handleSave}></Button>
                </div>

            </div>
        </fieldset>
    </form>
  )
}

export default HeaderForm