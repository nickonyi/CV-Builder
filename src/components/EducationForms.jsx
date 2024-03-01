import { useContext, ChangeEvent, FormEvent } from "react";
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import { FormDataContext } from "../App";
import { v4 as uuidv4 } from "uuid";


import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";

function EducationForm(){
    return (
        <form className="education-form">
            <fieldset>
                <div className="legend-container" >
                    <div className="legend-content">
                        <legend>Education</legend>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}

function EducationForms (){
    const { educationArray, setEducationArray } = useContext(FormDataContext);

    const handleAddNew = () => {
        const newEducationEntry = {
          id: uuidv4(),
          school: "",
          qualification: "",
          startDate: "",
          endDate: "",
          location: "",
          isOpen: true,
        };
    
        setEducationArray((prevState) => [...prevState, newEducationEntry]);
      };
    
    const onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
    
        const startIndex = result.source.index;
        const endIndex = result.destination.index;
    
        const updatedArray = Array.from(educationArray);
        const [removed] = updatedArray.splice(startIndex, 1);
        updatedArray.splice(endIndex, 0, removed);
    
        setEducationArray(updatedArray);
      };
    
    return (
        <>
        <div className="forms-title">Education</div>
        
       
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="educationFormsContainer">
          {(provided) => (
            <div className="forms-container" {...provided.droppableProps} ref={provided.innerRef}>
              {/* Creates a form synced with each object */}
              {educationArray.map((educationObject, index) => (
                <Draggable key={educationObject.id} draggableId={educationObject.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <EducationForm
                        educationObject={educationObject}
                        setEducationArray={setEducationArray}
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

      <Button className="forms-add-new" label={"+ Add new"} onClick={handleAddNew} />
        </>
    )
}

export default EducationForms