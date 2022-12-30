import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {getSystemImage, reset} from '../features/systemImages/systemImageSlice';

const Modal = ({image, id, open, onClose}) => {
    const [place, setPlace] = useState('');
    const [show, setShow] = useState(false);
    const {systemImage, isError, isSuccess, isLoading, message} = useSelector((state) => state.systemImage);

    const [imageLoaded, setImageLoaded] = useState({name: '', place: '', show: ''});

    const dispatch = useDispatch();

    useEffect(() => {
        if(isError){
            toast.error(message);
          }
      
          dispatch(getSystemImage(id));
          setImageLoaded({
            name: systemImage.name,
            place: systemImage.place,
            show: systemImage.show
          })
          setShow(systemImage.show);
    }, [dispatch, id, isError, message, systemImage.name, systemImage.place, systemImage.show]);

    const onChange = (e) => {
        if(e.target.name === 'place'){
            setPlace(e.target.value);
        }else{
            setShow(!show)
        }
    }

    const onSave = (e) => {
        toast.success('Changes saved');
        onClose()
    }

    if(!open) return null
    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="modalContainer">
                <img src={image} alt="" />
                <div className="modalRight">
                    <p style={{cursor: 'pointer'}} onClick={onClose} className='closeBtn'>X</p>
                    <h4 style={{marginTop: '1rem', fontSize: '1.4rem'}}>Configure Image</h4>
                    <form className='modalForm'>
                        <label htmlFor="name">
                            Image name:
                            <input style={{color: 'grey'}} type="text" name='name' id='name' value={imageLoaded.name} disabled />
                        </label>
                        <label htmlFor="place">
                            Image Displaying in:
                            <select name='place' id='place' onChange={onChange}>
                                {
                                    imageLoaded.place === "Home" ? (<option value="Home" selected>Home</option>) : (<option value="Home" >Home</option>)
                                }
                                {
                                    imageLoaded.place === "About" ? (<option value="About" selected>About</option>) : (<option value="About">About</option>)
                                }
                                {
                                    imageLoaded.place === "Programs" ? (<option value="Programs" selected>Programs</option>) : (<option value="Programs">Programs</option>)
                                }
                                {
                                    imageLoaded.place === "Blog" ? (<option value="Blog" selected>Blog</option>) : (<option value="Blog">Blog</option>)
                                }
                                {
                                    imageLoaded.place === "Videos" ? (<option value="Videos" selected>Videos</option>) : (<option value="Videos">Videos</option>)
                                }
                            </select>
                        </label>
                        <div style={{display: 'flex'}}>
                            <label htmlFor="show">
                                Show<br/>
                                <input type="checkbox" name="show" id="show" onClick={onChange} checked={show}/>
                            </label>
                        </div>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                            <button className='editImageBtn-Save'>Save Changes</button>
                            <button className='editImageBtn-Delete'>Delete Image</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal