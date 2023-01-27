import React from 'react'

const YoutubeVideo = ({item, index}) => {
  const backgroundChoice = (num) => {
    if(num > 2){
      num = (num)%2;
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
        background = '#F3F1F3';
        break;
      default:
        background = '#F3F1F3';
        break;
    }

    return background;
  }

  return (
    <div className='youtubeVideoContainer' style={{backgroundColor: backgroundChoice(index)}}>
      <img src={item.imageName} alt="" />
      <div className="youtubeVideoInfo">
        <h3 style={{color: (index%2) ? '#F3F1F3' : '#363D10'}}>{item.title}</h3>
        <p style={{color: (index%2) ? '#F3F1F3' : '#879635'}}>{item.description}</p>
        <small><a target='_blank' rel="noreferrer" style={{color: '#502c49'}} href={`https://www.youtube.com/watch?v=${item.youtubevideoId}`}>Watch now!</a></small>
      </div>
    </div>
  )
}

export default YoutubeVideo