import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProgram} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import {FaCcApplePay, FaGooglePay, FaCcPaypal} from 'react-icons/fa';
import ShoppingItem from '../components/ShoppingItem';
import Footer from '../components/Footer';

import { createStripe } from '../features/stripe/stripeSlice';


const Payment = () => {

  let { id } = useParams();
  const {program, isErrorProgram, isSuccessProgram, messageProgram} = useSelector((state) => state.programs);
  const {user} = useSelector((state) => state.auth);
  const {stripe, isError, isSuccess, message} = useSelector((state) => state.stripe);
  const [success, setSuccess] = useState(false);

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
      if(isErrorProgram){
        toast.error(messageProgram);
      }
  
      dispatch(getProgram(id));
  }, [dispatch, isErrorProgram, isSuccessProgram, messageProgram, id]);

  const handleCheckout = async () => {
    dispatch(createStripe({price: program.price, name: program.title, userId: user._id, programId: program._id}));
  }


  return (
    <div>
      <div className='paymentContainer'>
        <div className="shoppingList" style={{margin: '5rem auto 1rem auto'}}>
          <h3>Shop list summary</h3>
          <div className="shoppingItemsList">
            <ShoppingItem programImage={program.programImage} programTitle={program.title} programPrice={program.price} programDescription={program.description}/>
            <div className="shoppingItemsTotal">
              <h3>Total</h3>
              <h3>${program.price}</h3>
            </div>
          </div>
          {
            stripe.url && <a href={stripe.url}>Go To Payment</a>
          }
          <button onClick={() => handleCheckout()}>Check Out</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Payment