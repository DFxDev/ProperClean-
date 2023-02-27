import CleaningType from "../component/stepForm/CleaningType";
import ResidentialType from "../component/stepForm/ResidentialType";
import RoomType from "../component/stepForm/RoomType";
import Confirm from "../component/stepForm/Confirm";
import { useGlobalContext } from "../component/context";


const BookingOnline = () => {
  const {  handleStepFormChange,
        activeStep,
        stepFormValues,
        handleNextStep,
        handlePrevStep,
        steps, 
        } = useGlobalContext()

   

 


  return (
    <section className="booking">
      <center  className='centerBooking'>
      {activeStep === 0 && (
        <CleaningType 
        value={stepFormValues}
        handleStepFormChange={handleStepFormChange} />
      )}
      {activeStep === 1 && (
        <ResidentialType
          value={stepFormValues}
          handleStepFormChange={handleStepFormChange}
        />
      )}
      {activeStep === 2 && (
        <RoomType
          value={stepFormValues}
          handleStepFormChange={handleStepFormChange}
        />
      )}
      {activeStep === 3 && (
        <Confirm
          value={stepFormValues}
          handleStepFormChange={handleStepFormChange}
        />
      )}
     <div className="btnDiv">
      <button
        className="cont btn bookbutton "
        disabled={activeStep === 0}
        onClick={handlePrevStep}
        style={activeStep === 3 ? { display: "none" } : {}}
      >
        {" "}
        Back
      </button>
      <button
        className="cont btn bookbutton"
        onClick={handleNextStep}
        style={activeStep === 3 ? { display: "none" } : {}}
        
      >
        {" "}
        {activeStep === steps.length - 0 ? "Submit" : "Next"}

      </button>
      </div>
      </center>
    </section>

    

  );
};

export default BookingOnline;
