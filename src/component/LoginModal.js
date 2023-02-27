import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {  useGlobalContext } from './context'
import LoginForm from './LoginForm'

const LoginModal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      <div className='modal-container'>
         <LoginForm />
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default LoginModal;
