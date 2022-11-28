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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. Sed tristique vestibulum ultrices. Nulla nulla tellus, accumsan in interdum et, consectetur sit amet felis. Ut interdum non dolor in sagittis. Donec ut magna diam. Nullam et lectus erat. Donec et nisi sem. Nunc interdum interdum mollis. Curabitur orci dui, luctus eu justo a, bibendum vehicula tellus. Curabitur cursus rutrum orci quis pharetra.</p>
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