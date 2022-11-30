import React from 'react';
import Footer from '../components/Footer';

const Credentials = () => {
  return (
    <div style={{paddingTop: '5.5rem'}}>
      <div className='credentialsContainer'>
        <div className="signIn">
          <h3>Sign In</h3>
          <p>Welcome Back!</p>
          <form>
            <label name='email'>
              Enter your email <br />
              <input type="email" name='email' id='email' />
            </label>
            <label name='password'>
              Enter your password <br />
              <input type="password" name='password' id='password' />
            </label>
            <button>Continue</button>
          </form>
        </div>
        <div className="divider"></div>
        <div className="signUp">
          <h3>Sign Up</h3>
          <p>Welcome to AKLC!</p>
          <form>
            <label name='name'>
              Enter your name<br />
              <input type="text" name='name' id='name' />
            </label>
            <label name='email'>
              Enter your email<br />
              <input type="email" name='email' id='email' />
            </label>
            <label name='password'>
              Enter your password <br />
              <input type="password" name='password' id='password' />
            </label>
            <label name='password2'>
              Confirm your password <br />
              <input type="password" name='password2' id='password2' />
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