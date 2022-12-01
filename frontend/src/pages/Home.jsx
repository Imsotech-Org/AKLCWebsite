import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Subscribe from '../components/Subscribe';
import Benefits from '../components/Benefits';
import ProgramsComponent from '../components/ProgramsComponent';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import img1 from '../assets/media/img1.jpg';
import img2 from '../assets/media/img2.jpg';
import img3 from '../assets/media/img3.jpg';
import img4 from '../assets/media/img4.JPG';
import img5 from '../assets/media/img5.JPG';
import img6 from '../assets/media/img6.JPG';

const Home = () => {
  const slides = [
    {url: img1, title: 'Image 1'},
    {url: img2, title: 'Image 2'},
    {url: img3, title: 'Image 3'},
    {url: img4, title: 'Image 4'},
    {url: img5, title: 'Image 5'},
    {url: img6, title: 'Image 6'}
  ];

  return (
    <div style={{paddingTop: '3.5rem'}}>
      <div className='containerStyle'>
        <ImageSlider slides={slides}/>
      </div>
      <Subscribe color='#363d10'/>
      <Benefits/>
      <ProgramsComponent/>
      <Testimonials/>
      <Subscribe color='#363d10'/>
      <Footer/>
    </div>
  )
}

export default Home