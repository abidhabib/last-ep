import React from 'react';
import './join.css';
import profile from "../imgs/profile.png"
import quotea from "../imgs/quote-left.png"
import quoteb from "../imgs/quote-right.png"
import img1 from '../imgs/shape1.png'
import img2 from '../imgs/shape3.png'
import {AiFillLinkedin} from "react-icons/ai"

const Join = () => {
  return (
    <>
      <div className='main-div'>
        <h1 className='main-title'>Join the Ranks of <br/>
Tech-Savvy Investors</h1>
        
        <div className='testimonial'>
        <div className='testimonial-inner'>
          <div className='testimonial-image'>
            <img src={profile} alt="" />
          </div>
          <div className='testimonial-content'>
          <div className='testimonial-image2'>
            <img src={profile} alt="" />
          </div>
            <div className='testimonial-header'>
            
              <h2 className='testimonial-name'>Alexander Rodriguez</h2>
              
                <AiFillLinkedin className='testimonial-link'/>
              
            </div>
            <p className='testimonial-work'>Business Analyst</p>
            <p className='testimonial-date'>February 15, 2023</p>
            <p className='testimonial-description'>This platform is not just enhancing investment skills; it's revolutionizing them. By combining cutting-edge AI and wisdom from top investment houses, it blurs 
            the line between regular users and professional investors.</p>
          </div>
          </div>
          <div className='top-left-image'><img src={quotea} alt="" /></div>
          <div className='bottom-right-image'> <img src={quoteb} alt="" /></div>

        </div>

      </div>

    </>
  );
};

export default Join;
