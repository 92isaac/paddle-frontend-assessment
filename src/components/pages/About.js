import React from 'react'
import NavbarCom from '../navbarfiles/NavbarCom'
import "../aboutfiles/about.css"

const About = () => {
  return (
    <div>
    <div className="container-fluid" style={{backgroundColor: '#1D003F', minHeight: '100vh'}}>
    <NavbarCom />
    <div className="big-container">
        <div className="small-div">
          come Home
        </div>
        <div className="transparent-div">

        </div>
        <div className="text-div">
            <div className="built">
              <h2>Built for SaaS <br/> and E-commerce</h2>
            </div>
            <div className="tools">
              <p>Our tools are easy to setup and use with a user friendly dashboard that enables you to setup, launch, automate and manage multi-affiliate campaigns in 5 minutes</p>
            </div>
        </div>
    </div>


    </div>
    <div className="metricks-container">
      <div className="metricks">
        <h2>Metricks was developed because just like you, we need a product that could give us <span>good value</span>.</h2>
      </div>

      <div>
        <div>
          <h3>Why us</h3>
          <p>We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advitizers and affiliate.</p>
        </div>

        <div>
          <h3>Growing with you</h3>
          <p>Leveraging the best technology, we have developed and all-in-one affliate marketing tracking software, a genius tools to help you track automate and optimize your influencer campaingn, all from one dashboard.</p>

          <p>Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind-your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About