import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createRegisters} from '../features/registers/registersSlice';
import {toast} from 'react-toastify';
import {BsArrowRight} from 'react-icons/bs';
import {FaArrowDown} from 'react-icons/fa';
import thumbnail from '../assets/media/thumbnail.jpeg';

const Subscribe = ({ color, showTop = false }) => {

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
  })

  const dispatch = useDispatch();

  const onChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createRegisters(registerData));
    toast.success('Subscribed!');
    setRegisterData({
      name: '',
      email: '',
    });
  }

  return (
    <div className='subscribeContainer' style={{backgroundColor: color ? color : '#502c49'}}>
      {showTop && <div className="marketingContainer">
        <img src={thumbnail} style={{width: '22rem', borderRadius: '15px'}} alt="" />
        <h3 style={{fontSize: '3rem', padding: '0.5rem', marginTop: '0.8rem'}}>First Time Offer!</h3>
        <h4 style={{fontSize: '2rem', padding: '0.5rem', color: '#502c49'}}>5 Fundamentals of Longevity Free Live Webinar.</h4>
        <h5 style={{fontSize: '1rem', padding: '0.5rem', color: '#879635'}}>January 28, 2023</h5>
        <h3 style={{fontSize: '2rem', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Enroll now! <FaArrowDown style={{marginLeft: '0.5rem',color: '#502c49', width: '4rem', height: '4rem'}}/></h3>
      </div>}

      <h2>Enroll in Webinar</h2>
      <h4>Join our Webinar for January 28, 2023</h4>
      <form onSubmit={onSubmit} style={{width: '100%'}}>
        <input style={{width: '42.5rem'}} type="text" name='name' id='name' placeholder='Name' onChange={onChange}/><br></br>
        <div style={{width: '45rem', padding: '0', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
          <input style={{marginBottom: '3rem', zIndex: '0'}} type="email" name='email' id='email' placeholder='Email' onChange={onChange}/>
          <button style={{backgroundColor: 'transparent', border: 'none', display: 'inline', padding: '0', margin: '0'}}><BsArrowRight style={{width:'3rem', height: '3rem', marginBottom: '2rem'}}/></button>
        </div>
      </form>
    </div>
  )
}

export default Subscribe