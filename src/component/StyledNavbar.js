import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

import { useState, useEffect} from "react";

const StyledNavbar = () => {
  const { signOutUser, currentUser} = useGlobalContext()
  const [isVisible, setisVisible] = useState(true)

  
 
  useEffect(() => {
   const timer = setTimeout(() => {
      setisVisible(!isVisible)
    }, 3000);
    return () => clearTimeout(timer)
  }, [currentUser])
   


 
  return (
    <>
    <nav className="navlink-bigbag">
      <div className="navlink-bag">
        <NavLink
          to="homepage"
          style={({ isActive }) => {
            return { color: isActive ? "Green" : "gray" };
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="aboutus"
          style={({ isActive }) => {
            return { color: isActive ? "Green" : "gray" };
          }}
        >
          AboutUs
        </NavLink>
        <NavLink
          to="booking"
          style={({ isActive }) => {
            return { color: isActive ? "Green" : "gray" };
          }}
        >
          Booking
        </NavLink>
        <NavLink
          to="contactus"
          style={({ isActive }) => {
            return { color: isActive ? "Green" : "gray" };
          }}
        >
          ContactUs
        </NavLink>

       
          <NavLink
            to='login'
            style={({ isActive }) => {
              return { color: isActive ? "Green" : "gray" };
            }}
          >
          {currentUser ?
          (<button className='logout' onClick={()=>signOutUser()}>Logout  </button>) : 
          (<button className='logout' onClick={()=>signOutUser()}>Login </button> )
           }
          
           
          </NavLink>
       
       
      </div>
  
      
        { isVisible && <div className="userinfo"> 
        {currentUser ? 
        (<p>Welcome &nbsp; {currentUser.email} </p>)
        : 
       
        ( <p>Goodbye</p>)
        }
        </div>}
    </nav>
    
    </>
  );
};

export default StyledNavbar;
