import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {  useGlobalContext } from './context'
import Appreciation from './Appreciation'

const CheckoutModal = () => {
  const { isThankyouModalOpen, closeThankyouModal} = useGlobalContext();
  return (
    <div className={`${isThankyouModalOpen ? 'checkout-modal-overlay checkout-show-modal' : 'checkout-modal-overlay'}`}>
      <div className='checkout-modal-container'>
         <Appreciation />
        <button className='close-modal-btn' onClick={closeThankyouModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default CheckoutModal;