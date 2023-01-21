import React, {useEffect} from 'react';
import ImageSlider from '../components/ImageSlider';
import Subscribe from '../components/Subscribe';
import Benefits from '../components/Benefits';
import ProgramsComponent from '../components/ProgramsComponent';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {

  useEffect(() => {
    const element = document.getElementById(window.location.search.split('=')[1]) ? document.getElementById(window.location.search.split('=')[1]) : document.getElementById('containerInitial');
    console.log(window.location.search.split('=')[1]);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id='containerInitial' style={{paddingTop: '3.5rem'}}>
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