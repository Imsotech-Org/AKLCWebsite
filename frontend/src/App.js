import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Credentials from './pages/Credentials';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';
import Podcast from './pages/Podcast';
import WebsiteEdit from './pages/WebsiteEdit';
import PaymentSuccess from './pages/PaymentSuccess';
import SpecialPayment from './pages/SpecialPayment';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/programs' element={<Programs/>}/>
            <Route path='/blog' element={<Blog/>}/>
            {/* <Route path='/podcast' element={<Podcast/>}/> */}
            <Route path='/credentials' element={<Credentials/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            
            <Route path='/profile' element={<PrivateRoute/>}>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
            <Route path='/website-edit' element={<PrivateRoute/>}>
              <Route path='/website-edit' element={<WebsiteEdit/>}/>
            </Route>
            <Route path='/payment/:id' element={<PrivateRoute/>}>
              <Route path='/payment/:id' element={<Payment/>}/>
            </Route>
            <Route path='/payment-success/:userId/:programId' element={<PrivateRoute/>}>
              <Route path='/payment-success/:userId/:programId' element={<PaymentSuccess/>}/>
            </Route>
            <Route path='/specialPayment/:userId/:programId' element={<PrivateRoute/>}>
              <Route path='/specialPayment/:userId/:programId' element={<SpecialPayment/>}/>
            </Route>

            
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
