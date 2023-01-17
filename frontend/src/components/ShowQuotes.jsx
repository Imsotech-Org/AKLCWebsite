import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import {deleteProgram, getPrograms} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';

const ShowQuotes = () => {
  return (
    <div className="editQuotesContent" style={{marginTop: '5rem'}}>
      <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Current quotes content for eact page:</h4>
      
      <div>
        <h5>Home page Quote:</h5>
        <p></p>
      </div>

      <div>
        <h5>About page Quote:</h5>
        <p></p>
      </div>

      <div>
        <h5>Programs page Quote:</h5>
        <p></p>
      </div>

      <div>
        <h5>Blog page Quote:</h5>
        <p></p>
      </div>

      <div>
        <h5>Videos page Quote:</h5>
        <p></p>
      </div>
    </div>
  )
}

export default ShowQuotes