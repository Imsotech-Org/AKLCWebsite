import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProgram} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';
import { useParams } from 'react-router-dom';
import {FaCcApplePay, FaGooglePay, FaCcPaypal} from 'react-icons/fa';
import ShoppingItem from '../components/ShoppingItem';
import Footer from '../components/Footer';

import axios from 'axios';


const PaymentSuccess = () => {

  let { id } = useParams();
  const {program, isError, isSuccess, message} = useSelector((state) => state.programs);
  const [success, setSuccess] = useState(false);

  
  const dispatch = useDispatch();


  useEffect(() => {
      if(isError){
        toast.error(message);
      }
  
      dispatch(getProgram(id));
  }, [dispatch, isError, isSuccess, message, id]);

  const handleCheckout = () => {

  }


  return (
    <div>
      <div className='paymentContainer'>
        <div className="shoppingList" style={{margin: '5rem auto 1rem auto'}}>
          <h3>Shop list Checkout</h3>
                      
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PaymentSuccess