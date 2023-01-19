import React from 'react';

const ShoppingItem = ({programImage, programTitle, programPrice, programDescription}) => {
  return (
    <div className='outerShoppingItemContainer'>
      <div className='shoppingItemContainer'>
        <img src={`${process.env.PUBLIC_URL}programsImgs/${programImage}`} alt="" />
        <div className="shoppingItemInfo">
          <div className="shoppingItemInfoMain" >
            <h4>{programTitle}</h4>
            <h4>${programPrice}</h4>
          </div>
          <p>{programDescription}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default ShoppingItem