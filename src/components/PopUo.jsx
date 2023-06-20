import React from 'react'
import './Popup.css'
const PopUo = () => {
    return (
        <>

        
                    <div className="Appx">
                    <h1 className='modal_title'>Sign Up
                    </h1>
                        <div className="input-container">
                            <label>Email </label>
                            <input type="text" placeholder='Enter your email' name="uname" required />
                            {/* {renderErrorMessage("uname")} */}
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" placeholder='Enter your email' name="pass" required />
                            {/* {renderErrorMessage("pass")} */}
                        </div>


                        <button className="loginBut">
                            <p>Sign Up</p>
                        </button>
                        <div className="or-div">

                            <hr className='hr-tag' />
                            or <hr className='hr-tag' />
                        </div>
                        <div class="google-btn">
                            <div className="google-icon-wrapper">
                                <img style={{width: "30px", height: "30px"}} className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                            </div>
                            <p className="btn-text"><p>Sign Up with Google</p></p>
                        </div>    <div class="google-btn">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://one-up.io/wp-content/themes/one.up/assets/images/LinkedIn.svg" />
                            </div>
                            <p className="btn-text"><p>Sign Up with Linkedin</p></p>
                        </div>    <div class="google-btn">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://one-up.io/wp-content/themes/one.up/assets/images/Apple.svg" />
                            </div>
                            <p className="btn-text"><p>Sign Up with Apple</p></p>
                        </div>   
                           </div>
             
        </>)
}

export default PopUo