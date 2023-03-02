import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer d-f'>
        <div className="footer-info d-f">
            <div className="footer-author">&copy; 2022 PAM Consulting. All rights reserved</div>
            <div className="footer-disclaimer">Disclaimer</div>
            <div className="footer-privacy">Privacy policy</div>
        </div>
        <div className="footer-designed">Who designed this website?</div>
    </footer>
  )
}

export default Footer