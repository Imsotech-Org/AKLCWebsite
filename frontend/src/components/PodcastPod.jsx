import React from 'react'

const PodcastPod = ({title = 'Title', link = 'https://www.google.com/'}) => {
  return (
    <div style={{display: 'flex'}}>
      <div className="podcastPod">
        <h5>{title}</h5>
        <a href={link} target='_blank' rel="noreferrer">{link}</a>
      </div>
    </div>
  )
}

export default PodcastPod