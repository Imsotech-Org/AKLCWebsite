import React from 'react';
import img1 from '../assets/media/img1.jpg';
import img2 from '../assets/media/img2.jpg';
import img3 from '../assets/media/img3.jpg';
import img4 from '../assets/media/img4.JPG';
import img5 from '../assets/media/img5.JPG';
import img6 from '../assets/media/img6.JPG';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import YoutubeVideo from '../components/YoutubeVideo';

const Blog = () => {
  const slides = [
    {url: img1, title: 'Image 1'},
    {url: img2, title: 'Image 2'},
    {url: img3, title: 'Image 3'},
    {url: img4, title: 'Image 4'},
    {url: img5, title: 'Image 5'},
    {url: img6, title: 'Image 6'}
  ];

  const youtubeVideos = [
    {
      title: 'Lorem ipsum dolor sit amet.',
      videoUrl: '',
      videoImage: img6,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. ',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      videoUrl: '',
      videoImage: img6,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. ',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      videoUrl: '',
      videoImage: img6,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. ',
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      videoUrl: '',
      videoImage: img6,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. ',
    },
    
  ];

  return (
    <div>
      <div style={{paddingTop: '5.5rem'}}>
        <div className='containerStyle'>
          <ImageSlider slides={slides} showQuotes={false}/>
        </div>
        <Subscribe color={'#363D10'}/>
        <h2 style={{textAlign: 'center', fontSize: '49px', paddingTop: '2.5rem', color: '#363D10', marginBottom: '2rem'}}>Youtube Videos</h2>
        {
          youtubeVideos.map((item, index) => <YoutubeVideo item={item} index={index}/>)
        }
        <Footer/>
      </div>
    </div>
  )
}

export default Blog