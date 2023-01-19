import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPrograms} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';
import ImageSlider from '../components/ImageSlider';
import Subscribe from '../components/Subscribe';
import Product from '../components/Product';
import Footer from '../components/Footer';


const Programs = () => {

  const {programs, isError, isSuccess, message} = useSelector((state) => state.programs);
  const [programId, setProgramId] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
      if(isError){
        toast.error(message);
      }
  
      dispatch(getPrograms());
  }, [dispatch, isError, isSuccess, message]);

  return (
    <div style={{paddingTop: '3.5rem'}}>
      <div className='containerStyle'>
        <ImageSlider typeOfSlide="Programs"/>
      </div>
      <Subscribe color='#363d10'/>
      <h2 style={{textAlign: 'center', fontSize: '49px', paddingTop: '2.5rem', color: '#363D10'}}>Products and Programs</h2>
      {
        programs.map((item, index) => <Product item={item} index={index}/>)
      }
      <Footer/>
    </div>
  )
}

export default Programs