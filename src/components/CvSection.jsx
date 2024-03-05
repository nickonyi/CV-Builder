import { useContext, useRef } from "react";
import { FormDataContext } from "../App";
import { v4 as uuidv4 } from "uuid";

import html2canvas from "html2canvas";
import jsPDF from "jspdf"

import HeaderCv from "./HeaderCv";
import EducationCv from "./EducationCv";
import ExperienceCv from "./ExperienceCv";

function Cv ({divRef}) {
    
    return (
        <div className="cv" ref={divRef}>
          <HeaderCv />
          <div className="body-cv">
            <EducationCv />
            <ExperienceCv />
          </div>
        </div>
    )
}

 function CvSection(){
    const divRef = useRef(null);

    return (
        <main className="cv-section">
            <div className="cv-and-download-container">
                <div className="cv-border-radius-wrapper">
                    <Cv divRef={divRef} />
                </div>
            </div>
        </main>
    )
}




export default CvSection