import React from 'react';
import BenefitsItem from './BenefitsItem';

const Benefits = () => {
  return (
    <div className='benefitsContainer'>
      <h2>Benefits of Andrew Kolasko Life Center</h2>
      <div className="benefitsItems" style={{textAlign: 'left'}}>
        <div className="leftUl">
          <ul>
            <li>
              <BenefitsItem itemValue={0} />
            </li>
            <li>
              <BenefitsItem itemValue={1} />
            </li>
            <li>
              <BenefitsItem itemValue={2} />
            </li>
          </ul>
        </div>
        <div className="rightUl">
          <ul>
            <li>
              <BenefitsItem itemValue={3} />
            </li>
            <li>
              <BenefitsItem itemValue={4} />
            </li>
            <li>
              <BenefitsItem itemValue={5} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Benefits