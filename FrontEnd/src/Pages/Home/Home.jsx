import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { assets } from '../../assets/assets'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="section1">
        <div className="col-left">
          <div className="vert-stack">
            <h2>WANDER<br /><span>Whiz</span></h2>
            <p>PLAN YOUR PERFECT GETAWAY WITH AI-POWERED INSIGHTS, REAL-TIME WEATHER, AND PERSONALIZED ADVENTURES.</p>
            <button>Plan Your Trip</button>
          </div>
        </div>
        <div className="col-right">
          <img src={assets.whiteTree} alt="" />
          <video src={assets.calmWaves} autoPlay loop muted></video>
          <div className="empty"></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home