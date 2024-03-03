import { useContext } from "react";
import { FormDataContext } from "../App";
import { initialExperienceArray } from "../intialData";


import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";

const ExperienceFormProps = {
  experienceObject : initialExperienceArray,
  setExperienceArray:()=> {}
}

function ExperienceForm({experienceObject,setExperienceArray}){
    const { id, company, position, startDate, endDate, location, description, isOpen } =
    experienceObject;

    const toggleDropDown = ()=> {
        setExperienceArray((prevState) => 
         prevState.map((exp)=> (exp.id === id? {...exp,isOpen:!exp.isOpen}:exp))
        )
    }
     return (
        <form className="experience-form">
            <fieldset>
                <div className="legend-container" onClick={toggleDropDown}>
                    <div className="legend-content">
                        <legend>Experience</legend>
                        {!isOpen && company && (
                            <div className="legend-company-preview">
                                <span className="legend-dash">-</span>
                                {company}
                            </div>
                        )

                        }
                    </div>
                    {isOpen?<ExpandLessIcon/>:<ExpandMoreIcon/>}
                </div>
            </fieldset>
        </form>
     )
}

function ExperienceForms(){
      const {experienceArray,setExperienceArray} = useContext(FormDataContext);
    const onDragEnd = ()=> {

    }

    const handleAddNew = ()=> {
        const newExperienceEntry = {
            id: uuidv4(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            isOpen: true,
          };

          setExperienceArray(prevState => [...prevState,newExperienceEntry])
    }

    return (
        <>
          <div className="forms-title">Experience</div>
          <DragDropContext onDragEnd={onDragEnd}>
             <Droppable droppableId="experienceFormsContainer">
               {(provided) => (
                 <div className="forms-container" {...provided.droppableProps} ref={provided.innerRef}>
                   {experienceArray.map((experienceObject, index) => (
                     <Draggable
                       key={experienceObject.id}
                       draggableId={experienceObject.id}
                       index={index}>
                       {(provided) => (
                         <div
                           ref={provided.innerRef}
                           {...provided.draggableProps}
                           {...provided.dragHandleProps}>
                           <ExperienceForm
                             experienceObject={experienceObject}
                             setExperienceArray={setExperienceArray}
                           />
                         </div>
                       )}
                     </Draggable>
                       ))}
                       {provided.placeholder}
                     </div>
                   )}
                 </Droppable>
      </DragDropContext>

      <Button className="forms-add-new" label={'+ Add new' } onClick={handleAddNew}></Button>
    </>
    )
}

export default ExperienceForms