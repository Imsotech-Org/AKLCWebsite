import React from 'react';
import img1 from '../assets/media/img1.jpg';
import img2 from '../assets/media/img2.jpg';
import img3 from '../assets/media/img3.jpg';
import img4 from '../assets/media/img4.JPG';
import img5 from '../assets/media/img5.JPG';
import img6 from '../assets/media/img6.JPG';
import ImageSlider from '../components/ImageSlider';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import VideosItem from '../components/VideosItem';

const Videos = () => {
  const slides = [
    {url: img1, title: 'Image 1'},
    {url: img2, title: 'Image 2'},
    {url: img3, title: 'Image 3'},
    {url: img4, title: 'Image 4'},
    {url: img5, title: 'Image 5'},
    {url: img6, title: 'Image 6'}
  ];

  const videos = [
    {
      videoUrl: '',
      videoImage: img6,
    },
    {
      videoUrl: '',
      videoImage: img6,
    },
    {
      videoUrl: '',
      videoImage: img6,
    },
    {
      videoUrl: '',
      videoImage: img6,
    },
  ];

  return (
    <div>
      <div style={{paddingTop: '5.5rem'}}>
        <div className='containerStyle'>
          <ImageSlider slides={slides} showQuotes={false}/>
        </div>
        <Subscribe color={'#363D10'}/>
        <h2 style={{textAlign: 'center', fontSize: '49px', paddingTop: '2.5rem', color: '#363D10', paddingBottom: '5rem'}}>Videos</h2>
        {
          videos.map((item, index) => <VideosItem item={item} index={index}/>)
        }
        <Footer/>
      </div>
    </div>
  )
}

export default Videos