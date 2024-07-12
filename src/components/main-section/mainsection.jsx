import React, { useState } from 'react'
import './mainsection.css'
import Nav_bar from '../navbar/nav-bar'
import Aboutus from '../aboutus/aboutus'
import Resume from '../resume/resume'
import Portfolio from '../portfolio/portfolio'
import Contactus from '../contactus/contactus.jsx'


const Mainsection = () => {
  return (
    <div className='main-section'>
    {/* <Nav_bar></Nav_bar> */}
    <Aboutus></Aboutus>
    <Resume></Resume>
    <Portfolio></Portfolio>
    <Contactus></Contactus>
    </div>
  )
}

export default Mainsection