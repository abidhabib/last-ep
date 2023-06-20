// Tap.js

import React, { useState } from 'react';
import './tab.css';
import imgx1 from '../imgs/01.png';
import imgx2 from '../imgs/02.png';
import imgx3 from '../imgs/03.png';

const Tap = () => {
  const data = [
    {
      title: "Invest With Confidence",
      description: "Leverage the industry’s top talents to create your dynamic, actively managed portfolios.",
      image: imgx1
    },
    {
      title: "Invest Without Limit",
      description: "0% management | 0% performance fees Our unique subscription model means you only pay for our services. No hidden and wealth-diminishing fees.",
      image: imgx2
    },
    {
      title: "Invest With Purpose",
      description: "Finally connect your investments with your values to make a meaningful impact and become a powerful force for change.",
      image: imgx3
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0); // Initially selecting the first item

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className='main-div-q' id='testimonials'>
      <div className="left-side-tab-div">
        {data.map((item, index) => {
          return (
            <div key={index} className='side-line'>
              <div
                className={`card ${selectedIndex === index ? 'selected' : ''}`}
                key={index}
                onClick={() => handleItemClick(index)}
              >
                <div className='side-bar-ab'>

                </div>
                <div className='card-content'>
                  <div className="left_card_content">0{index + 1} </div>
                  <div className="right_card_content">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-description">{item.description}</p></div>
                </div>
              </div>
              {selectedIndex === index && (
                <div className="selected-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {selectedIndex !== null && (
        <div className="right-side-tab-div">
          <img src={data[selectedIndex].image} alt={data[selectedIndex].title} />
        </div>
      )}
    </div>
  );
};

export default Tap;
