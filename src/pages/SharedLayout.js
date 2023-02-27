import React from "react";
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Navbar from "../component/Navbar";
import LoginModal from "../component/LoginModal";
import RegisterModal from "../component/RegisterModal";
import Login from "./Login";


const HomePage = () => {
  return (
    <>
    <RegisterModal />
    <LoginModal />
    <Navbar />
    <Outlet/>
    <Login />
    <Footer />
   
    </>
  );
};

export default HomePage;
