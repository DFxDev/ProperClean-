import React from "react";
import { useGlobalContext } from "../context";

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
              value={value.LivingRoom}
              onChange={handleStepFormChange("LivingRoom")}
              name='LivingRoom'
            />
            Living Room
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.Bedroom}
              onChange={handleStepFormChange("Bedroom")}
              name='Bedroom'
            />
            Bedroom
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.kitchen}
              onChange={handleStepFormChange("Kitchen")}
              name='Kitchen'
            />
            Kitchen
          </label>
        </div>
       
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.BathRoom}
              onChange={handleStepFormChange("Bathroom")}
              name='Bathroom'
            />
            Bathroom
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.Toilet}
              onChange={handleStepFormChange("Toilet")}
              name='Toilet'
            />
            Toilet
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.Hallway}
              onChange={handleStepFormChange("Hallway")}
              name='Hallway'
            />
            Hallway
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={value.AdditionalSpace}
              onChange={handleStepFormChange("AdditionalSpace")}
              name="AdditionalSpace"
            />
            Additional space
          </label>
        </div>
      </form>
      </center>
    </div>
  );
};

export default Residential;
