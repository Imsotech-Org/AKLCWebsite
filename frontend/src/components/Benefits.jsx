import React from 'react';
import BenefitsItem from './BenefitsItem';

const Benefits = () => {
  return (
    <div className='benefitsContainer'>
      <h2>Benefits of Andrew Kolasko Life Center</h2>
      <BenefitsItem itemValue={0}/>
      <BenefitsItem itemValue={1}/>
      <BenefitsItem itemValue={2}/>
      <BenefitsItem itemValue={3}/>
      <BenefitsItem itemValue={4}/>
      <BenefitsItem itemValue={5}/>
    </div>
  )
}

export default Benefits