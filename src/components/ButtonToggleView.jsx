import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";


function ButtonToggleView({showForm,toggleView}){
    return (
        <button className="toggle-view-button" onClick={toggleView}>
           {showForm ? (
        <>
          <ArrowRight /> Show CV
        </>
      ) : (
        <>
          <ArrowLeft /> Show Editor
        </>
      )}
        </button>
    )
}

export default ButtonToggleView