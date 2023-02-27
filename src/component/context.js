// import { EmailAuthCredential } from "firebase/auth";
import React, { useState, useContext, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./FirebaseConfig";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore,  } from "firebase/firestore"; 



const AppContext = React.createContext();

const AppProvider = ({ children }) => {
 
  const auth = getAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isThankyouModalOpen, setIsThankyouModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  

   //  Step Form Logic
   
   const [activeStep, setActiveStep] = useState(0);

   const getSteps = () => {
     return ["Cleaning Type", "Residential Type", "Room Type"];
   };
   const steps = getSteps();
   

   const [stepFormValues, setStepFormValues] = useState({
   
   });
   
   // Navigating back and forward
 
   const handleNextStep = () => {
     setActiveStep((nextStep) => nextStep + 1);
   };
   const handlePrevStep = () => {
     setActiveStep((prevStep) => prevStep - 1);
   };
 
   // handling stepform values state change

   const handleStepFormChange = (name)=> (e) => {
    const name = e.target.name;
    // const value = e.target.value;
    setStepFormValues({ ...stepFormValues, [name]: name });
  console.log(name)
     
   };
   // Database Store Booking Confirm Logic
  const db = getFirestore();
  const colref = collection(db, 'booking')
  async function confirmStore(db){
    try {
      const docRef = await addDoc(colref, {
        Booking:{ ...stepFormValues} 
        
      });
      
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
     
   }
   
   //  Modal Logic
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openRegModal = () => {
    setIsRegModalOpen(true);
  };

  const closeRegModal = () => {
    setIsRegModalOpen(false);
  };

  const openThankyouModal = () => {
    setIsThankyouModalOpen(true);
  };

  const closeThankyouModal = () => {
    setIsThankyouModalOpen(false);
  };




  // Registration Logic

  const userRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        if (response) {
          const user = response.user;
          console.log(user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code, error.message);
        console.log(errorCode, errorMessage);
      });
  }

  // Users_Login Logic

  const userLogin = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      if (response) {
        const user = response.user;
        console.log(user);
        
       
       
      }
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.code, error.message);
      console.log(errorCode, errorMessage);
    });
  }

  // Users SignOut Logic

  const signOutUser = (email) => {
     return signOut(auth).then(() => {
      console.log(email,'Sign-out successful.')
    }).catch((error) => {
      console.log('what happened')
    });
   
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user){
        setCurrentUser(user)
        setIsLoading(false)
      }else {
        setCurrentUser(false)
        setIsLoading(false)
      }
     
     
  })
   return () => {
    unsubscribe()
    console.log('cleanup')
   }
  },[])

  
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isRegModalOpen,
        openRegModal,
        closeRegModal,
        userRegistration,
        userLogin,
        signOutUser,
        currentUser,
        isThankyouModalOpen,
        openThankyouModal,
        closeThankyouModal,
        handleStepFormChange,
        activeStep,
        stepFormValues,
        handleNextStep,
        handlePrevStep,
        steps,
        confirmStore
       
        

      }}
    >
      
      {" "}
      {!isLoading && children}{" "}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
