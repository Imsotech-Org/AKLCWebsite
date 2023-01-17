import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createSubscribers} from '../features/subscriberslists/subscriberslistsSlice';
import {toast} from 'react-toastify';
import {BsArrowRight} from 'react-icons/bs';

const Subscribe = ({ color }) => {

  const [subscriberData, setSubscriberData] = useState({
    name: '',
    email: '',
  })

  const dispatch = useDispatch();

  const onChange = (e) => {
    setSubscriberData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createSubscribers(subscriberData));
    toast.success('Subscribed!');
    setSubscriberData('');
  }

  return (
    <div className='subscribeContainer' style={{backgroundColor: color ? color : '#502c49'}}>
      <h2>Subscribe to newsletter</h2>
      <h4>Join our newsletter for weekly health tips and podcasts</h4>
      <form onSubmit={onSubmit} style={{width: '100%'}}>
        <input style={{width: '42.5rem'}} type="text" name='name' id='name' placeholder='Name' onChange={onChange}/><br></br>
        <div style={{width: '45rem', padding: '0', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
          <input style={{marginBottom: '3rem'}} type="email" name='email' id='email' placeholder='Email' onChange={onChange}/>
          <button style={{backgroundColor: 'transparent', border: 'none', display: 'inline', padding: '0', margin: '0'}}><BsArrowRight style={{width:'3rem', height: '3rem', marginBottom: '2rem'}}/></button>
        </div>
      </form>
    </div>
  )
}

export default Subscribe