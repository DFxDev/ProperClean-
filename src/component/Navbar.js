
import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import  { social } from './data'
import StyledNavbar from './StyledNavbar'
import logohover from '../images/logohover.png'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else {
      linksContainerRef.current.style.height = '0px'
    }

  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        
          <img src={logohover} alt='logo' className='toplogo'/>
          
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        
        <div className='links-container' ref={linksContainerRef}>
          <li className='links' ref={linksRef}>
             <StyledNavbar /> 
          </li>
        </div>
        <ul className='social-icons'>
        {social.map((socialIcon) => {
             const {id, url, icon} = socialIcon
             return(
               <li key={id}>
                 <a href={url}> {icon}</a>
               </li>
             )
           })}
        </ul>
      </div>
    </nav>

  )
}

export default Navbar
