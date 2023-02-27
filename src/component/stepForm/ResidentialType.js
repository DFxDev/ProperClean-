import { useGlobalContext } from "../context";
import React from "react";

const Residential = ({ value }) => {
  const {  handleStepFormChange } = useGlobalContext()

 
  return (
    <div className='bookingType'>
      <center  className='centerBooking'>
      <p className="bookingText">Choose Cleaning type</p>

      <form className="bookingForm">
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.Studio}
              onChange={handleStepFormChange("Studio")}
              name='Studio'
            />
            Studio
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.Flat}
              onChange={handleStepFormChange("Flat")}
              name='Flat'
            />
            Flat
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.House}
              onChange={handleStepFormChange("House")}
              name='House'
            />
            House
          </label>
        </div>
      </form>
      </center>
    </div>
  );
};

export default Residential;
