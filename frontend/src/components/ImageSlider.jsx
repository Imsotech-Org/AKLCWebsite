import React, {useState, useEffect} from 'react';
import {getSystemImages} from '../features/systemImages/systemImageSlice';
import {useSelector, useDispatch} from 'react-redux';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';

const ImageSlider = ({ showQuotes = true, quote = "", author="", typeOfSlide = "Home" }) => {
  const {systemImages, isError} = useSelector((state) => state.systemImage);
  const [imagesLoaded, setImagesLoaded] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFileType, setCurrentFileType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if(imagesLoaded.length === 0){
      console.log('Test')
      dispatch(getSystemImages());
      for (let index = 0; index < systemImages.length; index++) {
        if(systemImages[index].place === typeOfSlide && systemImages[index].show){
          setImagesLoaded( arr => [...arr, [systemImages[index].name]]);
        }
      }
      console.log(systemImages);
    }
  }, [dispatch, isError, systemImages, imagesLoaded, typeOfSlide]);

  useEffect(() => {
    setTimeout(function() {
      if(imagesLoaded.length > 0){
        setCurrentFileType(imagesLoaded[currentIndex][0].split('.')[1]);
        console.log(currentFileType);
        console.log(imagesLoaded[currentIndex][0]);
        console.log(`${process.env.PUBLIC_URL}systemImgs/${imagesLoaded[currentIndex][0]}`);
      }
    }, 1000); 
  }, [currentIndex, imagesLoaded])

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? systemImages.length - 2 : currentIndex - 2;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = imagesLoaded.length;
    let newIndex = currentIndex + 1;
    if(newIndex === isLastSlide){
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
    console.log(currentIndex);
    console.log(imagesLoaded[currentIndex][0].split('.')[1]);
  }

  return (
    <div className='sliderStyle'>
      {
        currentFileType === 'mp4' ? (<div className='slideStyle'><video style={{width: '100%', height: '100%'}} controls src={imagesLoaded[currentIndex][0] ? `${process.env.PUBLIC_URL}systemImgs/${imagesLoaded[currentIndex][0]}` : ``}></video></div>) : (<div className='slideStyle' style={{backgroundImage: `url(${process.env.PUBLIC_URL}systemImgs/${imagesLoaded[currentIndex]})`}}></div>)
      }
      {
        currentFileType === 'mp4' ? (<div></div>) : (<div>
          <div className='leftArrowStyle' onClick={goToPrevious}><IoIosArrowBack/></div>
          <div className='rightArrowStyle' onClick={goToNext}><IoIosArrowForward/></div>
          {showQuotes ?
            <div>
              <div className='slideQuote'>{quote}</div>
              <div className='slideQuoteAuth'>-{author}</div>
            </div> :
            ''}
        </div>)
      }
    </div>
  )
}

export default ImageSlider