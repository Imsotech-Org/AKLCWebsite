import React from 'react';
import Footer from '../components/Footer';
import ProgramsComponent from '../components/ProgramsComponent';
import { Link } from 'react-router-dom';
import img3 from '../assets/media/img3.jpg';


const Profile = () => {
  return (
    <div style={{ paddingTop: '5.5rem' }}>
      <h2 style={{ color: '#363d10', fontSize: '3rem', margin: '2.7rem 0 0 12rem' }}>Profile</h2>
      <div style={{ display: 'flex', margin: '3rem auto', backgroundColor: 'lightGrey', borderRadius: '15px', padding: '7rem', justifyContent: 'space-between', width: '50rem' }}>
        <div style={{ width: '10rem' }}>
          <Link style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>Edit Profile</Link>
          <Link style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>Events</Link>
          <Link style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>My Wallet</Link>
          <Link style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>Go to App</Link>
          <Link style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>Settings</Link>
        </div>
        <div style={{ width: '40rem', textAlign: 'right' }}>
          <img src={img3} alt="" style={{ width: '10rem', height: '10rem', borderRadius: '50%', marginLeft: '70%', marginTop: '-5rem' }} />
          <h3 style={{ color: '#502c49', fontSize: '1.5rem', margin: '1rem 1rem 1rem 0' }}>Jane Doe</h3>
          <h4 style={{ color: '#502c49', fontSize: '1.2rem', margin: '1rem 1rem 1rem 0' }}>JaneDoe@email.com</h4>
          <h4 style={{ color: '#363d10', fontSize: '1.2rem', margin: '2rem 1rem 0.4rem 0' }}>About:</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias animi possimus dignissimos, alias officiis ut consequatur consectetur non nihil. Illo inventore beatae debitis quod.</p>
        </div>
      </div>
      <ProgramsComponent title='My Programs' />
      <Footer />
    </div>
  )
}

export default Profile