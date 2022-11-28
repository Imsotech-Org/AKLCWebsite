import React from 'react'

const YoutubeVideo = ({item, index}) => {
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
    <div className='youtubeVideoContainer' style={{backgroundColor: backgroundChoice(index)}}>
      <img src={item.videoImage} alt="" />
      <div className="youtubeVideoInfo">
        <h3 style={{color: index===1 || index===2 ? '#F3F1F3' : '#363D10'}}>{item.title}</h3>
        <p style={{color: index===1 || index===2 ? '#F3F1F3' : '#879635'}}>{item.description}</p>
        <small><a style={{color: index===1 || index===2 ? '#F3F1F3' : ''}} href={item.videoUrl}>Youtube Link</a></small>
      </div>
    </div>
  )
}

export default YoutubeVideo