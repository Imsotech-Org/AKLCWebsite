import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProgram} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';
import { useParams } from 'react-router-dom';
import ShoppingItem from '../components/ShoppingItem';
import Footer from '../components/Footer';

import { createStripe } from '../features/stripe/stripeSlice';


const Payment = () => {

  let { id } = useParams();
  const {program, isErrorProgram, isSuccessProgram, messageProgram} = useSelector((state) => state.programs);
  const {user} = useSelector((state) => state.auth);
  const {stripe} = useSelector((state) => state.stripe);
  // const [success, setSuccess] = useState(false);

  
  const dispatch = useDispatch();
  // const navigate = useNavigate();

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
          <h3 style={{fontSize: '3rem', marginBottom: '2rem'}}>Shop list summary</h3>
          <div className="shoppingItemsList" style={{width: '100%', marginBottom: '2rem'}}>
            <ShoppingItem programImage={program.programImage} programTitle={program.title} programPrice={program.price} programDescription={program.description}/>
            <div className="shoppingItemsTotal">
              <h3 style={{fontSize: '2.5rem'}}>Total</h3>
              <h3 style={{fontSize: '2.5rem'}}>${program.price}</h3>
            </div>
          </div>
          {
            stripe.url && <a style={{backgroundColor: '#363d10', color: '#F3F1F3', fontSize: '1.4rem', textAlign: 'center', borderRadius: '15px', border: 'none', cursor: 'pointer', padding: '1rem 42%', textDecoration: 'none'}} href={stripe.url}>Go To Payment</a>
          }
          {
            !stripe.url && (
              <div className="shoppingInfo" style={{marginTop: '-2rem', width: '100%'}}>
                <button style={{width: '100%'}} onClick={() => handleCheckout()}>Check Out</button>
              </div>
            )
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Payment