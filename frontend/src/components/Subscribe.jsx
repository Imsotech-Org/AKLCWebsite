import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaArrowDown } from 'react-icons/fa';
import thumbnail from '../assets/media/thumbnail.jpeg';

const Subscribe = ({ color, showTop = false }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    const subject = 'E-Book Request: ' + email;
    const body = 'Hi Andrew,\n\nMy name is ' + name + ', I would like to request a copy of your 5 Fundamentals of Longevity E-Book.';

    // Open default email client with email pre-filled
    window.open('mailto:andy@kolasko.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body));

    // Reset form fields
    document.querySelector('#contact-form').reset();
  };

  return (
    <div className='subscribeContainer' style={{backgroundColor: color ? color : '#502c49'}}>
      {showTop && <div className="marketingContainer">
        <img src={thumbnail} style={{width: '22rem', borderRadius: '15px'}} alt="" />
        <h3 style={{fontSize: '3rem', padding: '0.5rem', marginTop: '0.8rem'}}>Special Offer!</h3>
        <h4 style={{fontSize: '2rem', padding: '0.5rem', color: '#502c49'}}>FREE E-Book</h4>
        <h4 style={{fontSize: '2rem', padding: '0.5rem', color: '#502c49'}}>5 Fundamentals of Longevity</h4>
        <h3 style={{fontSize: '2rem', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Sign up to download now! <FaArrowDown style={{marginLeft: '0.5rem',color: '#502c49', width: '4rem', height: '4rem'}}/></h3>
      </div>}

      <h2>Sign up for your FREE E-Book</h2>
      <form id="contact-form" style={{width: '100%'}} onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input style={{width: '42.5rem'}} type="text" name='name' id='name' placeholder='Name' required/><br></br>

        <div style={{width: '45rem', padding: '0', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
          <label htmlFor="email"></label>
          <input style={{marginBottom: '3rem', zIndex: '0'}} type="email" name='email' id='email' placeholder='Email' required/>
          <button type="submit" id="submit-button" style={{backgroundColor: 'transparent', border: 'none', display: 'inline', padding: '0', margin: '0'}}><BsArrowRight style={{width:'3rem', height: '3rem', marginBottom: '2rem'}}/></button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;