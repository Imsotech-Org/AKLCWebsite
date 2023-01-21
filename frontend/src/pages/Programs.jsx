import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getPrograms} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';
import ImageSlider from '../components/ImageSlider';
import Subscribe from '../components/Subscribe';
import Product from '../components/Product';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';


const Programs = () => {

  const {programs, isError, isSuccess, message} = useSelector((state) => state.programs);
  const [programId, setProgramId] = useState('');

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
      if(isError){
        toast.error(message);
      }
  
      dispatch(getPrograms());

      const element = document.getElementById(window.location.search.split('=')[1]) ? document.getElementById(window.location.search.split('=')[1]) : document.getElementById('containerInitial');
      console.log(window.location.search.split('=')[1]);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }

      console.log('Location changed');
  }, [dispatch, isError, isSuccess, message, location]);

  return (
    <div id='containerInitial' style={{paddingTop: '3.5rem'}}>
      <div className='containerStyle'>
        <ImageSlider typeOfSlide="Programs"/>
      </div>
      <Subscribe color='#363d10'/>
      <h2 style={{textAlign: 'center', fontSize: '49px', paddingTop: '2.5rem', color: '#363D10'}}>Products and Programs</h2>
      {
        programs.map((item, index) => <Product item={item} index={index} key={index}/>)
      }
      <Footer/>
    </div>
  )
}

export default Programs