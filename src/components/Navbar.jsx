import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Button, Modal } from 'antd';

import logo from "../imgs/oneup.png";
import { GiHamburgerMenu } from "react-icons/gi";
// Ant Design Added
import { Link } from "react-scroll";
import PopUo from "./PopUo";




const Navbar = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
          <p href="/"> <img src={logo} alt="logo" /> </p> 
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li onClick={()=>setShowMediaIcons(false)}>
           
            </li>
            <li 
             onClick={()=>setShowMediaIcons(false)}>
              {/* <a className="homep" to="/services" >Home</a> */}
              <Link
              activeClass="active"
              to="home"
              className="homep"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
           Home
              {/* <a to="/insurance" className={({ isActive }) => (isActive ? "home-active" : "div")}> Why</a> */}
            </Link>
             
           
            </li>
            <li onClick={()=>setShowMediaIcons(false)}>
            <Link
              activeClass="active"
              to="why"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
           Why
              {/* <a to="/insurance" className={({ isActive }) => (isActive ? "home-active" : "div")}> Why</a> */}
            </Link>
            </li>
            <li onClick={()=>setShowMediaIcons(false)}>
              {/* <a to="/ourteam" className={({ isActive }) => (isActive ? "home-active" : "div")}>Features</a> */}
              <Link
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
           features
              {/* <a to="/insurance" className={({ isActive }) => (isActive ? "home-active" : "div")}> Why</a> */}
            </Link>
            </li>
            <li onClick={()=>setShowMediaIcons(false)}>
              {/* <a to="/contact" className={({ isActive }) => (isActive ? "home-active" : "div")}>Testimonials</a> */}
              <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
           Testimonials
              {/* <a to="/insurance" className={({ isActive }) => (isActive ? "home-active" : "div")}> Why</a> */}
            </Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
        <div className="btn" onClick={showModal} >
      Get Free Demo
    </div>     
          {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>

          
        </div>
        <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <PopUo/>
      </Modal>
      </nav>

    
  );
};

export default Navbar;