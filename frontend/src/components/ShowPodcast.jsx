import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import {deleteProgram, getPrograms} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';

const ShowPodcast = () => {
  return (
    <div className="editPodcastContent" style={{marginTop: '5rem'}}>
        <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Current Podcast links content:</h4>
    </div>
  )
}

export default ShowPodcast