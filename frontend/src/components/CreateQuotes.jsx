import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createQuote} from '../features/quotes/quotesSlice';
import {toast} from 'react-toastify';

const CreateQuotes = () => {

  const [quoteData, setQuoteData] = useState({
    text: '',
    author: '',
    place: '',
    show: false
  })

  const dispatch = useDispatch();

  const onChange = (e) => {
    setQuoteData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createQuote(quoteData));
    toast.success('Quote Created');
  }

  return (
    <div style={{marginTop: '2rem'}}>
      <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Create Quote:</h4>
      <form onSubmit={onSubmit} style={{width: '100%'}}>
        <div style={{display: 'block'}}>
          <label htmlFor="text" style={{width: '100%'}}>
              Text<br/>
              <textarea style={{ height: '3.5rem', width: '100%', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} id="text" name="text" rows="4" onChange={onChange}/>
          </label><br />
          <label htmlFor="author">
            Author<br/>
            <input style={{ width: '15rem', height: '2.7rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="text" name="author" id="author" onChange={onChange}/>
          </label><br />
          <div style={{display: 'flex', gap: '2rem'}}>
            <label htmlFor='place'>
              Enter where you want the image to be:<br/>
              <select style={{width: '80%', height: '2.5rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', fontSize: '1.2rem',paddingLeft: '0.5rem', color: '#502c49', marginBottom: '1rem'}} name="place" id="place" onChange={onChange}>
                <option value="">Select place of storage</option>
                <option value="Home">Home</option>
                <option value="About">About</option>
                <option value="Programs">Programs</option>
                <option value="Blog">Blog</option>
                <option value="Videos">Videos</option>
              </select>
            </label><br />
            <div>
              <div style={{display: 'flex'}}>
                <label htmlFor="show">
                  Show<br/>
                  <input type="radio" name="show" id="show" value={true} onChange={onChange}/>
                </label><br />
                <label style={{marginLeft: '1rem'}} htmlFor="show">
                  No Show<br/>
                  <input type="radio" name="show" id="show" value={false} onChange={onChange}/>
                </label>
              </div>
            </div>
          </div>
        </div>
        <button style={{textDecoration: 'none', backgroundColor: '#879635', padding: '0.5rem 1rem', borderRadius: '10px', color: '#F3F1F3', fontSize: '1.5rem', border: 'none', width: '100%'}}>Create Quote</button>
      </form>
    </div>
  )
}

export default CreateQuotes