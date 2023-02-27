import React from 'react'
import styled from 'styled-components'
const ContactUs = () => {
  return (
    <Wrapper>
    <section >
     
      <form className="container">
        <h2> Contact Us </h2>
        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="text" name="" required />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="input-box">
              <input type="text" name="" required />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="input-box">
              <input type="email" name="" required />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="input-box">
              <input type="password" name="" required />
              <span className="text">Password</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      <div className="row100">
        <div className="col">
          <div className="input-box textarea">
            <textarea required></textarea>
            <span className="text">Type Your Message Here...</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="row100">
        <div className="col">
          <button type="submit" value="Send" >send </button>
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
  height: 100vh;
  padding: 20px;
  width: 100%;
  background: #001923;
  overflow: hidden;
}
// section::before{
//   content: "";
//   position: absolute;
//   width: 270px;
//   height: 270px;
//   background: linear-gradient(#21b42b , #bde423);
//   border-radius: 50%;
//   transform: translate(-420px , -180px);
//   overflow: hidden;
// }
// section::after{
//   content: "";
//   position: absolute;
//   width: 250px;
//   height: 250px;
//   background: linear-gradient(#c9c023 , #74e32a);
//   border-radius: 50%;
//   transform: translate(400px , 180px);
//   overflow: hidden;
// }
.container{
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 900px;
  height:40vh
  padding: 50px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(25px);
  margin-top:10%
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
.container .row100 .col .input-box.textarea{
  position: relative;
  width: 100%;
  height: 100px;
  padding: 10px 0;
}
.container .row100 .col .input-box textarea:focus ~ .line,
.container .row100 .col .input-box textarea:valid ~ .line{
  height: 100%;
}
.container .row100 .col button[type="submit"]{
  border: none;
  padding: 10px 40px;
  cursor: pointer;
  outline: none;
  background: #fff;
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

export default ContactUs