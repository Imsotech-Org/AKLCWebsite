import React, {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {getSystemImages, reset} from '../features/systemImages/systemImageSlice';
import {useSelector, useDispatch} from 'react-redux';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';

const ImageSlider = ({ showQuotes = true }) => {
  const {systemImages, systemImage, isError, isSuccess, isLoading, message} = useSelector((state) => state.systemImage);
  const [imagesLoaded, setImagesLoaded] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if(isError){
      toast.error(message);
    }

    dispatch(getSystemImages());
    if(isSuccess){
      // systemImages.forEach((item) => {
      //   if(item.place === 'Home' && item.show){
      //     setImagesLoaded(oldArray => [...oldArray, {id: item._id, name: `${process.env.PUBLIC_URL}systemImgs/${item.name}`, place: item.place, show: item.show}]);
      //   }
      // })
      
      console.log(systemImages);
      for (let index = 0; index < systemImages.length; index++) {
        if(systemImages[index].place === 'Home' && systemImages[index].show){
          setImagesLoaded( arr => [...arr, [systemImages[index].name]]);
        }
      }
    }
  }, [dispatch, isError, isSuccess]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? systemImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === systemImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className='sliderStyle'>
      <div className='leftArrowStyle' onClick={goToPrevious}><IoIosArrowBack/></div>
      <div className='rightArrowStyle' onClick={goToNext}><IoIosArrowForward/></div>
      {showQuotes ?
        <div>
          <div className='slideQuote'>"I am not concerned that you have fallen. I am concerned that you will rise"</div>
          <div className='slideQuoteAuth'>-Abraham Lincoln</div>
        </div> :
        ''}
      <div className='slideStyle' style={{backgroundImage: `url(${process.env.PUBLIC_URL}systemImgs/${imagesLoaded[currentIndex]})`}}></div>
    </div>
  )
}

export default ImageSlider