import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
// import {createProgram} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';

const CreatePodcast = () => {
  return (
    <div style={{marginTop: '2rem'}}>
      <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Create Podcast:</h4>
      <form  style={{width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <label htmlFor="price">
            Title<br/>
            <input style={{ width: '24rem', height: '2.7rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="text" name="author" id="author"/>
          </label><br />
          <label htmlFor="price">
            Link<br/>
            <input style={{ width: '24rem', height: '2.7rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="text" name="author" id="author"/>
          </label><br />
        </div>
        <button style={{textDecoration: 'none', backgroundColor: '#879635', padding: '0.5rem 1rem', borderRadius: '10px', color: '#F3F1F3', fontSize: '1.5rem', border: 'none', width: '100%'}}>Create Podcast</button>
      </form>
    </div>
  )
}

export default CreatePodcast