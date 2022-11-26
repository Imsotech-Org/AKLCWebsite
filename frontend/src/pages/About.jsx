import React from 'react';
import img5 from '../assets/media/img5.JPG';
import SuccessStory from '../components/SuccessStory';
import Recommendation from '../components/Recommendation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div style={{paddingTop: '5.5rem'}}>
      <div className="containerStyle">
        <div className='sliderStyle'>
          <div className='slideQuote'>"I am not concerned that you have fallen. I am concerned that you will rise"</div>
          <div className='slideQuoteAuth'>-Abraham Lincoln</div>
          <div className='slideStyle' style={{backgroundImage: `url(${img5})`}}></div>
        </div>
      </div>
      <SuccessStory/>
      <Recommendation/>
      <Footer/>
    </div>
  )
}

export default About