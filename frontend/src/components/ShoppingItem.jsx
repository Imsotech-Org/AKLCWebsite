import React from 'react';
import img1 from '../assets/media/img1.jpg';

const ShoppingItem = () => {
  return (
    <div className='outerShoppingItemContainer'>
      <div className='shoppingItemContainer'>
        <img src={img1} alt="" />
        <div className="shoppingItemInfo">
          <div className="shoppingItemInfoMain" >
            <h4>Name of item x</h4>
            <h4>$99</h4>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat illum fugit nihil odit inventore fuga!</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default ShoppingItem