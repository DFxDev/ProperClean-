import React from "react";
import { useGlobalContext } from "../context";

const CleaningType = ({ value }) => {
    const {  handleStepFormChange } = useGlobalContext()


  return (
    <div className='bookingType'>
     <center className='centerBooking'>
      <p className="bookingText">Choose Cleaning type</p>
      
      <form className="bookingForm">
        <div className="radio">
          <label>
            <input
             
              type="radio"
              value={value.Residential}
              onChange={handleStepFormChange("Residential")}
              name='Residential'
             
            />
            Residential
          </label>
        </div>
        <div className="radio">
          <label>
            <input
            
              type="radio"
              value={value.Commercial}
              onChange={handleStepFormChange("Commercial")}
              name='Commercial'
            />
            Commercial
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.Green}
              onChange={handleStepFormChange("Green")}
              name='Green'
            />
            Green
          </label>
        </div>
        
      </form>
     
      </center>
    </div>
    
  );
};

export default CleaningType;
