import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import YoutubeVideo from '../components/YoutubeVideo';
import {getYoutubeVideos, createYoutubeVideo} from '../features/youtubeVideos/youtubeVideosSlice';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Blog = () => {

  const {youtubeVideos, isError, isSuccess, message} = useSelector((state) => state.youtubeVideo);

  const dispatch = useDispatch();

  const [ytVideos, setYtVideos] = useState([
    {
      imageName: 'https://i.ytimg.com/vi/bBmNs8b8IIQ/hqdefault.jpg',
      title: 'Aged 45 to 65? Bring your A+ game!!',
      description: "In this video, I'll show you info about Andrew Kolasko Life Center, and a description of who Andrew Kolasko is. Enjoy! ABOUT MY ...",
      youtubevideoId: 'bBmNs8b8IIQ'
    },
    {
      imageName: 'https://i.ytimg.com/vi/3SjM13JDdmM/hqdefault.jpg',
      title: 'Healthier and Fitter in your 40s, 50s, 60s+',
      description: "If you're male ages 45-65 and are trying to figure out how to focus on your health, and fitness and promote longevity living, this is ...",
      youtubevideoId: '3SjM13JDdmM'
    },
    {
      imageName: 'https://i.ytimg.com/vi/bBmNs8b8IIQ/hqdefault.jpg',
      title: 'Aged 45 to 65? Bring your A+ game!!',
      description: "In this video, I'll show you info about Andrew Kolasko Life Center, and a description of who Andrew Kolasko is. Enjoy! ABOUT MY ...",
      youtubevideoId: 'bBmNs8b8IIQ'
    },
    {
      imageName: 'https://i.ytimg.com/vi/lte-1_l2Lgc/hqdefault.jp',
      title: 'The Plus+ podcast #1 Is it better to look good or live a happy, healthy, longer life?',
      description: "This clip is from podcast # ‒ Is it better to look good or live a happy, healthy longer life? |Andrew Kolasko| Advanced Human ...",
      youtubevideoId: 'lte-1_l2Lgc'
    },
    {
      imageName: 'https://i.ytimg.com/vi/CWJb8jCRDWw/hqdefault.jpg',
      title: 'The Plus+ podcast #2 The Power of Outsourcing',
      description: "This clip is from podcast #2 ‒ The Power Of Outsourcing |Andrew Kolasko | Advanced Human Performance Specialist Sign up to ...",
      youtubevideoId: 'CWJb8jCRDWw'
    },
    {
      imageName: 'https://i.ytimg.com/vi/uIQQEhJ7FR4/hqdefault.jpg',
      title: 'The Plus+ podcst #3  How to increase your Longevity (Part1)',
      description: "This clip is from podcast # ‒How to increase your Longevity (Part1) |Andrew Kolasko| Advanced Human Performance Specialist ...",
      youtubevideoId: 'uIQQEhJ7FR4'
    },
    {
      imageName: 'https://i.ytimg.com/vi/PnG7TsFvjEs/hqdefault.jpg',
      title: 'The Plus+ podcast #4 The Why',
      description: "This clip is from podcast #4 ‒ The why |Andrew Kolasko | Advanced Human Performance Specialist #longevity #fitness #health ...",
      youtubevideoId: 'PnG7TsFvjEs'
    },
    {
      imageName: 'https://i.ytimg.com/vi/H4Eupz5tKok/hqdefault.jpg',
      title: 'The Plus+ podcast #5 What Really Matters',
      description: "This clip is from podcast #5 ‒ What Really Matters |Andrew Kolasko| Advanced Human Performance Specialist Sign up to receive ...",
      youtubevideoId: 'H4Eupz5tKok'
    },
  ]);

  useEffect(() => {

    dispatch(getYoutubeVideos());

    if(youtubeVideos.length === 0){
      console.log('EMPTY');
      ytVideos.forEach(element => {
        console.log('Criando youtube')
        dispatch(createYoutubeVideo(element));
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