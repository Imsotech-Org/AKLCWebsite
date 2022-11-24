import React from 'react';
import {FaStar} from 'react-icons/fa';

const TestimonialsItem = () => {
  return (
    <div className='testimonialsItemContainer'>
      <div className='testimonialsItemHeader'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque tempore laborum vitae amet sunt expedita accusantium asperiores repellat ducimus.</p>
        <small>John Doe, Since 2019</small>
      </div>
      <div className='testimonialsItemStars'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
      </div>
    </div>
  )
}

export default TestimonialsItem