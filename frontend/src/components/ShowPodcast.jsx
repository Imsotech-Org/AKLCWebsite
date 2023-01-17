import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deletePodcast, getPodcasts} from '../features/podcasts/podcastsSlice';
import {toast} from 'react-toastify';
import PodcastPod from './PodcastPod';

const ShowPodcast = () => {

  const {podcasts, isError, isSuccess, message} = useSelector((state) => state.podcasts);
  const [podcastId, setPodcastId] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if(isError){
      toast.error(message);
    }

    dispatch(getPodcasts());
  }, [dispatch, isError, isSuccess, message]);

  const onSubmit = (e) => {
      e.preventDefault();
      dispatch(deletePodcast(podcastId));
  }

  return (
    <div className="editPodcastContent" style={{marginTop: '5rem'}}>
        <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Current Podcast links content:</h4>
        {
          podcasts.map((item, index) => {
            return (
              <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <PodcastPod style={{width: '100%'}} title={item.title} link={item.link}/>
                <form onSubmit={onSubmit}>
                  <button style={{width: '6rem', height: '3rem'}} onClick={() => setPodcastId(item._id)}>Delete</button>
                </form>
              </div>
            )
          })
        }
    </div>
  )
}

export default ShowPodcast;