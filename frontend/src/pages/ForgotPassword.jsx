import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {forgotMyPassword} from '../features/auth/authSlice';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const {name, email, password1, password2} = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log('Test')
        if(password1 !== password2){
            toast.error('Passwords do not match');
            console.log('Passwords do not match');
        } else {
        const userData = {
            name,
            email,
            password: password1,
        };

        dispatch(forgotMyPassword(userData));
        toast.success('Successfully Changed Password');
        navigate('/credentials');
        }
    }

  return (
    <div>
      <div className='paymentContainer'>
        <div className="shoppingList" style={{margin: '5rem auto 1rem auto', backgroundColor: 'lightGray', padding: '4rem 3rem', borderRadius: '10px'}}>
          <h3>Forgot Password?</h3>
          <form onSubmit={onSubmit} style={{marginTop: '1rem'}}>
            <label name='name' style={{display: 'block'}}>
              Enter your name<br />
              <input style={{width: '100%', height: '2.7rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="text" name='name' id='name' onChange={onChange} required/>
            </label>
            <label name='email' style={{display: 'block'}}>
              Enter your email<br />
              <input style={{width: '100%', height: '2.7rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="email" name='email' id='email' onChange={onChange} required/>
            </label>
            <label name='password1' style={{display: 'block'}}>
              Enter NEW password <br />
              <input style={{width: '100%', height: '2.7rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="password" name='password1' id='password1' onChange={onChange} required/>
            </label>
            <label name='password2' style={{display: 'block'}}>
              Confirm NEW password <br />
              <input style={{width: '100%', height: '2.7rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="password" name='password2' id='password2' onChange={onChange} required/>
            </label>
            <div className="shoppingInfo" style={{marginTop: '0'}}>
                <button>Change Password</button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ForgotPassword