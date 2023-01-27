import React from 'react';
import img16 from '../assets/media/thumbnail_next-pic-65.jpeg';

const SuccessStory = () => {
  return (
    <div className='successContainer'>
      <h2>Andrew's Success Story</h2>
      <div className="successItems">
        <div className="successImpact">
          <h4>Impact</h4>
          <p>Helped make health and fitness a daily way of life for dozens of men between the ages of 45 and 65. Dedicated life to guiding men in their later years to consistently improve their health and fitness levels and help them reach the best of their physical potential.  Have taught and motivated men to make gains in their musculation, keep belly fat off, adopt an inspiring mindset towards fitness and exercise, gain phenomenal momentum that has lead to a healthy life month after month, year after year, supercharging their energy and vitality, and been a catalyst for his clients embracing an upbeat outlook and sense of well-being that has positively permeated the lives of their families, friends, community and business associates.</p>
        </div>
        <div className="successImage">
          <img src={img16} alt="" />
        </div>
        <div className="successAccomplishments">
          <h4>Accomplishments</h4>
          <p>Visionary health leader and former first place champion natural bodybuilder with more than 40 years of weight training, athletic performance and sound eating and nutritional practices.</p>
          <p>Achieved the rare air balance of combining the right amount of real world fitness education with longevity based emerging sciences</p>
          <p>The look, performance and body mechanics and metabolic health of men several years younger than his chronological age of 55.</p>
          <p>Clean, natural athlete, never having used steroids and/or any performance enhancing drugs</p>
          <p>Advanced Human Performance Specialist practicing exclusively in musculation, fitness, nutrition and longevity living for men aged 45+</p>
        </div>
      </div>
    </div>
  )
}

export default SuccessStory