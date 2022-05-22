import React from 'react'
import NavbarCom from '../navbarfiles/NavbarCom'
import "../homefiles/home.css"
import Button from '../utilities/Button'
import Footer from '../footerfiles/Footer'

const Home = () => {
  return (
    <div className="container-fluid" style={{backgroundColor: '#1D003F', minHeight: '100vh'}}>
        <div style={{position: 'relative'}}>
        <NavbarCom />
        <div className="text-center mt-5 headText">
        <h1>Something awesome is <br/>coming soon</h1>
        <p className='desc'>You are-in-one affiliate marketing track software <span>track</span>, <span>automate</span>  and <br /> <span>optimize</span> your campaign</p>

        <div className="container timer-wrapper">
        <div className='timer-container text-center'>
            <div className='days timer'>
                <h3>7</h3>
                <p>Days</p>
            </div>
            <div className='hours timer'>
                <h3>24</h3>
                <p>hours</p>
            </div>
            <div className='min timer'>
                <h3>54</h3>
                <p>Minutes</p>
            </div>
            <div className='sec timer'>
                <h3>11</h3>
                <p>Seconds</p>
            </div>
        </div>
        </div>
        <form className='form text-center'>
            <div className='form-input'>
            <input type="text" placeholder='first name' className='cot1'/>
            <input type="text" placeholder='last name' className='cot2'/>
            </div>
        </form>

        <div className="form-bt">
                <input type="email" placeholder="email" />
                <Button className="btn move-btn" title="Join our waiting list" />
            </div>
        </div>
        <div className='copyright-container'>
             <Footer />
        </div>
    </div>
    </div>
  )
}

export default Home