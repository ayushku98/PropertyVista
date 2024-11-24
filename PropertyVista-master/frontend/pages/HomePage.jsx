import React from 'react'
import Homepage from "../components/Homepage.jsx";
import Propertycard from "../components/Propertycard.jsx"
import SliderComponent from "../components/SliderComponent.jsx"
import Userreview from "../components/Userreview.jsx"
import Contactagents from "../components/Contactagents.jsx"
import Propertyservice from "../components/Propertyservice.jsx";
import Sale from "../components/Sale.jsx";


const HomePage = () => {
  return (
    <div>
   
      <Homepage/>
        <Propertycard/> 
        <SliderComponent/> 
        <Propertyservice/>
        <Contactagents/>
        <Userreview/>
        <Sale/>
    </div>
  )
}

export default HomePage
