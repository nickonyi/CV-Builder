import React,{useState,useEffect,createContext,Dispatch,SetStateAction} from 'react'
import { initialHeaderObject,initialEducationArray,initialExperienceArray } from './intialData'
import './styles/App.css'

import FormSection from "./components/FormSection";
import CvSection from "./components/CvSection";
import ButtonToggleView from "./components/ButtonToggleView";


const FormDataContext = React.createContext();

export default function App() {
  
  const [headerObject, setHeaderObject] = useState(initialHeaderObject);
  const [educationArray, setEducationArray] = useState(initialEducationArray);
  const [experienceArray, setExperienceArray] = useState(initialExperienceArray);
  

  return (
    <div className="app-container">
        <div className="nav-bar">
          <h1>CVCreatorPro 📃</h1>
        </div>
        <div className="main-content-container">
           <FormDataContext.Provider
           value={{
            headerObject,
            setHeaderObject,
            educationArray,
            setEducationArray,
            experienceArray,
            setExperienceArray
           }}
           >
           {<FormSection />}
           {<CvSection />}
           </FormDataContext.Provider>
           
        </div>
    </div>
  )
}

export {FormDataContext}
