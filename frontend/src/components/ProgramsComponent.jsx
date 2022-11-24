import React from 'react';
import ProgramItem from './ProgramItem';

const ProgramsComponent = () => {
  return (
    <div className='programsContainer'>
      <h2>Programs and Resources</h2>
      <ProgramItem programName={'67 Transformational Program'} programPrice={99}/>
      <ProgramItem programName={'Annual One-On-One Training and Support'} programPrice={199}/>
      <ProgramItem programName={'The Foundations for Health, Fitness and Longevity'} programPrice={99}/>
      <ProgramItem programName={'Membership Program'} programPrice={99}/>
      <h5 style={{textAlign: 'left', padding: '2rem', color: '#363d10', fontSize: '1.5rem'}}>Money back guaranteed *</h5>
    </div>
  )
}

export default ProgramsComponent