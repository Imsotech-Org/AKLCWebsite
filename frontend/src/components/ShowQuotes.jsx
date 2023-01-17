import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteQuote, getQuotes} from '../features/quotes/quotesSlice';
import {toast} from 'react-toastify';

const ShowQuotes = () => {

  const {quotes, isError, isSuccess, message} = useSelector((state) => state.quotes);
  const [quotesId, setQuotesId] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if(isError){
      toast.error(message);
    }

    dispatch(getQuotes());
  }, [dispatch, isError, isSuccess, message]);

  const onSubmit = (e) => {
      e.preventDefault();
      dispatch(deleteQuote(quotesId));
  }

  return (
    <div className="editQuotesContent" style={{marginTop: '5rem'}}>
      <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Current quotes content for eact page:</h4>

      <h5>Home page Quote:</h5>
      {
        quotes.map((item, index) => {
          if(item.place === 'Home'){
            return (
              <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p>{item.text}</p>
                <p>{item.author}</p>
                <div>
                  <label for="show">Show</label>
                  {
                    item.show ? (
                      <input type="checkbox" id="show" name="show" value={true} checked/>
                    ) : (
                      <input type="checkbox" id="show" name="show" value={false}/>
                    )
                  }
                </div>
                <form onSubmit={onSubmit}>
                  <button style={{width: '6rem', height: '3rem'}} onClick={() => setQuotesId(item._id)}>Delete</button>
                </form>
              </div>
            )
          }else return "";
        })
      }

      <h5>About page Quote:</h5>
      {
        quotes.map((item, index) => {
          if(item.place === 'About'){
            return (
              <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p>{item.text}</p>
                <p>{item.author}</p>
                <div>
                  <label htmlFor="show">Show</label>
                  {
                    item.show ? (
                      <input type="checkbox" id="show" name="show" value={true} checked/>
                    ) : (
                      <input type="checkbox" id="show" name="show" value={false}/>
                    )
                  }
                </div>
                <form onSubmit={onSubmit}>
                  <button style={{width: '6rem', height: '3rem'}} onClick={() => setQuotesId(item._id)}>Delete</button>
                </form>
              </div>
            )
          }else return "";
        })
      }
      
      <h5>Programs page Quote:</h5>
      {
        quotes.map((item, index) => {
          if(item.place === 'Program'){
            return (
              <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p>{item.text}</p>
                <p>{item.author}</p>
                <div>
                  <label htmlFor="show">Show</label>
                  {
                    item.show ? (
                      <input type="checkbox" id="show" name="show" value={true} checked/>
                    ) : (
                      <input type="checkbox" id="show" name="show" value={false}/>
                    )
                  }
                </div>
                <form onSubmit={onSubmit}>
                  <button style={{width: '6rem', height: '3rem'}} onClick={() => setQuotesId(item._id)}>Delete</button>
                </form>
              </div>
            )
          }else return "";
        })
      }

      <h5>Blog page Quote:</h5>
      {
        quotes.map((item, index) => {
          if(item.place === 'Blog'){
            return (
              <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p>{item.text}</p>
                <p>{item.author}</p>
                <div>
                  <label htmlFor="show">Show</label>
                  {
                    item.show ? (
                      <input type="checkbox" id="show" name="show" value={true} checked/>
                    ) : (
                      <input type="checkbox" id="show" name="show" value={false}/>
                    )
                  }
                </div>
                <form onSubmit={onSubmit}>
                  <button style={{width: '6rem', height: '3rem'}} onClick={() => setQuotesId(item._id)}>Delete</button>
                </form>
              </div>
            )
          }else return "";
        })
      }
    </div>
  )
}

export default ShowQuotes