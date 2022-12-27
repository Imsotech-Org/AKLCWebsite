import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {MdPhotoSizeSelectActual} from 'react-icons/md';
import {createSystemImage, getSystemImages, reset} from '../features/systemImages/systemImageSlice';
import axios from 'axios';
import Modal from '../components/Modal';

const WebsiteEdit = () => {
  const [imageClicked, setImageClicked] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [idClicked, setIdClicked] = useState('');

  const {systemImages, systemImage, isError, isSuccess, isLoading, message} = useSelector((state) => state.systemImage);

  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');
  const [imagesLoaded, setImagesLoaded] = useState([{id: '', name: '', place: '', show: ''}]);

  const [systemImageData, setSystemImageData] = useState({
    id: '',
    name: '',
    place: '',
    show: false
  })

  const dispatch = useDispatch();

  useEffect(() => {
    if(isError){
      toast.error(message);
    }

    dispatch(getSystemImages());
    systemImages.forEach((item) => {
      setImagesLoaded(oldArray => [...oldArray, {id: item._id, name: `${process.env.PUBLIC_URL}systemImgs/${item.name}`, place: item.place, show: item.show}]);
    })
  }, [dispatch, isError, isSuccess, message]);

  const onClickModal = (image, id) => {
    setOpenModal(true);
    setImageClicked(image);
    setIdClicked(id);
  }

  const onChangeUploadImage = (e) => {
    if(e.target.name === 'systemImage'){
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setSystemImageData((prevState) => ({
        ...prevState,
        name: e.target.files[0].name
      }))
    }else{
      setSystemImageData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
  }

  const onUploadImage = async (e) => {
    e.preventDefault();

    const newSystemImageData = {
      name: systemImageData.name,
      place: systemImageData.place,
      show: systemImageData.show
    };

    const formData = new FormData();
    formData.append('systemImage', file);
    formData.append('imagePlace', systemImageData.place);

    try {
      console.log('Just before axios');
      const res = await axios.post('/uploadSystem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      if(error.response.status === 500){
        console.log('There was a problem with the server')
      } else {
        console.log(error.response.data)
      }
    }


    dispatch(createSystemImage(newSystemImageData));
    window.location.reload();
  }

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      <Modal image={imageClicked} id={idClicked} open={openModal} onClose={() => setOpenModal(false)} />
      <h2 style={{ color: '#363d10', fontSize: '3rem', margin: '2.7rem 0 0 12rem' }}>Website Edit</h2>
      <div className="editContainer" style={{margin: '3rem 10rem'}}>
        <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Upload new Image to system:</h4>
        <form onSubmit={onUploadImage} style={{display: 'flex'}}>
          <div className="systemImageUpContainer">
            <label name='systemImage'>
              {fileName} <br />
              <div style={{backgroundColor: '#F3F1F3', width: '7rem', height: '7rem'}}>
                <label htmlFor="systemImage"><MdPhotoSizeSelectActual style={{cursor: 'pointer',padding: '15% 15% 0 0', height: '5rem', width: '5rem', color: '#363D10'}}/></label>
                <input onClick={() => console.log('hi')} style={{visibility: 'hidden'}} type="file" filename='systemImage' name='systemImage' id='systemImage' onChange={onChangeUploadImage}/>
              </div>
            </label>
          </div>
          <div className="moreSystemImageUpInfo">
            <label htmlFor='place'>
              Enter where you want the image to be:<br/>
              <select style={{width: '80%', height: '2.5rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', fontSize: '1.2rem',paddingLeft: '0.5rem', color: '#502c49', marginBottom: '1rem'}} name="place" id="place" onChange={onChangeUploadImage}>
                <option value="">Select place of storage</option>
                <option value="Home">Home</option>
                <option value="About">About</option>
                <option value="Programs">Programs</option>
                <option value="Blog">Blog</option>
                <option value="Videos">Videos</option>
              </select>
              {/* <input type="text" name='place' id='place'  /> */}
            </label><br />
            <div style={{display: 'flex'}}>
              <label htmlFor="show">
                Show<br/>
                <input type="radio" name="show" id="show" value={true}  onChange={onChangeUploadImage} />
              </label><br />
              <label style={{marginLeft: '1rem'}} htmlFor="show">
                No Show<br/>
                <input type="radio" name="show" id="show" value={false}  onChange={onChangeUploadImage} />
              </label>
            </div>
            <br />
            <button style={{textDecoration: 'none', backgroundColor: '#879635', padding: '0.5rem 1rem', borderRadius: '10px', color: '#F3F1F3', fontSize: '1.5rem', border: 'none', width: '14rem'}}>Continue</button>
          </div>
        </form>
        <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Current System Images:</h4>
        {
          imagesLoaded.map((item, index) => {
            return (<img onClick={() => onClickModal(item.name, item.id)} key={index} style={{height: '8rem', borderRadius: '15px', margin: '0 1.4rem 1rem 0', cursor: 'pointer'}} src={item.name} alt="" />)
          })
        }
        <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Current Images on display:</h4>
        <div style={{display: 'flex', justifyContent: 'space-bettween', gap: '1rem'}}>
          <div style={{width: '16rem', backgroundColor: 'lightgray', textAlign: 'center', fontSize: '1.5rem'}}>
            <h5>Home:</h5>
            {
              imagesLoaded.map((item, index) => {
                if(item.place === 'Home' && item.show){
                  return(<img onClick={() => onClickModal(item.name, item.id)} key={index} style={{height: '8rem', borderRadius: '15px', cursor: 'pointer'}} src={item.name} alt="" />)
                }
              })
            }
          </div>
          <div style={{width: '16rem', textAlign: 'center', fontSize: '1.5rem'}}>
            <h5>About:</h5>
            {
              imagesLoaded.map((item, index) => {
                if(item.place === 'About' && item.show){
                  return(<img onClick={() => onClickModal(item.name, item.id)} key={index} style={{height: '8rem', borderRadius: '15px'}} src={item.name} alt="" />)
                }
              })
            }
          </div>
          <div style={{width: '16rem', backgroundColor: 'lightgray', textAlign: 'center', fontSize: '1.5rem'}}>
            <h5>Programs:</h5>
            {
              imagesLoaded.map((item, index) => {
                if(item.place === 'Programs' && item.show){
                  return(<img onClick={() => onClickModal(item.name, item.id)} key={index} style={{height: '8rem', borderRadius: '15px'}} src={item.name} alt="" />)
                }
              })
            }
          </div>
          <div style={{width: '16rem', textAlign: 'center', fontSize: '1.5rem'}}>
            <h5>Blog:</h5>
            {
              imagesLoaded.map((item, index) => {
                if(item.place === 'Blog' && item.show){
                  return(<img onClick={() => onClickModal(item.name, item.id)} key={index} style={{height: '8rem', borderRadius: '15px'}} src={item.name} alt="" />)
                }
              })
            }
          </div>
          <div style={{width: '16rem', backgroundColor: 'lightgray', textAlign: 'center', fontSize: '1.5rem'}}>
            <h5>Videos:</h5>
            {
              imagesLoaded.map((item, index) => {
                if(item.place === 'Videos' && item.show){
                  return(<img onClick={() => onClickModal(item.name, item.id)} key={index} style={{height: '8rem', borderRadius: '15px'}} src={item.name} alt="" />)
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteEdit