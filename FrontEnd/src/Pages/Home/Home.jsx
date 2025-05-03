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
      <div className="section2">
        <div className="upper-part">
          <h1>ABOUT</h1>
          <div className='upper-content'>
            <div>
            <video src={assets.calmWaves} autoPlay loop muted></video>
            </div>              
            <div className="content">Our platform combines AI, live weather, maps, and real-time local insights to help you craft the perfect trip. Whether you're a solo traveler, a family planner, or an adventure junkie — we’ve got your back, one itinerary at a time.</div>
          </div>
        </div>
        <div className="lower-part">
          <div className="title">"PLAN SMARTER, TRAVEL BETTER"</div>
        </div>
      </div>

      <div className="section5">
        <span><img src={assets.Weaather} alt =""/></span>
        <h1 className='h'>Dream  Plan  Discover</h1>
        <h1 className='center'>Where Every Trip Becomes an Experience.</h1>
        <span><img src={assets.map} alt =""/></span>
      </div>
      <Footer />
    </>
  )
}

export default Home