import React from 'react'
import './features.css'
import icon1 from '../imgs/icon1.png'
import icon2 from '../imgs/icon2.png'
import icon3 from '../imgs/icon3.png'
import icon4 from '../imgs/icon4.png'
import icon5 from '../imgs/icon5.png'
import icon6 from '../imgs/icon6.png'
import icon7 from '../imgs/icon7.png'
import icon8 from '../imgs/icon8.png'
import Tap from './Tap'
const Features = () => {
    return (
        <>
            <h1 className='features-heading' id='features'>
                Sustainable Investing on Demand

            </h1>
            <p className='features-text'>
                Invest your way – conscious, expertly personalised and diversified.


            </p>

            <div className="cards-container">
                <div className="inner-cards">
                    <span style={{
                        backgroundColor: '#fed699', fontSize: '18px',
                        padding: '2px 20px', fontWeight: '500'
                    }}>
                        Footprint
                    </span>
                    <div className="cards-list">
                        <div className="single-card">
                            <img src={icon1} alt="" />
                            <p className='p-text'>Low Carbon</p>
                            <p className='eg'>e.g. Apple</p>
                        </div>


                        <div className="single-card">
                            <img src={icon2} alt="" />
                            <p className='p-text'>Catholic Values
                            </p>
                            <p className='eg'>e.g. ISRG

                            </p>
                        </div>



                        <div className="single-card">
                            <img src={icon3} alt="" />
                            <p className='p-text'>Diversity
                            </p>
                            <p className='eg'>e.g. e.g. UNH



                            </p>
                        </div>






                        <div className="single-card">
                            <img src={icon4} alt="" />
                            <p className='p-text'>Gender Equality

                            </p>
                            <p className='eg'>e.g. PG

                            </p>
                        </div>
                    </div>


                </div>
                <div className="inner-cards">
                    <span style={{
                        backgroundColor: '#fed699', fontSize: '18px',
                        padding: '2px 20px', fontWeight: '500'
                    }}>
                        Exclusions

                    </span>
                    <div className="cards-list">
                        <div className="single-card">
                            <img src={icon5} alt="" />
                            <p className='p-text'>No Animal Testing
                            </p>
                        </div>




                        <div className="single-card">
                            <img src={icon6} alt="" />
                            <p className='p-text'>No Nuclear




                            </p>
                        </div>



                        <div className="single-card">
                            <img src={icon7} alt="" />
                            <p className='p-text'>No Fossil Fuel

                            </p>

                        </div>






                        <div className="single-card">
                            <img src={icon8} alt="" />
                            <p className='p-text'>No Weapons


                            </p>

                        </div>
                   
                    </div>

                    <div className="new-container">
<h1 className='new-heading'>
Experience the OneUp Edge

</h1>

<Tap/>
                        </div>



                </div>

            </div>



        </>)
}

export default Features