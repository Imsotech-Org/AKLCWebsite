import React, {useState, useEffect} from 'react';
import ImageSlider from '../components/ImageSlider';
import Subscribe from '../components/Subscribe';
import Benefits from '../components/Benefits';
import ProgramsComponent from '../components/ProgramsComponent';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const element = document.getElementById(window.location.search.split('=')[1]) ? document.getElementById(window.location.search.split('=')[1]) : document.getElementById('containerInitial');
    if(window.location.search.split('=')[1] === 'contactInfo'){
      setOpenModal(true);
    }else {
      console.log(window.location.search.split('=')[1]);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div id='containerInitial' style={{paddingTop: '3.5rem'}}>
      <Contact open={openModal} onClose={() => setOpenModal(false)}/>
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