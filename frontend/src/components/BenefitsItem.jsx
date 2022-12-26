import React from 'react';
import {GiStrong, GiHealthNormal, GiLifeBar} from 'react-icons/gi';
import { IoIosNutrition, IoIosFitness } from 'react-icons/io';
import {FaHandHoldingHeart} from 'react-icons/fa';

const BenefitsItem = ({itemValue = 0}) => {
  const items = [
    {
      title: 'Musculation',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint harum officia soluta beatae veritatis, accusamus velit!',
      icon: <GiStrong style={{fontSize: '4rem'}}/>
      },
    {
      title: 'Health',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint harum officia soluta beatae veritatis, accusamus velit!',
      icon: <GiHealthNormal style={{fontSize: '4rem'}}/>
    },
    {
      title: 'Fitness',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint harum officia soluta beatae veritatis, accusamus velit!',
      icon: <IoIosFitness style={{fontSize: '4rem'}}/>
    },
    {
      title: 'Nutrition',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint harum officia soluta beatae veritatis, accusamus velit!',
      icon: <IoIosNutrition style={{fontSize: '4rem'}}/>
    },
    {
      title: 'Bio-Tracking',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint harum officia soluta beatae veritatis, accusamus velit!',
      icon: <GiLifeBar style={{fontSize: '4rem'}}/>
    },
    {
      title: 'Longevity Living',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint harum officia soluta beatae veritatis, accusamus velit!',
      icon: <FaHandHoldingHeart style={{fontSize: '4rem'}}/>
    },
  ];

  return (
    <div style={{width: '10rem', display: 'inline-block', margin: '4rem 2rem'}}>
      <div style={{marginBottom: '0.7rem'}}>{items[itemValue].icon}</div>
      <h3 style={{marginBottom: '1.5rem'}}>{items[itemValue].title}</h3>
      <p style={{marginBottom: '1.5rem'}}>{items[itemValue].description}</p>
    </div>
  )
}

export default BenefitsItem