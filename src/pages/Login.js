import React from 'react'
import { Button } from 'react-bootstrap'
import propercleanbold from '../images/propercleanbold.png'
import styled from 'styled-components'
import { useGlobalContext } from '../component/context';



const Login = () => {
  const { openModal, openRegModal } = useGlobalContext();
  
 
// eslint-disable-next-line 
  return (
    <Wrapper>
    <section className='logincss'>
      <div className="container-form sign-up">
        <div className="welcome-to-proper-clean">
            <div className="message">
            <img src={propercleanbold} alt='properclean logo' className="logo"></img>
                <h2>Welcome to properclean</h2>
                
                <p onClick={openRegModal}><a href='#' className="reg-pointer">Please Register here</a> </p>
                <Button className="sign-up-btn" onClick={openModal}>Login</Button>
            </div>
        </div>
       
    </div>
    
    </section>
    </Wrapper>
  )
};

const Wrapper = styled.main`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
}



.welcome-to-proper-clean {
  display: flex;
  align-items: center;
  text-align: center;
  color:black;
}

.message {
  padding: 1rem;
  
}

.message h2 {
  font-size: 2.4rem;
  
  padding: 1rem 0;
}

.message button {
  padding: 1rem;
  font-weight: 400;
  
  background-color: #227726;
  border-radius: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 2rem;
  transition: all .3s ease-in;
  
}

.message button:hover {
  
  background-color: #88dd8c;
}
@media screen and (min-width: 900px){
  .message {
    padding: 1rem;
    margin-top:180px;
  }
} 


`;

export default Login