import React, { useState } from 'react'
import "./home.css"
import { Button, Modal } from 'antd';
import PopUo from "./PopUo";

const Home = () => {



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

            <div className="home_container">

                <video className='video' autoPlay muted loop>
                    <source src='https://one-up.io/wp-content/uploads/2023/06/My-Movie-3.mp4' />

                </video>
                <div className="home">
                    <div className="home_content">

                        <h1>
                            Investing 2.0: Everyone's a Pro.

                        </h1>
                        <p>
                            Become a professional investor with our cutting-edge AI and the collective intelligence <br /> of the world’s premier investment houses.
                        </p>
                        <button className="btn-h" onClick={showModal}>Get Dree Demo</button>

                    </div>

                </div>
                <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <PopUo/>
      </Modal>
            </div>



        </>
    )
}

export default Home