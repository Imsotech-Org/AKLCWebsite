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

  return (
    <div style={{paddingTop: '5.5rem'}}>
      <div className='containerStyle'>
        <ImageSlider slides={slides} showQuotes={false}/>
      </div>
      <Subscribe/>
      <h2>Products and Programs</h2>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Programs