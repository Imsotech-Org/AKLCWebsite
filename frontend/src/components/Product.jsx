import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Product = ({item, index}) => {

  let [openMore, setOpenMore] = useState(false);
  const [firstTopics, setFirstTopics] = useState([]);
  const [longTopics, setLongTopics] = useState([]);

  useEffect(() => {
    setFirstTopics(item.firstTopics.split('_'));
    if(item.longTopics !== ""){
      setLongTopics(item.longTopics.split('_'));
    }
  }, [item.firstTopics]);

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
        background = '#F3F1F3';
        break;
      default:
        background = '#879635';
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

  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });


  return (
    <div className="productContainer" style={{background: backgroundChoice(index)}}>
      <img src={`${process.env.PUBLIC_URL}programsImgs/${item.programImage}`} alt="" />
      <div className="productInfo" style={{color: index%2 ? '#F3F1F3' : '#363D10'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 1rem 2rem 0'}}>
          <h3 style={{display: 'inline-block'}}>{item.title}</h3>
          <h4 style={{display: 'inline-block'}}>{formatter.format(item.price)}</h4>
        </div>
        <p style={{color: index%2 ? '#F3F1F3' : '#363D10', marginBottom: '1rem'}}>{item.description}</p>
        <ul style={{color: liColor(index), marginBottom: '3rem'}}>
          {firstTopics.map((topic) => <li style={{margin: '0 2rem 1rem 0'}}>+ {topic}</li>)}
          {openMore && longTopics.map((topic) => <li style={{display: 'inline-block', margin: '0 2rem 1rem 0'}}>+ {topic}</li>)}
          {
            longTopics ? (
              <button style={{border: 'none', backgroundColor: 'transparent', color: '#363D10', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem', marginTop: '-1rem', cursor: 'pointer'}} onClick={toggleOpen} >
                {openMore ? ('Less About') : ('More About')}
              </button>
            ) : ('')
          }
        </ul>
        <Link to={`/payment/${item._id}`} className='productInfoBtn' style={{textDecoration: 'none', padding: '1rem 40%'}}>Buy Now</Link>
      </div>
    </div>
  )
}

export default Product