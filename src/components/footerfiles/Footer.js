import React from 'react'
import "../footerfiles/footer.css"
import { AiOutlineYoutube, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="icons-container">
            <AiOutlineYoutube className='icons'/>
            <AiFillFacebook className='icons'/>
            <AiOutlineInstagram className='icons'/>
            <AiOutlineInstagram className='icons'/>
            <AiOutlineInstagram className='icons'/>
        </div>

        <div className='d-flex service'>
            <p>Terms of service</p>
            <p>Privacy policy</p>
        </div>
        <div className="copyright">
            <p>Copyright {new Date().getFullYear()} @ Peddle technologies. All right reserved</p>
        {/* </div> */}
        </div>
    </div>
  )
}

export default Footer