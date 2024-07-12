import React from 'react'
import './sidebar.css'
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">

    <div className="sidebar-info">

      <div className="avatar-box">
        <img src='./images/profile-image.png' />
      </div>

      <div className="info-content">
        <h1 className="name" title="Richard hanrick">KHUSHI PATWARI</h1>

        <p className="title">Web developer</p>
      </div>
    </div>

    <div className="sidebar-info_more" >

      <div className="separator"></div>

      <ul className="contacts-list">

        <li className="contact-item">

          <div className="icon-box">
          <CiMail className='icon-icon' />
          </div>

          <div className="contact-info">
            <p className="contact-title">Email</p>

            <a href="mailto:khushipatwari9@gmail.com" className="contact-link">khushipatwari9@gmail.com</a>
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
            <IoIosPhonePortrait   className='icon-icon'/>
          </div>

          <div className="contact-info">
            <p className="contact-title">Phone</p>

            {/* <a href="tel:+12133522795" className="contact-link">+91 </a> */}
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
          <SlCalender  className='icon-icon' />
          </div>

          <div className="contact-info">
            <p className="contact-title">Birthday</p>

            <time datetime="2003-02-11"  className="contact-link">Feb 11, 2003</time>
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
          <CiLocationOn  className='icon-icon' />
          </div>

          <div className="contact-info">
            <p className="contact-title">Location</p>

            <p  className="contact-link">Kolkata, West Bengal, India</p>
          </div>

        </li>

      </ul>

      <div className="separator"></div>

      <ul className="social-list">


        <li className="social-item">
          <a href="https://github.com/khushipatwari" className="social-link">
          <FaGithub  className='icon-icon'/>
          </a>
        </li>

        <li className="social-item">
          <a href="https://www.linkedin.com/in/khushi-patwari-66ab17244/" className="social-link">
          <FaLinkedinIn className='icon-icon' />
          </a>
        </li>

      </ul>

    </div>

  </aside>

  )
}

export default Sidebar