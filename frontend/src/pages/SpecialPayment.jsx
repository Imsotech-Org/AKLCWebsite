import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";
import {useSelector, useDispatch} from 'react-redux';
import {getProgram} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const SpecialPayment = () => {

    let { userId, programId } = useParams();
    const {program, isError, isSuccess, message} = useSelector((state) => state.programs);
    const {user} = useSelector((state) => state.auth);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        if(isError){
            toast.error(message);
        }
    
        dispatch(getProgram(programId));

    }, [dispatch, isError, isSuccess, message, programId, userId]);

    useEffect(() => {

    }, []);

    const onSubmit = async (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_j7fgxpa",
          "template_ch8drqj",
          e.target,
          "-GyAEjDdGNTtcLhHU"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      navigate('/profile');
    }

  return (
    <div>
      <div className='paymentContainer'>
        <div className="shoppingList" style={{margin: '5rem auto 1rem auto', backgroundColor: 'lightGray', padding: '4rem 3rem', borderRadius: '10px'}}>
          <h3>Hello {user.name}! Thank you for requesting an order for our product!🥳</h3>
          <p style={{marginTop: '4rem', marginBottom: '4rem'}}>Thank you for requesting the program: {program.title}, because the method selected is special, your request will go directly to Andrew and his team, and you should get a anwser back in 1 or 2 business days on your email about the product.</p>
          <form onSubmit={onSubmit}>
            <input type="text" name='name' id='name' value={user.name} hidden readOnly />
            <input type="email" name='email' id='email' value={user.email} hidden readOnly />
            <input type="text" name='program' id='program' value={program.title} hidden readOnly />
            <button style={{textAlign: 'center', textDecoration: 'none', backgroundColor: '#879635', color: '#F3F1F3', fontSize: '1.5rem', padding: '1rem 2rem', borderRadius: '10px'}}>Go to Profile</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SpecialPayment