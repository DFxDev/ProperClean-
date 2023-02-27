import React from "react";
// import basket from "../images/basket.png";
// import tima from "../images/tima.jpeg";
// import staff from "../images/staff.png";
import grassclean from "../images/grassclean.jpeg";
import ket1 from "../images/ket1.jpeg";
import styled from "styled-components";
import { MdIron, MdOutlineGrass } from "react-icons/md";
import { FaHandsWash, FaSoap } from "react-icons/fa";
import { GiWashingMachine, GiVacuumCleaner } from "react-icons/gi";
import face from '../images/face.png'
import woman from '../images/woman.png'
import model from '../images/model.png'
import facial from '../images/facial.png'
import happyface from '../images/happyface.png'
import { Button } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Wrapper>
      <section className="about-section">
        <div className="hero">
          <div className="section-center hero-center">
            <article className="hero-info">
              <h2 className="h-text">about Us</h2>
              <div className="underline"></div>
              {/* <img scr={basket} alt='' className='basket-icon'/> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quae, eum maiores est enim earum fugiat aspernatur. Fuga qui
                iste amet reiciendis possimus rerum omnis recusandae molestias
                error consequuntur, doloribus inventore reprehenderit officiis.
                Dolore aut, repellendus eius fugiat numquam cumque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quae, eum maiores est enim earum fugiat aspernatur. Fuga qui
                iste amet reiciendis possimus rerum omnis recusandae molestias
                error consequuntur, doloribus inventore reprehenderit officiis.
                Dolore aut, repellendus eius fugiat numquam cumque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quae, eum maiores est enim earum fugiat aspernatur. Fuga qui
                iste amet reiciendis possimus rerum omnis recusandae molestias
                error consequuntur, doloribus inventore reprehenderit officiis.
                Dolore aut, repellendus eius fugiat numquam cumque.
              </p>
            </article>
            <article className="hero-img">
              <img src={ket1} className="hero-photo" alt="" />
            </article>
          </div>
        </div>
        {/* end of header  */}
        {/* about  */}
        <div className="choose-us">
          <section className="section about">
            <div className="section-center about-center">
              {/* about img  */}
              <article className="about-img">
                <img src={grassclean} className="hero-photo" alt="about img" />
              </article>
              {/* about info */}
              <article className="about-info">
                {/* section title  */}
                <div className="section-title about-title">
                  <h2 className="h-text">why choose us</h2>
                  <div className="underline"></div>
                </div>
                {/* end of section title  */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  quae, eum maiores est enim earum fugiat aspernatur. Fuga qui
                  iste amet reiciendis possimus rerum omnis recusandae molestias
                  error consequuntur, doloribus inventore reprehenderit
                  officiis. Dolore aut, repellendus eius fugiat numquam cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  quae, eum maiores est enim earum fugiat aspernatur. Fuga qui
                  iste amet reiciendis possimus rerum omnis recusandae molestias
                  error consequuntur, doloribus inventore reprehenderit
                  officiis. Dolore aut, repellendus eius fugiat numquam cumque.
                </p>
                {/* <a href="#" className="btn">about us</a> */}
              </article>
            </div>
          </section>
        </div>
        {/* end of about */}
        {/* services  */}
        <div className="abtservice-section">
          <section className="section bg-grey">
            {/* section title  */}
            <div className="section-title">
              <h2 className="h-text">more services</h2>
              <div className="underline"></div>
            </div>
            {/* end of section title  */}
            <div className="services-center section-center">
              {/* single service  */}
              <article className="service">
                <i className="fas fa-code service-icon">
                  {" "}
                  <GiVacuumCleaner />
                </i>
                <h4>Home cleaning</h4>
                <div className="underline"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates corrupti animi saepe quasi excepturi cupiditate
                  voluptate dolor sed obcaecati vero.
                </p>
              </article>
              {/* end of single service  */}
              {/* single service  */}
              <article className="service">
                <i className="fab fa-sketch service-icon">
                  {" "}
                  <MdIron />
                </i>
                <h4>cloth ironing</h4>
                <div className="underline"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates corrupti animi saepe quasi excepturi cupiditate
                  voluptate dolor sed obcaecati vero.
                </p>
              </article>
              {/* end of single service  */}
              {/* single service */}
              <article className="service">
                <i className="fab fa-android service-icon">
                  {" "}
                  <GiWashingMachine />
                </i>
                <h4>Laundry</h4>
                <div className="underline"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates corrupti animi saepe quasi excepturi cupiditate
                  voluptate dolor sed obcaecati vero.
                </p>
              </article>
              {/* end of single service  */}
            </div>

            <div className="services-center section-center">
              {/* single service  */}
              <article className="service">
                <i className="fas fa-code service-icon">
                  {" "}
                  <FaHandsWash />
                </i>
                <h4>washing up</h4>
                <div className="underline"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates corrupti animi saepe quasi excepturi cupiditate
                  voluptate dolor sed obcaecati vero.
                </p>
              </article>
              {/* end of single service  */}
              {/* single service  */}
              <article className="service">
                <i className="fab fa-sketch service-icon">
                  {" "}
                  <MdOutlineGrass />
                </i>
                <h4>grass cutting</h4>
                <div className="underline"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates corrupti animi saepe quasi excepturi cupiditate
                  voluptate dolor sed obcaecati vero.
                </p>
              </article>
              {/* end of single service  */}
              {/* single service */}
              <article className="service">
                <i className="fab fa-android service-icon">
                  {" "}
                  <FaSoap />
                </i>
                <h4>window cleaning</h4>
                <div className="underline"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates corrupti animi saepe quasi excepturi cupiditate
                  voluptate dolor sed obcaecati vero.
                </p>
              </article>
              
              {/* end of single service  */}
            </div>
            <div className="about-button"><Button className="button-button">Contact Us</Button>
            </div>
          </section>
        </div>
        {/* end of services  */}
            {/* testimonial  */}
        <section className="section timeline">
        {/* section title  */}
          <div className="section-title">
            <h2>Our happy customers</h2>
            <div className="underline"></div>
          </div>
          {/* end of section title  */}
          <div className="section-center timeline-center">
          {/* single timeline item  */}
            <article className="timeline-item">
              <img src={face} alt='face' className='face-img'/>
              <h4>Mark Adebowale</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                1
              </span>
            </article>
            {/* end of  single timeline item  */}
            {/* single timeline item  */}
            <article className="timeline-item">
            <img src={happyface} alt='face' className='face-img'/>
              <h4>Cecillia</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                2
              </span>
            </article>
            {/* end of  single timeline item  */}
            {/* single timeline item */}
            <article className="timeline-item">
            <img src={model} alt='face' className='face-img'/>
              <h4>John
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                3
              </span>
            </article>
            {/* end of  single timeline item  */}
            {/* single timeline item  */}
            <article className="timeline-item">
            <img src={face} alt='face' className='face-img'/>
              <h4>David</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                4
              </span>
            </article>
            {/* end of  single timeline item  */}
            {/* single timeline item  */}
            <article className="timeline-item">
            <img src={woman} alt='face' className='face-img'/>
              <h4>Angel</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                5
              </span>
            </article>
            {/* end of  single timeline item  */}
            {/* single timeline item  */}
            <article className="timeline-item">
            <img src={facial} alt='face' className='face-img'/>
              <h4>Christopher</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                6
              </span>
            </article>
            {/* end of  single timeline item */}
          </div>
        </section>
        {/* end of  timeline */}
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
  /* added during recording */
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    margin-left: auto;
    margin-right: auto;
  }
  .section-title {
    margin-bottom: 4rem;
    text-align: center;
  }
  .section-center h4 {
    color: black;
    line-height: 1rem;
  }
  .section-center i {
    color: black;
  }

  /*
=============== 
Hero
===============
*/
  /* underline added to globals */

  .hero .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  .hero-img {
    display: none;
  }
  .hero {
    background: var(--clr-primary-10);
  }
  .hero-center {
    min-height: calc(100vh - 5rem);
    display: grid;
    place-items: center;
  }
 
  .hero-icons {
    justify-items: start;
  }
  .hero-btn {
    margin-top: 1.25rem;
  }
  @media screen and (min-width: 992px) {
    .hero-img {
      display: block;
      position: relative;
    }
    .hero-center {
      grid-template-columns: 1fr 1fr;
    }

    .hero-img::before,
    .about-img::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--clr-primary-5);
      top: 2rem;
      right: -2rem;
      border-radius: var(--radius);
    }
  }
  .hero-photo {
    max-width: 25rem;
    max-height: 30rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: var(--radius);
    position: relative;
  }
  /*
=============== 
About
===============
*/
  /* section title added to globals */
  .about-title {
    text-align: left;
    margin-bottom: 2rem;
  }
  .about-title .underline {
    margin-left: 0;
  }
  .about-center {
    display: grid;
    gap: 3rem 2rem;
  }
  .about-img {
    justify-self: center;
  }
  @media screen and (min-width: 992px) {
    .about-center {
      grid-template-columns: 1fr 1fr;
    }
    .about-img {
      position: relative;
    }
    .about-img::before {
      left: -2rem;
    }
    .about-info {
      align-self: center;
    }
  }
  /*
=============== 
Services
===============
*/
  /* bg-grey in globals */
  .service {
    background: var(--clr-white);
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .service .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
  .service:hover p {
    color: var(--clr-white);
  }
  .service:hover .underline {
    background: var(--clr-white);
  }
  @media screen and (min-width: 676px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /*
=============== 
Timeline
===============
*/
.timeline-center {
  width: 80vw;
  max-width: 40rem;
}
.timeline-item {
  border-top: 2px dashed var(--clr-primary-5);
  margin: 0;
  padding: 4rem 2rem;
  position: relative;
}
.timeline p {
  margin-bottom: 0;
}
.timeline-item:nth-child(even) {
  border-left: 2px dashed var(--clr-primary-5);
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;

  margin-right: 2rem;
  padding-right: 0;
}
.timeline-item:nth-child(odd) {
  border-right: 2px dashed var(--clr-primary-5);
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  margin-left: 2rem;
  padding-left: 0;
}
.timeline-item:first-child {
  border-top: 0;
  border-top-right-radius: 0;
}
.timeline-item:last-child {
  border-bottom-left-radius: 0;
}
.number {
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-bottom: 0;
  background: var(--clr-primary-5);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--clr-primary-1);
  font-weight: bold;
}
.timeline-item:nth-child(even) .number {
  left: 0;
}
.timeline-item:nth-child(odd) .number {
  right: 0;
  -webkit-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
}
`;

export default AboutUs;
