import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import YoutubeVideo from '../components/YoutubeVideo';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {

  const [ytVideos, setYtVideos] = useState([]);
  const [apiKey, setApiKey] = useState([
    'AIzaSyBRJeFhiWuzNUd6Wx_D01a2NRDNweMCBYw',
    'AIzaSyDQyliUXXUneJSMPep_XEg9RN8xOhTHzh8',
    'AIzaSyDIo6fs0Rn-6z39CygZ565aO2m9KEDWmiY',
    'AIzaSyDoLRWVAF8CffT7_WP3Qfu5vO2X6QGepeE',
    'AIzaSyDvaFeseVA_BjEFXo9WkE7KXzIlnrnfpKc',
    'AIzaSyCVrIzvWIlisPXrt169HC6YiPBx3Mha4EA'
  ])

  useEffect(() => {
    const getYoutubeVideos = async () => {
      try {
        console.log('Just before axios');
        apiKey.forEach(chave => {
          callYt(chave);
        });
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

  const callYt = async (apiKey) => {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCScUFoeTbUXWU9FTsKJPCOA&part=snippet,id&order=date&maxResults=20`);
    if(res.error){
      return
    }else {
      setYtVideos(res.data.items);
    }
  }

  return (
    <div>
      <div style={{paddingTop: '3.5rem'}}>
        <div className='containerStyle'>
          <ImageSlider showQuotes={false} typeOfSlide="Blog"/>
        </div>
        <Subscribe color={'#363D10'}/>
        <h2 style={{textAlign: 'center', fontSize: '49px', paddingTop: '2.5rem', color: '#363D10', marginBottom: '2rem'}}>YouTube Videos</h2>
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