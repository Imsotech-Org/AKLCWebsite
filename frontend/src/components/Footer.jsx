import React from 'react';
import {Link} from 'react-router-dom';
import {FaInstagram, FaLinkedin, FaTwitterSquare, FaTiktok} from 'react-icons/fa';
import logo2 from '../assets/media/logo2.svg';

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur qui nobis, at veniam atque quaerat sapiente, harum facere odit voluptate delectus in dolorum obcaecati nemo assumenda pariatur soluta nihil nesciunt et. Vero exercitationem voluptate ratione fugit nostrum, voluptatum corporis aliquid saepe! Ipsum illum consequuntur modi eveniet voluptates! Nobis, molestiae.</p>
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