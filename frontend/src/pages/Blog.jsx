import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import YoutubeVideo from '../components/YoutubeVideo';
import {getYoutubeVideos, createYoutubeVideo} from '../features/youtubeVideos/youtubeVideosSlice';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { set } from 'mongoose';

const Blog = () => {

  const {youtubeVideos, isError, isSuccess, message} = useSelector((state) => state.youtubeVideo);
  const [calledOnce, setCalledOnce] = useState(false);

  const dispatch = useDispatch();

  const [ytVideos, setYtVideos] = useState([
    {}
  ]);

  useEffect(() => {

    if(!calledOnce){
      dispatch(getYoutubeVideos());
      let data;
      axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCXFClXHhtv4hog6VNrvCZZHeJAuntNcvw&channelId=UCScUFoeTbUXWU9FTsKJPCOA&part=snippet,id&order=date&maxResults=20').then(
        (response) => {
          data = response;
          data.data.items.map((item, index) => {
            if(item.id.kind === "youtube#video"){
              setYtVideos(oldArray => [...oldArray, {
                imageName: item.snippet.thumbnails.high.url,
                title: item.snippet.title,
                description: item.snippet.description,
                youtubevideoId: item.id.videoId
              }]);
              if(item.snippet.title !== youtubeVideos.title){
                dispatch(createYoutubeVideo(
                  {
                    imageName: item.snippet.thumbnails.high.url,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    youtubevideoId: item.id.videoId
                  }
                ));
              }
            }
          })
        }
        ).catch(function (error) {
        console.log(error);
      });
    }

    dispatch(getYoutubeVideos());
    
  }, []);

  return (
    <div>
      <div style={{paddingTop: '3.5rem'}}>
        <div className='containerStyle'>
          <ImageSlider showQuotes={false} typeOfSlide="Blog"/>
        </div>
        <Subscribe color={'#363D10'}/>
        <h2 style={{textAlign: 'center', fontSize: '49px', paddingTop: '2.5rem', color: '#363D10', marginBottom: '2rem'}}>YouTube Videos</h2>
        {
          youtubeVideos.map((item, index) => {
            return <YoutubeVideo item={item} index={index}/>
          })
        }
        <Footer/>
      </div>
    </div>
  )
}

export default Blog