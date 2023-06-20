import React, { useState } from 'react'
import img1 from '../imgs/shape1.png'
import img2 from '../imgs/shape3.png'
import bg1 from '../imgs/bg.jpeg'
import './lastdark.css';
import { Button, Modal } from 'antd';
import PopUo from "./PopUo";

const Lastdark = () => {
// hell

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

    return (

        <>

            <div className="dark-container">
                <img className='img-1' src={img1} alt="" />
                <img className='img-2' src={img2} alt="" />
                <div className="spacer"
                    style={{
                        height: '50px'
                    }}
                ></div>
                <div className="inner-dark">
                    <h1>Shape a Brighter Future with <br />
                        OneUP's Platform</h1>


                    <div className="inner-info">
                        <div className="info-sec">
                            <div className="info">
                                <img src="https://one-up.io/wp-content/uploads/2023/05/icon2.png" alt="" />
                                <div className="text" style={{
                                    color: 'white',

                                }}>
                                    Enjoy actively managed strategies powered by the insights of the brightest minds in the industry.        </div>
                            </div>

                        </div>
                        <div className="info-sec">
                            <div className="info">
                                <img src="https://one-up.io/wp-content/uploads/2023/05/icon2.png" alt="" />
                                <div className="text" style={{
                                    color: 'white',

                                }}>
                                    Stay in full control with our innovative institutional grade portfolio management system.        </div>
                            </div>

                        </div><div className="info-sec">
                            <div className="info">
                                <img src="https://one-up.io/wp-content/uploads/2023/05/icon2.png" alt="" />
                                <div className="text" style={{
                                    color: 'white',

                                }}>
                                    Create and personalise any strategy in 5 simple steps to fit your aspirations.       </div>


                            </div>
                        </div>

                    </div>

                    <div className="spacer"
                        style={{
                            height: '30px'
                        }}
                    ></div>

                    <div className="spacer"
                        style={{
                            height: '50px'
                        }}
                    ></div>
                </div>

            </div>

            <div className="last-container">

                <div className="last-info">
                    <h1>
                        OneUP - The Future of <br />
                        Investing is in Your Hands
                    </h1>
                    <p>
                        Our mission is to create a more <span style={{
                            background: '#fed69a',
                            fontWeight: "600",
                            fontFamily: "sans-serif"
                        }}>
                            inclusive
                        </span>, <span

                            style={{
                                background: '#fed69a',
                                fontWeight: "600",
                                fontFamily: "sans-serif"
                            }}
                        > accessible
                        </span> , and transparent world <br />
                        of investing for all. We believe in the power of AI and the potential it holds to <br />
                        transform the way we invest, allowing everyone to create a better future for <br />
                        themselves and society.
                    </p>
                    <div className="txt-al">
                        <strong className='span-wali'>

                            <span

                                style={{
                                    background: '#fed69a',
                                    textAlign: 'center'
                                }}
                            >
                                Join the OneUP community today and redefine your investment journey

                            </span>

                        </strong>
                        <Button className="btn-y"
                                onClick={showModal}
                        >
                        
                
                            Get Free Demo
                        </Button>
                    </div>

                </div>
              
            </div>
            <img className='last_dark_image' src={bg1} alt="" srcset="" />
            <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <PopUo/>
      </Modal>                   
        </>

    )
}

export default Lastdark