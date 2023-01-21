import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {getSystemImage, updateSystemImage} from '../features/systemImages/systemImageSlice';

const Modal = ({image, id, open, onClose}) => {
    const [typeSubmit, setTypeSubmit] = useState('');
    const [place, setPlace] = useState('');
    const [show, setShow] = useState(false);
    const {systemImage, isError, message} = useSelector((state) => state.systemImage);

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

    const onSave = async (e) => {
        e.preventDefault();


        if(typeSubmit === 'Change'){
            if(systemImage.place !== place){
                // Change name of image in local folder
                console.log('In the form');
                const formData = new FormData();
                formData.append('imagePlace', place);
                formData.append('oldName', systemImage.place);

                try {
                    const res = await axios.post(`/updateSystem/${place}/${systemImage.name}`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    console.log(res);
                } catch (error) {
                    if(error.response.status === 500){
                        console.log('There was a problem with the server')
                    } else {
                        console.log(error.response.data)
                    }
                }

                // Change name of image info in database
                const splitName = imageLoaded.name.split("_");
                let updatedSystemImageData = {
                    name: `${splitName[0]}_${place}_${splitName[2]}`,
                    place: place,
                    show: show
                };
                
                // window.location.reload();
                const systemImageData = {
                    id: id,
                    data: updatedSystemImageData
                }

                dispatch(updateSystemImage(systemImageData))

            }else{
                // Change image show info in database
                let updatedSystemImageData = {
                    place: imageLoaded.place,
                    show: show
                };
                
                const systemImageData = {
                    id: id,
                    data: updatedSystemImageData
                }
                dispatch(updateSystemImage(systemImageData))
                // dispatch(reset);
            }
            console.log('Change of Image');
            console.log(systemImage.place);
            console.log(place);
        }else if (typeSubmit === 'Delete'){
            console.log('Delete of Image');
        }
        toast.success('Changes saved');
        onClose();
    }

    if(!open) return null
    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="modalContainer">
                {image.split('.')[1] === 'mp4' ? (<video style={{width: '20rem', marginLeft: '1rem'}} controls src={image} alt="" />) : (<img style={{height: '10rem', marginLeft: '1rem', marginTop: '4rem'}} src={image} alt="" />)}
                <div className="modalRight">
                    <p style={{cursor: 'pointer'}} onClick={onClose} className='closeBtn'>X</p>
                    <h4 style={{marginTop: '1rem', fontSize: '1.4rem'}}>Configure Image</h4>
                    <form className='modalForm' onSubmit={onSave}>
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
                            <button onClick={() => setTypeSubmit('Change')} className='editImageBtn-Save'>Save Changes</button>
                            <button onClick={() => setTypeSubmit('Delete')} className='editImageBtn-Delete'>Delete Image</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal