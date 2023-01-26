import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {FaInstagram, FaLinkedin, FaTwitterSquare, FaFacebookSquare} from 'react-icons/fa';
import logo2 from '../assets/icons-logos/logo-sml-second.png';

const Footer = () => {

  const {programs} = useSelector((state) => state.programs);

  return (
    <div className='footerContainer'>

      <div className='footerNavLinks'>
        <div className='footerLinkInfo'>
          <h5 id='shop'>Shop</h5>
          {
            programs.map((item, index) => {
              return (<div><Link to={`/programs?program=${item._id}`} className='footerLink'>{item.title}</Link><br/></div>)
            })
          }
        </div>
        <div className='footerLinkInfo'>
          <h5>Learn More</h5>
          <Link to='/' className='footerLink'>Reviews</Link><br />
          <Link to='/' className='footerLink'>Benefits of AKLC</Link>
        </div>
        <div className='footerLinkInfo'>
          <h5>About</h5>
          <Link to='/about' className='footerLink'>About us</Link><br />
          <Link to='/blog' className='footerLink'>Blog</Link><br />
          <Link to='/podcast' className='footerLink'>Podcast</Link><br />
        </div>
        <div className='footerLinkInfo'>
          <h5>Contact</h5>
          <Link to='/?contact=contactInfo' className='footerLink'>Help</Link><br />
          <Link to='/?contact=contactInfo' className='footerLink'>Send Message</Link>
        </div>
        <div className='footerLinkInfo'>
          <h5>Social</h5>
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <a style={{width: '2rem', height: '2rem', color: '#F3F1F3'}} href="https://www.instagram.com/andrewkolaskolifecenter/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{width: '2rem', height: '2rem', color: '#F3F1F3'}}/></a>
            <a style={{width: '2rem', height: '2rem', color: '#F3F1F3'}} href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEJQmTcywuD-wAAAYXu0BdIm07FiOLET5cdd8Vbtyze5ENrtuVTH8_KDw1nRahgI68aLnhT955z1dx1wwPn_wP2wkXvZ7w6vTzfUjfiVoVVW5abBo03HiB-o-H1z8R0G3y69TE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fandrew-kolasko-30054429%2F" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{width: '2rem', height: '2rem', color: '#F3F1F3'}}/></a>
            <a style={{width: '2rem', height: '2rem', color: '#F3F1F3'}} href="https://twitter.com/AKolasko/" target="_blank" rel="noopener noreferrer"><FaTwitterSquare style={{width: '2rem', height: '2rem', color: '#F3F1F3'}}/></a>
            <a style={{width: '2rem', height: '2rem', color: '#F3F1F3'}} href="https://www.facebook.com/people/Andrew-Kolasko-Life-Center/100088826560587/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare style={{width: '2rem', height: '2rem', color: '#F3F1F3'}}/></a>
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
            <Link className='footerLink'>© 2023 Andrew Kolasko Life Center Ltd.</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer