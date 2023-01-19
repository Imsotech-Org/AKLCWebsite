import React from 'react';
import {SiApplepodcasts, SiGooglepodcasts, SiSpotify} from 'react-icons/si';
import Footer from '../components/Footer';
import PodcastPod from '../components/PodcastPod';

const Podcast = () => {
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
          <PodcastPod/>
          <PodcastPod/>
          <PodcastPod/>
          <PodcastPod/>
          <PodcastPod/>
          <PodcastPod/>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Podcast