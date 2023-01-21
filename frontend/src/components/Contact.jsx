import React, {useState} from 'react';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Contact = ({open, onClose}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    })

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        toast.success('Message Sent Successfully!');
        navigate('/');
        open = false;
        setFormData({
            name: '',
            email: '',
            description: ''
        });
    }

    if(!open) return null
    return (
        <div style={{zIndex: '999'}} onClick={onClose} className='overlay'>
            <div onClick={(e) => {e.stopPropagation()}} className="modalContainer" style={{marginTop: '7.5rem'}}>
                <p style={{cursor: 'pointer'}} onClick={onClose} className='closeBtn'>X</p>
                <div style={{textAlign: 'center', padding: '2rem 4rem', margin: '0 auto', width: '100%'}}>
                    <h3 style={{color: '#363d10', fontSize: '2.5rem'}}>Contact Us</h3>
                    <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <input style={{width: '100%', height: '3rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="text" placeholder='Your Name' id='name' name='name' onChange={onChange} />
                        <input style={{width: '100%', height: '3rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="text" placeholder='Your Email' id='email' name='email' onChange={onChange} />
                        <textarea style={{width: '100%', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem', padding: '0.5rem 0 0 0.5rem'}} placeholder='Your Message' name="description" id="description" cols="30" rows="10" onChange={onChange}></textarea>
                        <p>Contact Email: andy@kolasko.com</p>
                        <div className="shoppingInfo" style={{margin: 0, width: '100%'}}>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact