import React, {useState, useEffect} from 'react';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className='sliderStyle'>
      <div className='leftArrowStyle' onClick={goToPrevious}><IoIosArrowBack/></div>
      <div className='rightArrowStyle' onClick={goToNext}><IoIosArrowForward/></div>
      <div className='slideQuote'>"I am not concerned that you have fallen. I am concerned that you will rise"</div>
      <div className='slideQuoteAuth'>-Abraham Lincoln</div>
      <div className='slideStyle' style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
    </div>
  )
}

export default ImageSlider