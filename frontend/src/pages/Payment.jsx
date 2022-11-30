import React from 'react';
import {FaCcApplePay, FaGooglePay, FaCcPaypal} from 'react-icons/fa';
import ShoppingItem from '../components/ShoppingItem';
import Footer from '../components/Footer';

const Payment = () => {
  return (
    <div>
      <div className='paymentContainer'>
        <div className="shoppingInfo">
          <h3>Shipping Info</h3>
          <p>Your order should arrive in x days</p>
          <form>
            <label name='email'>
              Enter your email <br />
              <input type="email" name='email' id='email' />
            </label>
            <label name='country'>
              Enter your country/rergion <br />
              <input type="text" name='country' id='country' />
            </label>
            <label name='firsName'>
              Enter your first name <br />
              <input type="text" name='firsName' id='firsName' />
            </label>
            <label name='lastName'>
              Enter your last name <br />
              <input type="text" name='lastName' id='lastName' />
            </label>
            <label name='address'>
              Enter your address <br />
              <input type="text" name='address' id='address' />
            </label>
            <label name='addressExtra'>
              Enter your apartment, suite, (optional) <br />
              <input type="text" name='addressExtra' id='addressExtra' />
            </label>
            <label name='city'>
              Enter your city <br />
              <input type="text" name='city' id='city' />
            </label>
            <label name='province'>
              Enter your province <br />
              <input type="text" name='province' id='province' />
            </label>
            <label name='postalCode'>
              Enter your postal code <br />
              <input type="text" name='postalCode' id='postalCode' />
            </label>
            <label name='phone'>
              Enter your phone <br />
              <input type="text" name='phone' id='phone' />
            </label>

            <label style={{marginTop: '3rem'}}>Pay with:</label>
            <div className="differentPayments">
              <FaCcApplePay className='differentPaymentsItems'/>
              <FaGooglePay className='differentPaymentsItems'/>
              <FaCcPaypal className='differentPaymentsItems'/>
            </div>
            <label style={{marginBottom: '3rem'}}>Continue to pay with credit card</label>

            <label name='cardName'>
              Enter name on card <br />
              <input type="text" name='cardName' id='cardName' />
            </label>
            <label name='cardNumber'>
              Enter card number <br />
              <input type="text" name='cardNumber' id='cardNumber' />
            </label>
            <div className="halfInputs" style={{display: 'flex', justifyContent: 'space-between'}}>
              <label name='cardExpiration' style={{width: '10rem'}}>
                Enter expiration date <br />
                <input type="text" name='cardExpiration' id='cardExpiration' style={{width: '10rem'}} />
              </label>
              <label name='cardcvc' style={{width: '10rem'}}>
                Enter CVC number <br />
                <input type="text" name='cardcvc' id='cardcvc' style={{width: '10rem'}} />
              </label>
            </div>

            <button>Continue</button>
          </form>
        </div>
        <div className="shoppingList">
          <h3>Shop list summary</h3>
          <div className="shoppingItemsList">
            <ShoppingItem/>
            <ShoppingItem/>
            <ShoppingItem/>
            <div className="shoppingItemsTotal">
              <h3>Total</h3>
              <h3>$297</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Payment