import React, {useEffect} from "react";
import { useGlobalContext } from "../context";
import CheckoutModal from "../CheckoutModal";
import { useNavigate } from 'react-router-dom'

const Confirm = ({ value }) => {
  const { stepFormValues, confirmStore, openThankyouModal } = useGlobalContext();
  const navigate = useNavigate()
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    confirmStore();

    openThankyouModal();
    console.log(stepFormValues);
    console.log("submitted something");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
       navigate('/homepage')
     }, 6000);
     return () => clearTimeout(timer)
   }, [])
    

  return (
    <div className="bookingConfirm">
      <h1 className="bookingText">Your booking</h1>

      <h6 className="bookingText2">
        Pls submit your booking options and we'll get back to you soon
      </h6>
      <div className="bookingContainer">
        <div className="bookingList">
          <p>{value.Residential}</p>
          <p>{value.Commercial}</p>
          <p>{value.Green}</p>
          <p>{value.Studio}</p>
          <p>{value.Flat}</p>
          <p>{value.House}</p>
        </div>
        <div className="bookingList">
          <p>{value.LivingRoom}</p>
          <p>{value.Bedroom}</p>
          <p>{value.Kitchen}</p>
          <p>{value.Hallway}</p>
          <p>{value.Bathroom}</p>
          <p>{value.Toilet}</p>
          <p>{value.AdditionalSpace}</p>
        </div>
      </div>

      <button
        className="cont btn bookbutton ConfirmBookingBtn"
        onClick={ handleBookingSubmit  }
      >
        submit
      </button>
      <CheckoutModal />
    </div>
  );
};

export default Confirm;
