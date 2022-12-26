import React from 'react';
import ProgramItem from './ProgramItem';

const ProgramsComponent = ({title = 'Programs and Resources'}) => {
  return (
    <div className='programsContainer'>
      <h2>{title}</h2>
      <ProgramItem programName={'67 Transformational Program'} programPrice={99}/>
      <ProgramItem programName={'Annual One-On-One Training and Support'} programPrice={199}/>
      <h5 style={{textAlign: 'left', padding: '2rem', color: '#502c49', fontSize: '1.5rem'}}>Money back guaranteed *</h5>
    </div>
  )
}

export default ProgramsComponent