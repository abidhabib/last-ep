import React from 'react'
import image from "../imgs/whitelogo.png"
import "./footer.css"
const Footer = () => {
  return (
<>

<div className="footer_container">
    <div className="footer_left">
        <img className='footer_left_img' src={image} alt="logo" />
    </div>
    <div className="footer_right">
    <div className="footer_right_title">Contact</div>
    <div className="footer_right_list">
        <div className="footer_right_list_item">Kensys Ltd / OneUp</div>
        <div className="footer_right_list_item">4 Old Park Lane, 
London, W1K1QW  </div>
        <div className="footer_rightn_list_item">info@one-up.io

</div>
    </div>
    </div>
</div>


</>  )
}

export default Footer