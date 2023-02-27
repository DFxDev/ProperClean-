import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import ket1 from "../images/ket1.jpeg";
import img1 from "../images/img1.jpeg";
import grass from "../images/grass.jpeg";
import { GiVacuumCleaner, GiBroom, GiHighGrass } from "react-icons/gi";
import cleaning from "../images/cleaning.mp4";
import calendar from "../images/calendar.png"
import house from "../images/house.png"
import chat from "../images/chat.png"
const HomePage = () => {
   
  return (
    <>
      <section>
        <div className="imageclass">
          <h1 className="textheadclass">Come Home happy</h1>
          <h3 className="textclass">we will clean for you!</h3>
          <Button className="button">BOOK A CLEANING</Button>
        </div>
      </section>

      {/* services  */}
      <Wrapper>
        <section className="services">
          {/* section title  */}
          <div className="section-title services-title">
            <h2 className="services-text">our services</h2>
            <div className="underline"></div>
          </div>
          {/* end of section title  */}
          <div className="section-center clearfix">
            {/* single card  */}
            <article className="service-card">
              {/* img container  */}
              <div className="service-img-container">
                {/* img  */}
                <img
                  src={ket1}
                  className="service-img"
                  alt="residential cleaning service"
                />
                {/* service icon */}
                <span className="service-icon">
                  <i className="icons-clean">
                    {" "}
                    <GiBroom />{" "}
                  </i>
                </span>
              </div>
              {/* service info  */}
              <div className="service-info">
                <h4>Residential Cleaning</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione labore sed deserunt, blanditiis error doloremque.
                </p>
                 {/* // eslint-disable-next-line */}
                <a href="products.html" className="btn service-btn">
                  read more
                </a>
              </div>
            </article>
            {/* end of  single card  */}
            {/* single card  */}
            <article className="service-card">
              {/* img container  */}
              <div className="service-img-container">
                {/* img */}
                <img src={img1} className="service-img" alt="single service" />
                {/* service icon  */}
                <span className="service-icon">
                  <i className="">
                    <GiVacuumCleaner />
                  </i>
                </span>
              </div>
              {/* service info  */}
              <div className="service-info">
                <h4>Commercial Cleaning</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione labore sed deserunt, blanditiis error doloremque.
                </p>
                <a className="btn service-btn">read more</a>
              </div>
            </article>
            {/* end of  single card  */}
            {/* single card  */}
            <article className="service-card">
              {/* img container  */}
              <div className="service-img-container">
                {/* img  */}
                <img src={grass} className="service-img" alt="Green cleaning" />
                {/* service icon  */}
                <span className="service-icon">
                  <i className="">
                    {" "}
                    <GiHighGrass />
                  </i>
                </span>
              </div>
              {/* service info  */}
              <div className="service-info">
                <h4>Green Cleaning</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione labore sed deserunt, blanditiis error doloremque.
                </p>
                {/* // eslint-disable-next-line  */}
                <a href="products.html" className="btn service-btn">
                  read more
                </a>
              </div>
            </article>
                    {/* end of  single card  */}
          </div>
        </section>
      </Wrapper>
                       {/* End of services */}
                       {/* Connect Section */}
      <section className="connect">
          
          <video
         
            className="video-container"
            src={cleaning}
            autoPlay
            loop
            muted
            
            
          />
         
      <div className="video-banner">
                                
        <div className="section-title">
          <h2 className="touch-text"> get in touch</h2>
          <div className="underline"></div>
        </div>
                              
        <p className="video-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
          perferendis exercitationem sit. Beatae eius commodi officiis rem
          soluta ratione dignissimos quisquam tempore laudantium, porro vitae
          cupiditate dicta magni quas corrupti aperiam, rerum minus odio totam
          repellendus delectus nostrum veniam!
        </p>
       
        <Button className="cont btn">contact us</Button>
      </div>
      
      </section>
              {/* End of Connect */}
              {/* How it works */}
       <section className="works-container">
               {/* first card */}
        <div className="firstcard">
          <div>
            <img src={calendar} alt='booking-logo' className="booking-img" />
          </div>
          <h3 className="book-text">book</h3>
          <div >
          <p className="para-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Magni ratione
              perferendis exercitationem sit.
          </p>
        </div>
        </div>
      
                   {/* Second card */}
        <div className="firstcard">
          <div>
            <img src={house} alt='clean-logo' className="booking-img" />
          </div>
          <h3 className="book-text">clean</h3>
          
          <div>
          <p className="para-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Magni ratione
              perferendis exercitationem sit.
          </p>
        </div> 
          
        </div>
       
                  {/* Third Card */}
        <div className="firstcard">
          <div>
            <img src={chat} alt='happy-logo' className="booking-img" />
          </div>
          <h3 className="book-text">Happy</h3>
          
          <div >
          <p className="para-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Magni ratione
              perferendis exercitationem sit.
          </p>
        </div>
          
        </div>
        
        </section>       

    </>
  );
};
const Wrapper = styled.section`
/*
=============== 
Services
===============
*/
.services{
  padding: 4rem 0;
  width: 95vw;
  margin: 0 auto;
  max-width: 1210px;
  margin-bottom:10px;
  // z-index: -2;

}
.section-center{
  margin-left: 2.7%
}
.services-title {
  margin-top: -1rem;
  
  text-align: center; 
}
.services-text{
  line-height: 4rem;
  padding-top: 2%;
  color: black;
}

.service-card {
  margin: 2rem 0;
  
  background: var(--clr-grey-10);
  border-radius: 2%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}
.service-card:hover {
  transform: scale(1.02);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.service-img {
  height: 17rem;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
img {
  width: 100%;
  display: block;
 
}
.service-info {
  text-align: center;
  padding: 3rem 1rem 2.5rem 1rem;
}
.service-info p {
  max-width: 20rem;
  color: var(--clr-grey-5);
  margin: 0 auto;
}
.service-btn {
  font-size: 0.75rem;
  text-transform: capitalize;
  padding: 0.375rem 0.5rem;
  border-radius: var(--radius);
  font-weight: 400;
  margin-top: 1.25rem;
}
@media screen and (min-width: 768px) {
  .service-card {
    float: left;
    width: 45%;
    margin-right: 5%;
    /* 100% 45% 90% 5%*/
  }
}
@media screen and (min-width: 992px) {
  .service-card {
    width: 30%;
    margin-right: 3.333%;
    /* 100% 30% 3.333%*/
  }
}
.service-img-container {
  position: relative;
}
.service-icon {
  position: absolute;
  left: 50%;
  bottom: 0;
  font-size: 2rem;
  color: var(--clr-primary);
  background: rgb(235, 245, 218);
  padding: 0.2rem 0.6rem;
  border-radius: 50%;
  transform: translate(-50%, 50%);
  border: 0.375rem solid var(--clr-grey-10);
}
.icons-clean{
  margin-bottom:10%;
}



}
`;

export default HomePage;
