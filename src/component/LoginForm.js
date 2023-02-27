import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../component/context';


const LoginForm = () => {
  
 const {closeModal, userLogin } = useGlobalContext();

 const navigate = useNavigate();

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [people, setPeople] = useState([])
 const [loading, setIsLoading] = useState(false)

 
 const loginHandler = (e) =>{
  e.preventDefault()
  setIsLoading(true)
  if (email && password){
  const person = { id: new Date().getTime().toString(), email, password};
  
  setPeople([...people, person]);
  // setPeople((people) => {
  //   return [...people, person]
  // })
  //  console.log(person)
   setEmail('')
   setPassword('')
   
   
  }
  // const person = {email, password}
  userLogin(email, password)
  if (email && password){
    setIsLoading(false)
          // console.log(email, password);
          navigate('/homepage');
          closeModal();
  }
    
 }

  return (
    <Wrapper>
    <section>
     
      <form className="container" onSubmit={loginHandler}>
        <h2> Login here</h2>
        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="text" name="name" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              <span className="text"> Email</span>
              <span className="line"></span>
            </div>
          </div>
          
        </div>
        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              <span className="text">Password</span>
              <span className="line"></span>
            </div>
          </div>
          
        </div>
      
      <div className="row100">
        <div className="col">
         {!loading && <button type="submit" value="Send" >login </button>} 
         {loading && <Loading />}
        </div>
      </div>
     </form>
     
    </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
section{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  // background: #001923;
  // background: rgb(82, 104, 69);
  overflow: hidden;
}

.container{
  position: relative;
  z-index: 1;
  
  max-width: 620px;
  padding: 50px;
  padding-top: 0px;
  background: rgba(255, 255, 255, 0.1);
  
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(25px);
  margin-top:10px;
  
}
.container::before{
  content: "";
  position: absolute;
  top: 0;
  left: -40%;
  width: 100%;
  height: 100%;
  background:rgba(255, 255, 255, 0.05) ;
  pointer-events: none;
  transform: skewX(-15deg);
}
.container h2{
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
}
.container .row100{
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
}
.container .row100 .col{
  position: relative;
  width: 100%;
  padding: 0 10px;
  margin: 30px 0 20px;
}
.container .row100 .col .input-box{
  position: relative;
  width: 100%;
  height: 40px;
  color: #fff;
}
.container .row100 .col .input-box input ,
.container .row100 .col .input-box textarea{
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  font-size: 15px;
  padding: 0 10px;
  z-index: 1;
}
.container .row100 .col .input-box .text{
  position: absolute;
  top: 0;
  left: 0;
  line-height: 40px;
  font-size: 15px;
  padding: 0 10px;
  display: block;
  transition: 0.5s;
  pointer-events: none;
}
.container .row100 .col .input-box input:focus + .text,
.container .row100 .col .input-box input:valid + .text,
.container .row100 .col .input-box textarea:focus + .text,
.container .row100 .col .input-box textarea:valid + .text{
  top: -35px;
  left: -10px;
}
.container .row100 .col .input-box .line{
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 2px;
  background: #fff;
  transition: 0.5s;
  border-radius: 2px;
  pointer-events: none;
}
.container .row100 .col .input-box input:focus ~ .line,
.container .row100 .col .input-box input:valid ~ .line{
  height: 100%;
}


}
.container .row100 .col button[type="submit"]{
  border: none;
  padding: 10px 40px;
  cursor: pointer;
  outline: none;
  
  color: #000;
  font-weight: 500;
  font-size: 15px;
  border-radius: 2px;
  background: linear-gradient(#c9c023 , #74e32a);
}
@media (max-width: 768px)
{
  section::before{
      transform: translate(-200px,-180px);
      overflow: hidden;
  }
  section::after{
      transform: translate(220px,180px);
      overflow: hidden;
  }
  .container{
      padding: 20px;
  }
  .container h2{
      font-size: 28px;
  }
}
Footer

`;

export default LoginForm;