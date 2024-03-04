import { useContext, useRef } from "react";
import { FormDataContext } from "../App";

import html2canvas from "html2canvas";
import jsPDF from "jspdf"

import HeaderCv from "./HeaderCv";

function Cv ({divRef}) {
    
    return (
        <div className="cv" ref={divRef}>

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