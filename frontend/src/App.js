import React from 'react';
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
            <Route path='/podcast' element={<Podcast/>}/>
            <Route path='/credentials' element={<Credentials/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
