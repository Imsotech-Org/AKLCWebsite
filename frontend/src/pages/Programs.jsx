import React from 'react';
import img1 from '../assets/media/img1.jpg';
import img2 from '../assets/media/img2.jpg';
import img3 from '../assets/media/img3.jpg';
import img4 from '../assets/media/img4.JPG';
import img5 from '../assets/media/img5.JPG';
import img6 from '../assets/media/img6.JPG';
import ImageSlider from '../components/ImageSlider';
import Subscribe from '../components/Subscribe';
import Product from '../components/Product';
import Footer from '../components/Footer';


const Programs = () => {
  const slides = [
    {url: img1, title: 'Image 1'},
    {url: img2, title: 'Image 2'},
    {url: img3, title: 'Image 3'},
    {url: img4, title: 'Image 4'},
    {url: img5, title: 'Image 5'},
    {url: img6, title: 'Image 6'}
  ];

  const programs = [
    {
      title: '67 Transformational Program',
      image: img1,
      price: 99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. ',
      topics: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    },
    {
      title: 'Annual One-On-One Training and Support',
      image: img1,
      price: 199,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. ',
      topics: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    }
  ];

  return (
    <div style={{paddingTop: '5.5rem'}}>
      <div className='containerStyle'>
        <ImageSlider slides={slides} showQuotes={false}/>
      </div>
      <Subscribe color='#363d10'/>
      <h2 style={{textAlign: 'center', fontSize: '49px', paddingTop: '2.5rem', color: '#363D10'}}>Products and Programs</h2>
      {
        programs.map((item, index) => <Product item={item} index={index}/>)
      }
      <Footer/>
    </div>
  )
}

export default Programs