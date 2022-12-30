import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Subscribe from '../components/Subscribe';
import Benefits from '../components/Benefits';
import ProgramsComponent from '../components/ProgramsComponent';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div style={{paddingTop: '3.5rem'}}>
      <div className='containerStyle'>
        <ImageSlider/>
      </div>
      <Subscribe color='#879635'/>
      <Benefits/>
      <ProgramsComponent/>
      <Testimonials/>
      <Subscribe color='#879635'/>
      <Footer/>
    </div>
  )
}

export default Home