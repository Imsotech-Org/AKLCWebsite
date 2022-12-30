import React from 'react';
import TestimonialsItem from './TestimonialsItem';

const Testimonials = () => {
  return (
    <div className='testimonialsContainer'>
      <h2>Testimonials</h2>
      <TestimonialsItem itemValue={0}/>
      <TestimonialsItem itemValue={1}/>
      <TestimonialsItem itemValue={2}/>
    </div>
  )
}

export default Testimonials