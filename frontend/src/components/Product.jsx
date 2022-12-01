import React from 'react'

const Product = ({item, index}) => {

  const backgroundChoice = (num) => {
    if(num > 2){
      num = (num+1)%2;
    }

    let background = '';
    switch(num) {
      case 0:
        background = '#F3F1F3';
        break;
      case 1:
        background = '#363D10';
        break;
      case 2:
        background = '#879635';
        break;
      default:
        background = '#F3F1F3';
        break;
    }

    return background;
  }

  const liColor = (num) => {
    if(num > 2){
      num = (num+1)%2;
    }

    let color = '';
    switch(num) {
      case 0:
        color = '#502c49';
        break;
      case 1:
        color = '#879635';
        break;
      case 2:
        color = '#363D10';
        break;
      default:
        color = '#502c49';
        break;
    }

    return color;
  }


  return (
    <div className="productContainer" style={{background: backgroundChoice(index)}}>
      <img src={item.image} alt="" />
      <div className="productInfo" style={{color: index===1 || index===2 ? '#F3F1F3' : '#363D10'}}>
        <h3 style={{display: 'inline-block'}}>{item.title}</h3>
        <h4 style={{display: 'inline-block'}}>${item.price}</h4>
        <p style={{color: index===1 || index===2 ? '#F3F1F3' : '#879635'}}>{item.description}</p>
        <ul style={{color: liColor(index)}}>
          {item.topics.map((topic) => <li style={{display: 'inline-block', margin: '0 2rem 2rem 0'}}>· {topic}</li>)}
        </ul>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Product