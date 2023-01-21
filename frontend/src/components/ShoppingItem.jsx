import React from 'react';

const ShoppingItem = ({programImage, programTitle, programPrice, programDescription}) => {
  return (
    <div className='outerShoppingItemContainer'>
      <div className='shoppingItemContainer'>
        <img src={`${process.env.PUBLIC_URL}programsImgs/${programImage}`} alt="" />
        <div className="shoppingItemInfo">
          <div className="shoppingItemInfoMain" >
            <h4 style={{fontSize: '2.5rem', padding: '1rem'}}>{programTitle}</h4>
          </div>
          <p style={{fontSize: '1rem', padding: '1rem'}}>{programDescription}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default ShoppingItem