import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaUser, FaSearch} from 'react-icons/fa';
import {SlMenu} from 'react-icons/sl';
import {MdClose} from 'react-icons/md';
import Logo1 from '../assets/media/logo1.svg';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const openMenu = () => {
    setMobileNav((mobileNav => !mobileNav))
  }

  return (
    <header>
      <div className="logo">
        <img src={Logo1} alt="" />
      </div>
      <div className="center-items">
        <ul>
          <li>
            <Link className='navbar-item' to='/'>Home</Link>
          </li>
          <li>
            <Link className='navbar-item' to='/about'>About</Link>
          </li>
          <li>
            <Link className='navbar-item' to='/programs'>Programs</Link>
          </li>
          <li>
            <Link className='navbar-item' to='/blog'>Blog</Link>
          </li>
          <li>
            <Link className='navbar-item' to='/blog'>Videos</Link>
          </li>
          <li>
            <Link className='navbar-item' to='/podcast'>Podcast</Link>
          </li>
          <li>
            <Link className='navbar-item' to='/'>Contact</Link>
          </li>
          <li>
            <FaSearch className='navbar-item'/>
          </li>
        </ul>
      </div>
      <div className="credential-nav" style={{marginRight: '2rem'}}>
        <ul>
          <li>
            <Link className='navbar-item' to='/credentials'>Sign Up</Link>
          </li>
          <li>
            <Link className='navbar-item' to='/credentials'><FaUser style={{height: '2rem', width: '2rem'}}/></Link>
          </li>
        </ul>
      </div>

      <div className="mobile-nav">
        {
          mobileNav ? (<MdClose onClick={openMenu} style={{height: '2.7rem', width: '2.7rem', marginRight: '2rem'}} className='navbar-item' id='nav-burger' />) : (<SlMenu onClick={openMenu} style={{height: '2rem', width: '2rem', marginRight: '2rem'}} className='navbar-item' id='nav-burger' />)
        }
        <div className="mobile-nav-items" style={{display: mobileNav ? '' : 'none'}}>
          <ul>
            <li>
              <Link className='mobile-nav-item' to='/'>Home</Link>
            </li>
            <li>
              <Link className='mobile-nav-item' to='/about'>About</Link>
            </li>
            <li>
              <Link className='mobile-nav-item' to='/programs'>Programs</Link>
            </li>
            <li>
              <Link className='mobile-nav-item' to='/blog'>Blog</Link>
            </li>
            <li>
              <Link className='mobile-nav-item' to='/blog'>Videos</Link>
            </li>
            <li>
              <Link className='mobile-nav-item' to='/podcast'>Podcast</Link>
            </li>
            <li>
              <Link className='mobile-nav-item' to='/'>Contact</Link>
            </li>
            <li>
              <FaSearch className='mobile-nav-item'/>
            </li>
            <li>
              <Link className='mobile-nav-item' to='/credentials'>Sign Up</Link>
            </li>
            <li>
              <Link className='mobile-nav-item' to='/credentials'><FaUser style={{height: '2rem', width: '2rem'}}/></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar