import React from 'react'
import './why.css'
import img1 from '../imgs/shape1.png'
import img2 from '../imgs/shape3.png'
import img3 from '../imgs/PortfolioLP2.jpg'
import img4 from '../imgs/journey.png'
import { RxDotFilled } from 'react-icons/rx'
import { Button, Row, Col } from 'antd';
// import Column from 'antd/es/table/Column'

const Why = () => {
    return (
        <>


            <div className="why_container" id='why'>
                <img className='img-1' src={img1} alt="" />
                <img className='img-2' src={img2} alt="" />


                <div className="why_content">
                    <h1 className="why_content_heading" >
                        The Best of Wall Street, <br className='br-t' />
                        Now Working for You
                    </h1>
                    <p>
                        Investing is a full-time job, best left in the hands of experts. But we believe in your power to be that expert. We want you to be in control of your money, because it should primarily benefit you. So we bring together the collective knowledge of premier investment institutions and the  boundless potential of AI right at your fingertips for a <span

                            style={{ backgroundColor: '#fed69a', fontWeight: 'bold' }}
                        >seamless</span>, <span style={{ backgroundColor: '#fed69a', fontWeight: 'bold' }}>
                            tailor-made investment</span> <br /> <span style={{ backgroundColor: '#fed69a', fontWeight: 'bold' }}>experience.</span>


                    </p>
                    <p style={
                        {
                            marginTop: '16px'
                        }
                    }>Your Money, Your Future – Made Easier, Better, Smarter

                    </p>

                    <div className="img-container">
                        <img decoding="async" width="775" height="570" src={img3} alt="" loading="lazy" srcset="https://one-up.io/wp-content/uploads/2023/05/PortfolioLP-2.jpg 775w, https://one-up.io/wp-content/uploads/2023/05/PortfolioLP-2-300x221.jpg 300w, https://one-up.io/wp-content/uploads/2023/05/PortfolioLP-2-768x565.jpg 768w" sizes="(max-width: 775px) 100vw, 775px" />
                    </div>



                </div>
            </div>

            <div className="container-2">


                <div className="why-left">
                    <h1>
                        Drive your Investment <br /> Journey
                    </h1>
                    <div className="dots-container">
                        <div className='inner'>
                            <p className='dots'><RxDotFilled /></p>
                            <p className='pera'>
                                OneUP offers complete transparency and control, with  your capital managed directly on your account.</p>
                        </div>
                        <div className='inner'>
                            <p className='dots'><RxDotFilled /></p>
                            <p className='pera'>
                                Start and stop at your convenience, without any commitments, fees, or minimum capital requirements.</p>
                        </div>    <div className='inner'>
                            <p className='dots'><RxDotFilled /></p>
                            <p className='pera'>
                                Plus, you retain your voting rights, ensuring full control over your investments.</p>
                        </div>
                    </div>
                </div>
                <div className="why-right">

                    <div className="card">
                        <img
                            decoding="async"
                            width="709" height="501"
                             src="https://one-up.io/wp-content/uploads/2023/05/journey.png"
                              class="attachment-large tilted size-large wp-image-93" alt="" 
                              loading="lazy" srcset="https://one-up.io/wp-content/uploads/2023/05/journey.png 709w, https://one-up.io/wp-content/uploads/2023/05/journey-300x212.png 300w"
                               sizes="(max-width: 709px) 100vw, 709px" />
                        <div className="spacer">

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Why