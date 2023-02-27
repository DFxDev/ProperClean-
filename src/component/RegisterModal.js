import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {  useGlobalContext } from './context'
import RegisterForm from './RegisterForm';


const RegisterModal = () => {
  const { isRegModalOpen, closeRegModal } = useGlobalContext();
  return (
    <div className={`${isRegModalOpen ? 'reg-modal-overlay reg-show-modal' : 'reg-modal-overlay'}`}>
      <div className='reg-modal-container'>
         <RegisterForm />
        <button className='reg-close-modal-btn' onClick={closeRegModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default RegisterModal;
