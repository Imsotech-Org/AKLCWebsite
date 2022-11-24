import React from 'react';
import image1 from '../assets/media/img1.jpg';

const ProgramItem = ({programName, programPrice}) => {
  return (
    <div className='programItemContainer'>
      <div className='programItemHeader'>
        <img src={image1} alt="Program-img" className='programItemHeaderImage'/>
        <div className='programItemHeaderInfo'>
          <h3>{programName}</h3>
          <h5>${programPrice}</h5>
        </div>
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate iure sequi consequatur sunt quod itaque amet, dolor dolores suscipit</p>
      <hr />
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
      </ul>
      <button>Get Details</button>
    </div>
  )
}

export default ProgramItem