import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import {useSelector, useDispatch} from 'react-redux';
import {signUp, signIn, reset} from '../features/auth/authSlice';
import Footer from '../components/Footer';

const Credentials = () => {
  const [formDataSignUp, setFormDataSignUp] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    userImage: ''
  })
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');
  const [formDataSignIn, setFormDataSignIn] = useState({
    email: '',
    password: ''
  })

  const {name, email, password1, password2, userImage} = formDataSignUp;
  const {emailSignIn, password} = formDataSignIn;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth);

  useEffect(() => {
    if(isError){
      toast.error(message);
    }

    if(isSuccess || user){
      navigate('/');
    }

    dispatch(reset);
  }, [isError, isSuccess, message, user, dispatch, navigate]);

  const onChangeSignUp = (e) => {
    if(e.target.name === 'userImage'){
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setFormDataSignUp((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0].name
      }))
    }else{
      setFormDataSignUp((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
  }

  const onChangeSignIn = (e) => {
    setFormDataSignIn((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmitSignUp = async (e) => {
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
        userImage
      };
      const formData = new FormData();
      formData.append('userImage', file);
      formData.append('userEmail', email);

      try {
        console.log('Just before axios');
        const res = await axios.post('/uploads', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } catch (error) {
        if(error.response.status === 500){
          console.log('There was a prroblem with the server')
        } else {
          console.log(error.response.data)
        }
      }

      dispatch(signUp(userData));
    }
  }

  const onSubmitSignIn = (e) => {
    e.preventDefault();

    const userData = {
      email: emailSignIn,
      password
    }

    dispatch(signIn(userData));
  }

  return (
    <div style={{paddingTop: '5.5rem'}}>
      <div className='credentialsContainer'>


        <div className="signIn">
          <h3>Sign In</h3>
          <p>Welcome Back!</p>
          <form onSubmit={onSubmitSignIn}>
            <label name='emailSignIn'>
              Enter your email <br />
              <input type="email" name='emailSignIn' id='emailSignIn' onChange={onChangeSignIn} />
            </label>
            <label name='password'>
              Enter your password <br />
              <input type="password" name='password' id='password' onChange={onChangeSignIn} />
            </label>
            <button>Continue</button>
          </form>
        </div>


        <div className="divider"></div>


        <div className="signUp">
          <h3>Sign Up</h3>
          <p>Welcome to AKLC!</p>
          <form onSubmit={onSubmitSignUp} encType='multipart/form-data'>
            <label name='name'>
              Enter your name<br />
              <input type="text" name='name' id='name' onChange={onChangeSignUp} required/>
            </label>
            <label name='email'>
              Enter your email<br />
              <input type="email" name='email' id='email' onChange={onChangeSignUp} required/>
            </label>
            <label name='password1'>
              Enter your password <br />
              <input type="password" name='password1' id='password1' onChange={onChangeSignUp} required/>
            </label>
            <label name='password2'>
              Confirm your password <br />
              <input type="password" name='password2' id='password2' onChange={onChangeSignUp} required/>
            </label>
            <label name='userImage'>
              {fileName} <br />
              <input type="file" filename='userImage' name='userImage' id='userImage' onChange={onChangeSignUp}/>
            </label>
            <button>Continue</button>
          </form>
        </div>


      </div>
      <p style={{width: '20rem', margin: '0 auto', textAlign: 'center', paddingBottom: '2rem', color: '#879635'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magni velit quae, illo reprehenderit nisi.</p>
      <Footer/>
    </div>
  )
}

export default Credentials