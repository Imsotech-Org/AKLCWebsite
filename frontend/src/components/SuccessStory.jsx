import React from 'react';
import img16 from '../assets/media/img16.jpg';

const SuccessStory = () => {
  return (
    <div className='successContainer'>
      <h2>Andrew's Success Story</h2>
      <div className="successItems">
        <div className="successImpact">
          <h4>Impact</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. 
          Sed tristique vestibulum ultrices. Nulla nulla tellus, accumsan in interdum et, consectetur sit amet felis. Ut interdum non dolor in sagittis. Donec ut magna diam. Nullam et lectus erat. Donec et nisi sem. Nunc interdum interdum mollis. Curabitur orci dui, luctus eu justo a, bibendum vehicula tellus. Curabitur cursus rutrum orci quis pharetra.</p>
        </div>
        <div className="successImage">
          <img src={img16} alt="" />
        </div>
        <div className="successAccomplishments">
          <h4>Accomplishments</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. 
          Sed tristique vestibulum ultrices. Nulla nulla tellus, accumsan in interdum et, consectetur sit amet felis. Ut interdum non dolor in sagittis. Donec ut magna diam. Nullam et lectus erat. Donec et nisi sem. Nunc interdum interdum mollis. Curabitur orci dui, luctus eu justo a, bibendum vehicula tellus. Curabitur cursus rutrum orci quis pharetra.</p>
        </div>
      </div>
    </div>
  )
}

export default SuccessStory