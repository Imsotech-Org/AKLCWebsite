import React from 'react';
import {GiStrong, GiHealthNormal, GiLifeBar, GiOldKing} from 'react-icons/gi';
import { IoIosNutrition, IoIosFitness } from 'react-icons/io';
import {FaHandHoldingHeart} from 'react-icons/fa';

const BenefitsItem = ({itemValue = 0}) => {
  const items = [
    {
     title: 'Musculation',
     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti.',
     icon: <GiStrong style={{fontSize: '4rem'}}/>
    },
    {
     title: 'Health',
     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti.',
     icon: <GiHealthNormal style={{fontSize: '4rem'}}/>
    },
    {
     title: 'Fitness',
     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti.',
     icon: <IoIosFitness style={{fontSize: '4rem'}}/>
    },
    {
     title: 'Nutrition',
     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti.',
     icon: <IoIosNutrition style={{fontSize: '4rem'}}/>
    },
    {
     title: 'Bio-Tracking',
     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti.',
     icon: <GiLifeBar style={{fontSize: '4rem'}}/>
    },
    {
     title: 'Longevity Living',
     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti.',
     icon: <FaHandHoldingHeart style={{fontSize: '4rem'}}/>
    },
  ];

  return (
    <div style={{width: '12rem', display: 'inline-block', margin: '4rem 2rem'}}>
      {items[itemValue].icon}
      <h3>{items[itemValue].title}</h3>
      <p>{items[itemValue].description}</p>
    </div>
  )
}

export default BenefitsItem