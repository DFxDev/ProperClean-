import React from 'react'
import {  Navigate } from 'react-router-dom'
import { useGlobalContext } from './context'


 
 const ProtectedRoute = ({ children }) => {
    let { currentUser } = useGlobalContext();
    
    if(!currentUser){
      return <Navigate to='/homePage' replace />
    }
     
     return children;
      
    
  
    
  
}
export default ProtectedRoute;
