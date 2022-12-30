import React, {useState} from 'react'

const Product = ({item, index}) => {

  let [openMore, setOpenMore] = useState(false);

  const toggleOpen = () => {
    setOpenMore(openMore => !openMore);
    console.log(openMore);
  };

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
        background = '#879635';
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
        color = '#502c49';
        break;
      case 2:
        color = '#879635';
        break;
      default:
        color = '#363D10';
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
        <p style={{color: index===1 || index===2 ? '#F3F1F3' : '#879635', marginBottom: '0.8rem'}}>{item.description}</p>
        <ul style={{color: liColor(index)}}>
          {item.topics.map((topic) => <li style={{display: 'inline-block', margin: '0 2rem 1rem 0'}}>· {topic}</li>)}
          {openMore && item.longTopics.map((topic) => <li style={{display: 'inline-block', margin: '0 2rem 1rem 0'}}>· {topic}</li>)}
          {
            item.long ? (
              <button style={{border: 'none', backgroundColor: 'transparent', color: '#363D10', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem', marginTop: '-1rem', cursor: 'pointer'}} onClick={toggleOpen} >
                {openMore ? ('Less About') : ('More About')}
              </button>
            ) : ('')
          }
        </ul>
        <button className='productInfoBtn'>Subscribe</button>
      </div>
    </div>
  )
}

export default Product