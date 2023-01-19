import React from 'react';
import {Link} from 'react-router-dom';

const ProgramItem = ({programImage, programName, programPrice, programDescription, programTopics}) => {

  const showTopics = () => {
    const programTopicsArray = programTopics.split('_');

    if(programTopicsArray.length > 2){
      return (
        <ul>
          
        </ul>
      )
    }else {

    }
  }

  return (
    <div className='programItemContainer'>
      <div className='programItemHeader'>
        <img src={`${process.env.PUBLIC_URL}programsImgs/${programImage}`} alt="Program-img" className='programItemHeaderImage'/>
        <div className='programItemHeaderInfo'>
          <h3>{programName}</h3>
          <h5>${programPrice}</h5>
        </div>
      </div>
      <p style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', maxHeight: '50%'}}>{programDescription}</p>
      <hr />
      <ul>
        {
          
        }
        <li style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', maxHeight: '50%'}}>+ Lorem ipsum dolor sit amet consectetur.</li>
      </ul>
      <Link className='linkBtn' to='/programs'>Get Details</Link>
    </div>
  )
}

export default ProgramItem