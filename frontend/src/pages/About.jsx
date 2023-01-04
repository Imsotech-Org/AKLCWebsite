import React from 'react';
import ImageSlider from '../components/ImageSlider';
import SuccessStory from '../components/SuccessStory';
import Recommendation from '../components/Recommendation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div style={{paddingTop: '3.5rem'}}>
      <div className='containerStyle'>
        <ImageSlider typeOfSlide="About"/>
      </div>
      <SuccessStory/>
      <Recommendation/>
      <Footer/>
    </div>
  )
}

export default About