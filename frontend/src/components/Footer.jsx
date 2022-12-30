import React from 'react';
import {Link} from 'react-router-dom';
import {FaInstagram, FaLinkedin, FaTwitterSquare, FaTiktok} from 'react-icons/fa';
import logo2 from '../assets/icons-logos/logo-sml-second.png';

const Footer = () => {
  return (
    <div className='footerContainer'>

      <div className='footerNavLinks'>
        <div className='footerLinkInfo'>
          <h5>Shop</h5>
          <Link className='footerLink'>67 Transformational Program</Link><br />
          <Link className='footerLink'>Annual One-On-One Training and Support</Link><br />
          <Link className='footerLink'>6The Foundations for Health, Fitness and Longevity</Link><br />
          <Link className='footerLink'>Membership Program</Link>
        </div>
        <div className='footerLinkInfo'>
          <h5>Learn More</h5>
          <Link className='footerLink'>Reviews</Link><br />
          <Link className='footerLink'>Benefits of AKLC</Link>
        </div>
        <div className='footerLinkInfo'>
          <h5>About</h5>
          <Link className='footerLink'>About us</Link><br />
          <Link className='footerLink'>Blog</Link><br />
          <Link className='footerLink'>Podcast</Link><br />
          <Link className='footerLink'>Refer Friend</Link>
        </div>
        <div className='footerLinkInfo'>
          <h5>Contact</h5>
          <Link className='footerLink'>Help</Link><br />
          <Link className='footerLink'>Send Message</Link>
        </div>
        <div className='footerLinkInfo'>
          <h5>Social</h5>
          <Link className='footerLink'>Join our newsletter</Link>
          <div>
            <FaInstagram/>
            <FaLinkedin/>
            <FaTwitterSquare/>
            <FaTiktok/>
          </div>
        </div>
      </div>

      <hr />

      <div className='footerMoreInfo'>
        <img src={logo2} alt="" />
        <div className='footerMoreInfoRight'>
          <p>This website is for informational purposes only. It does not constitute the practice of medicine, nursing or other professional health care services, including the giving of medical advice. No doctor/patient relationship is formed. The use of the information contained within this website and any video, text, graphics, images and/or other materials linked to this website is at the users own risk. The content of this website is not intended to be a substitute for professional medical advice, diagnosis and/or treatment. Consult with your doctor before taking any medications, vitamins, herbs and/or supplements of any kind. Users should not disregard or delay in obtaining medical advice for any medical condition they have and they should seek the assistance of their qualified health care professionals for any such conditions.</p>
          <div className='footerMoreInfoRightLinks'>
            <Link className='footerLink'>Privacy</Link>
            <Link className='footerLink'>Do Not Sell My Personal Info</Link>
            <Link className='footerLink'>Terms &amp; Conditions</Link>
            <Link className='footerLink'>© Andrew Kolasko Life Center</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer