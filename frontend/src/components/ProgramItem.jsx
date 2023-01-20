import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const ProgramItem = ({programImage, programName, programPrice, programDescription, programTopics}) => {

  const [firstTopics, setFirstTopics] = useState([]);

  useEffect(() => {
    setFirstTopics(programTopics.split('_'));
  }, [programTopics]);

  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  return (
    <div className='programItemContainer'>
      <div className='programItemHeader'>
        <img src={`${process.env.PUBLIC_URL}programsImgs/${programImage}`} alt="Program-img" className='programItemHeaderImage'/>
        <div className='programItemHeaderInfo'>
          <h3>{programName}</h3>
          <h5>{formatter.format(programPrice)}</h5>
        </div>
      </div>
      <p style={{height: '70px', overflow:'hidden'}}>{programDescription}</p>
      <hr />
      <ul style={{listStyleType: 'none', height: '90px', overflow:'hidden'}}>
        {
          firstTopics.map((item,index) => {
            return (<li style={{margin: '0.5rem 0'}} key={index}>+ {item}</li>)
          })
        }        
      </ul>
      <Link className='linkBtn' to='/programs'>Get Details</Link>
    </div>
  )
}

export default ProgramItem