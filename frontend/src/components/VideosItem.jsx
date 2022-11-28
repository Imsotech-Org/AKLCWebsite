import React from 'react'

const VideosItem = ({item, index}) => {
   const backgroundChoice = (num) => {
    if(num > 2){
      num = (num+1)%2;
    }

    let background = '';
    switch(num) {
      case 0:
        background = '#F3F1F3';
        break;
      case 1:
        background = '#879635';
        break;
      case 2:
        background = '#363D10';
        break;
      default:
        background = '#F3F1F3';
        break;
    }

    return background;
  }

  return (
   <div className='videoContainer' style={{backgroundColor: backgroundChoice(index)}}>
     <img src={item.videoImage} alt="" />
     <img src={item.videoImage} alt="" />
   </div>
  )
}

export default VideosItem