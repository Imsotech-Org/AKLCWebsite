import React, {useEffect} from 'react';
import {SiApplepodcasts, SiGooglepodcasts, SiSpotify} from 'react-icons/si';
import Footer from '../components/Footer';
import {useSelector, useDispatch} from 'react-redux';
import {getPodcasts, reset} from '../features/podcasts/podcastsSlice';
import PodcastPod from '../components/PodcastPod';
import {toast} from 'react-toastify';

const Podcast = () => {

  const {podcasts, isError, message} = useSelector((state) => state.podcasts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
    if(isError){
      toast.error(message);
    }else{
      dispatch(getPodcasts());
    }
  }, [dispatch, message, isError]);

  return (
    <div>
      <div style={{paddingTop: '5.5rem'}}>

        <div className="podcastHeader">
          <div className="subscribePodcastContainer">
            <h3>Subscribe</h3>
            <p><SiApplepodcasts style={{width: '2rem', height: '2rem', marginBottom: '-0.5rem', color: 'black'}}/> Apple Podcast</p>
            <hr />
            <p><SiGooglepodcasts style={{width: '2rem', height: '2rem', marginBottom: '-0.5rem', color: 'orange'}}/> Google Podcast</p>
            <hr/>
            <p><SiSpotify style={{width: '2rem', height: '2rem', marginBottom: '-0.5rem', color: 'green'}}/> Spotify Podcast</p>
            <hr/>
          </div>
          <div className="aboutPodcast">
            <h4>About Podcast</h4>
            <p>the plus+ 
Tune in to learn the latest emerging sciences in longevity, wellness advice, novel exercise methods, bio-hacks, healthy nutrition and supplementation, and real world, down-to-earth practices for a fitter, well rounded life.</p>
          </div>
        </div>

        <div className="podcastList">
          <h4>Podcast Episodes</h4>
          {
            podcasts.map((item, index) => <PodcastPod key={index} title={item.title} link={item.link}/>)
          }
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Podcast