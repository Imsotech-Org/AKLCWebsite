import React from 'react';
import img16 from '../assets/media/img16.jpg';

const Recommendation = () => {
  return (
    <div className='reccomendationsContainer'>
      <div className="reccomendationsItems">
        <div className="reccomendations">
          <h4>Reccomendations</h4>
          <p>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. <br />&emsp;&emsp;Sed tristique vestibulum ultrices. Nulla nulla tellus, accumsan in interdum et, consectetur sit amet felis. Ut interdum non dolor in sagittis. Donec ut magna diam. Nullam et lectus erat. Donec et nisi sem. <br />&emsp;&emsp;Nunc interdum interdum mollis. Curabitur orci dui, luctus eu justo a, bibendum vehicula tellus. Curabitur cursus rutrum orci quis pharetra.</p>
        </div>
        <div className="reccomendationsQuotes">
          <h4>Quotes</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci sem, consectetur id ullamcorper eu, venenatis feugiat metus. Nunc sed ullamcorper lectus, vel lacinia sem. In ullamcorper fermentum risus nec finibus. 
          <br />&emsp;&emsp;Sed tristique vestibulum ultrices. Nulla nulla tellus, accumsan in interdum et, consectetur sit amet felis. Ut interdum non dolor in sagittis. Donec ut magna diam. Nullam et lectus erat. Donec et nisi sem. 
          <br />&emsp;&emsp;Nunc interdum interdum mollis. Curabitur orci dui, luctus eu justo a, bibendum vehicula tellus. Curabitur cursus rutrum orci quis pharetra.</p>
        </div>
        <div className="reccomendationsImage">
          <img src={img16} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Recommendation