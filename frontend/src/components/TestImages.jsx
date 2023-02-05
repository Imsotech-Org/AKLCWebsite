import React, {useState, useEffect} from 'react';
import FileBase64 from 'react-file-base64';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {MdPhotoSizeSelectActual} from 'react-icons/md';
import {createSpecialSystemImage, getSystemImages} from '../features/systemImages/systemImageSlice';
import SpecialInput from './SpecialInput';

const TestImages = () => {

    const {systemImages, isError, isSuccess, message} = useSelector((state) => state.systemImage);
    const [calledOnce, setCalledOnce] = useState(false);

    const [systemImageData, setSystemImageData] = useState({
        name: '',
        place: '',
        show: false
    })

    const dispatch = useDispatch();

    const loadImages = () => {
        dispatch(getSystemImages());
    }

    useEffect(() => {
        if(isError){
          toast.error(message);
        }
        if(!calledOnce){
          loadImages();
        }
        setCalledOnce(true);
    }, [isError, message]);

    const onChangeUploadImage = (e) => {
        setSystemImageData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onUploadImage = async (e) => {
        e.preventDefault();
    
        const newSystemImageData = {
          name: systemImageData.name,
          place: systemImageData.place,
          show: systemImageData.show
        };
    
        dispatch(createSpecialSystemImage(newSystemImageData));
    }


  return (
    <div>
        <p>{systemImageData.name}</p>
        <h4>This is a test image feature, only developers should use it</h4>
        <form onSubmit={onUploadImage} style={{display: 'flex'}}>
          <div className="systemImageUpContainer">
            <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setSystemImageData({ ...systemImageData, name: base64 })}
            />
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
    </div>
  )
}

export default TestImages