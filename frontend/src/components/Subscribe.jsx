import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

const Subscribe = () => {
  return (
    <div className='subscribeContainer'>
      <h2>Subscribe to newsletter</h2>
      <h4>Join our newsletter for weekly health tips and podcasts</h4>
      <input type="text" name='name' id='name' placeholder='Name'/><br></br>
      <input type="email" name='email' id='email' placeholder='Email'/>
      <BsArrowRight className='subscribeButton'/>
    </div>
  )
}

export default Subscribe