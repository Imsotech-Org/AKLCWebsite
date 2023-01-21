import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import YoutubeVideo from '../components/YoutubeVideo';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {

  const [ytVideos, setYtVideos] = useState([]);

  useEffect(() => {
    const getYoutubeVideos = async () => {
      try {
        console.log('Just before axios');
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDQyliUXXUneJSMPep_XEg9RN8xOhTHzh8&channelId=UCScUFoeTbUXWU9FTsKJPCOA&part=snippet,id&order=date&maxResults=20');
        setYtVideos(res.data.items);
        console.log(ytVideos);
      } catch (error) {
        if(error.response.status === 500){
          console.log('There was a problem with the server')
        } else {
          console.log(error.response.data)
        }
      }
    }

    getYoutubeVideos();
  }, [ytVideos]);

  return (
    <div>
      <div style={{paddingTop: '3.5rem'}}>
        <div className='containerStyle'>
          <ImageSlider typeOfSlide="Blog"/>
        </div>
        <Subscribe color={'#363D10'}/>
        <h2 style={{textAlign: 'center', fontSize: '49px', paddingTop: '2.5rem', color: '#363D10', marginBottom: '2rem'}}>Youtube Videos</h2>
        {
          ytVideos.map((item, index) => {
            if(item.id.kind === "youtube#video"){
              return <YoutubeVideo item={item} index={index}/>
            } else {
              return ""
            }
          })
        }
        <Footer/>
      </div>
    </div>
  )
}

export default Blog