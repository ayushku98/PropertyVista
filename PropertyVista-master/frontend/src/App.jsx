
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Exploreproperties from "../components/seeproperties/Exploreproperties";
import Properties from "../pages/Properties/Properties";
import Projectgalery from "../pages/Projectsgallery/Projectgalery";



const App = () => {
  return (
    <>
      {/* Navigation Bar */}
       <Navbar /> 

      
      <Routes>
       
        <Route path="/" element={<HomePage />} />

       
       <Route path="/login" element={<HomePage/>} />
        <Route path="/Logout" element={<HomePage/>} />
        <Route path="/profile" element={<HomePage/>}/>
        <Route path ="/exploreproperties" element={<Exploreproperties/>}/>
        <Route path="/properties" element = {<Properties/>} />
         <Route path="/projectsGallery" element = {<Projectgalery/>} />
      </Routes>

     
      <Footer /> 
    </>
  );
};

export default App;

