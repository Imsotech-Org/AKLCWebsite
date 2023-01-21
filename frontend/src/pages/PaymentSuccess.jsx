import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getProgram} from '../features/programs/programsSlice';
// import {updateMe, reset} from '../features/auth/authSlice';
import {toast} from 'react-toastify';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';


const PaymentSuccess = () => {

  let { userId, programId } = useParams();
  const {program, isError, isSuccess, message} = useSelector((state) => state.programs);
  
  const dispatch = useDispatch();


  useEffect(() => {
      if(isError){
        toast.error(message);
      }
  
      dispatch(getProgram(programId));
      console.log(`UserID: ${userId}`);

      // dispatch(updateMe({plan: programId, hasPaid: true}));

  }, [dispatch, isError, isSuccess, message, programId, userId]);


  return (
    <div>
      <div className='paymentContainer'>
        <div className="shoppingList" style={{margin: '5rem auto 1rem auto', backgroundColor: 'lightGray', padding: '4rem 3rem', borderRadius: '10px'}}>
          <h3>Item Aquired:</h3>
          <h2 style={{marginTop: '2rem', fontSize: '2.5rem', color: '#363d10'}}>{program.title}</h2>
          <p style={{marginTop: '1rem', fontSize: '1.3rem', color: '#363d10', marginBottom: '2rem'}}>You have now officially joined the Andrew Kolasko Life Center Team! Congratulations?🥳</p>
          <Link to='/profile' style={{textAlign: 'center', textDecoration: 'none', backgroundColor: '#879635', color: '#F3F1F3', fontSize: '1.5rem', padding: '1rem 2rem', borderRadius: '10px'}}>Go To Profile</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PaymentSuccess