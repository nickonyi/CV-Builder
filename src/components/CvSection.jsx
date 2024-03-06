import { useContext, useRef } from "react";
import { FormDataContext } from "../App";
import { v4 as uuidv4 } from "uuid";

import html2canvas from "html2canvas";
import jsPDF from "jspdf"

import HeaderCv from "./HeaderCv";
import EducationCv from "./EducationCv";
import ExperienceCv from "./ExperienceCv";
import DownloadIcon from "../icons/DownloadIcon";

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
    const {headerObject} = useContext(FormDataContext);
    const [first_name,last_name] = headerObject.fullName.split(" ");
    
    const divRef = useRef(null);

   const handleDownloadPDF = ()=> {
    const cvDiv = divRef.current;
    const clonedCv = cvDiv.cloneNode(true);
    clonedCv.style.setProperty("--cv-resize", "1");
    clonedCv.style.borderRadius = "0";
    document.body.appendChild(clonedCv);
  
   html2canvas(clonedCv).then((canvas)=> {
         
       const imgData = canvas.toDataURL("image/jpeg");
       const pdf = new jsPDF();

       const imgWidth = 210;
       const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData,'JPEG',0,0,imgWidth,imgHeight);
      pdf.save(`${first_name}_${last_name}_cv`)
 });

 clonedCv.remove();
   }

    return (
        <main className="cv-section">
            <div className="cv-and-download-container">
                <div className="cv-border-radius-wrapper">
                    <Cv divRef={divRef} />
                </div>
                <button className="download-button" onClick={handleDownloadPDF}>
                   <DownloadIcon />
                     Download PDF
                </button>
            </div>
        </main>
    )
}




export default CvSection