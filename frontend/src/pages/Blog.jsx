import React from 'react';
import img6 from '../assets/media/img6.JPG';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import YoutubeVideo from '../components/YoutubeVideo';

const Blog = () => {

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
      <div style={{paddingTop: '3.5rem'}}>
        <div className='containerStyle'>
          <ImageSlider typeOfSlide="Blog"/>
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