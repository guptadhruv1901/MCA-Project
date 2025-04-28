import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="logoShow">WANDER <span>Whiz</span></div>
      <div className="footer-section">
        <div className='first'><p>This is a paragraph where you can include any information you’d like. It’s an opportunity to tell a story about the company, describe a special service it offers, or highlight a particular feature that sets it apart from competitors.</p></div>
        <div className='second'>
          <h4>Location</h4>
          <p>500 Terry Francois Street,
          San Francisco, CA 94158</p>
        </div>
        <div className='third'>
        <h4>Contact</h4>
          <p>500 Terry Francois Street</p>
        </div>
        <div className='fourth'>
        <h4>Follow</h4>
        <p>
            <a>I</a>
            <a>F</a>
            <a>X</a>
            <a>L</a>
        </p>
        </div>
      </div>

      <p className='www'>© 2025 by WanderWhiz</p>
    </div>
    </>
  )
}

export default Footer