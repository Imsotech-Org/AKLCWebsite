import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {getSystemImages, reset} from '../features/systemImages/systemImageSlice';
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
  const {systemImages, systemImage, isError, isSuccess, isLoading, message} = useSelector((state) => state.systemImage);
  const [imagesLoaded, setImagesLoaded] = useState([{id: '', name: '', place: '', show: ''}]);

  const dispatch = useDispatch();

  useEffect(() => {
    if(isError){
      toast.error(message);
    }

    dispatch(getSystemImages());
    if(isSuccess){
      systemImages.forEach((item) => {
        if(item.place === 'Home' && item.show){
          setImagesLoaded(oldArray => [...oldArray, {id: item._id, name: `${process.env.PUBLIC_URL}systemImgs/${item.name}`, place: item.place, show: item.show}]);
        }
      })
    }
  }, [dispatch, isError, isSuccess]);

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
        {/* <img style={{margin: '5rem',width: '10rem', height: '10rem', backgroundColor: 'blue'}} src={imagesLoaded[2].name} alt="" /> */}
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