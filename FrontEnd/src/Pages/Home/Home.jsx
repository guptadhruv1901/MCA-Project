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
            <video src={assets.mapVideo} autoPlay loop muted></video>
            </div>              
            <div className="content">Our platform combines AI, live weather, maps, and real-time local insights to help you craft the perfect trip. Whether you're a solo traveler, a family planner, or an adventure junkie — we’ve got your back, one itinerary at a time.</div>
          </div>
        </div>
        <div className="lower-part">
          <div className="title">"PLAN SMARTER, TRAVEL BETTER"</div>
        </div>
      </div>

      <div className="section3">
        <div className="left-content">
        <div className="heading">
          <h1>SERVICES</h1>
        </div>
        <div className="service-content">
        Your dream trip deserves more than just guesswork. With our AI-powered travel planner, we transform your ideas into perfectly crafted journeys. From selecting the best destinations to providing real-time weather updates and personalized activity suggestions, we make travel planning smarter, faster, and truly effortless. Explore our services below and start building unforgettable adventures today
        </div>
        <img className="weather-img"src={assets.weatherPoster} alt="alt" />
        <h1 className='info'>Real-Time Weather Insights Integration</h1>
        </div>
        <div className="right-content">
          <div className="img-first">
            <img src={assets.aiPoster} alt="alt" />
          </div>
          <h1 className='firstd'>AI-Generated Travel Itineraries (GPT-4 Integration)</h1>
          <div className="img-second">
          <img src={assets.mapView} alt="alt" />

          </div>
          <h1 className='secondd'>Location-Based Insights with Google Maps</h1>

        </div>
      </div>
      <div className="section4">
        <div className='we-img'><img src={assets.weather} alt =""/></div>
        <h1 className='h'>Dream  Plan  Discover</h1>
        <h1 className='center'>Where Every Trip Becomes an Experience.</h1>
        <div className='weimg'><img src={assets.navigation} alt =""/></div>
      </div>
      <Footer />
    </>
  )
}

export default Home