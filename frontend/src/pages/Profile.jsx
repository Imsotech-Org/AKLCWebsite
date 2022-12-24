import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import ProgramsComponent from '../components/ProgramsComponent';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateMe, reset } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';
import {MdPhotoSizeSelectActual} from 'react-icons/md';
// import {BsPersonCircle} from 'react-icons/bs';
import axios from 'axios';


const Profile = () => {
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);

  const imageName = user.userImage;
  const [edit, setEdit] = useState(false);
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Change Profile Image');

  const [formDataUpdate, setFormDataUpdate] = useState({
    name: user.name ? user.name : '',
    email: user.email ? user.email : '',
    about: user.about ? user.about : '',
    userImage: user.userImage ? user.userImage : '',
  })

  const {name, email, about, userImage} = formDataUpdate;


  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    console.log(user.isAdmin);
  }, []);


  const onEdit = () => {
    setEdit((prevState) => {
      return !prevState;
    })
  }

  const onChangeEdit = (e) => {
    if(e.target.name === 'userImage'){
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setFormDataUpdate((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0].name
      }))
    }else{
      setFormDataUpdate((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
  }

  const onSubmitEdit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      name,
      email,
      about,
      userImage: `${email}_${userImage}`
    }

    const formData = new FormData();
    formData.append('userImage', file);
    formData.append('userEmail', email);

    try {
      const res = await axios.post('/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      if(error.response.status === 500){
        console.log('There was a prroblem with the server')
      } else {
        console.log(error.response.data)
      }
    }

    dispatch(updateMe(updatedUser))
    setEdit(false);
  }

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      <h2 style={{ color: '#363d10', fontSize: '3rem', margin: '2.7rem 0 0 12rem' }}>Profile</h2>
      <div style={{ display: 'flex', margin: '3rem auto', backgroundColor: 'lightGrey', borderRadius: '15px', padding: '7rem', justifyContent: 'space-between', width: '50rem' }}>
        <div style={{ width: '10rem' }}>
          {
            user.isAdmin && (
              <Link to='/website-edit' style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>Edit Website</Link>
            )
          }
          <button onClick={onEdit} style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem', backgroundColor: 'lightGrey', border: 'none', marginLeft: '-0.5rem' }}>Edit Profile</button>
          <Link style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>Events</Link>
          <Link style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>My Wallet</Link>
          <Link style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>Go to App</Link>
          <Link style={{ display: 'block', textDecoration: 'none', color: '#879635', fontSize: '1.5rem', marginBottom: '1rem' }}>Settings</Link>
        </div>
        {edit ? 
          (
            <div style={{ width: '40rem', textAlign: 'right' }}>
              <form onSubmit={onSubmitEdit}>
                <label name='userImage'>
                  {fileName} <br />
                  <div style={{backgroundColor: '#F3F1F3', width: '7rem', height: '7rem', borderRadius: '50%', marginLeft: '80%', marginBottom: '1rem'}}>
                    <label htmlFor="userImage"><MdPhotoSizeSelectActual style={{padding: '15% 15% 0 0', height: '5rem', width: '5rem', color: '#363D10'}}/></label>
                    <input onClick={() => console.log('hi')} style={{visibility: 'hidden'}} type="file" filename='userImage' name='userImage' id='userImage' onChange={onChangeEdit}/>
                  </div>
                </label>
                <input style={{width: '80%', height: '2.5rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', fontSize: '1.2rem',paddingLeft: '0.5rem', color: '#502c49', marginBottom: '1rem'}} type="text" name='name' id='name' onChange={onChangeEdit} /><br />
                <input  style={{width: '80%', height: '2.5rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', fontSize: '1.2rem',paddingLeft: '0.5rem', color: '#502c49', marginBottom: '1rem'}} type="email" name='email' id='email' onChange={onChangeEdit} /><br />
                <textarea style={{width: '80%', height: '2.5rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', fontSize: '0.9rem',paddingLeft: '0.5rem', color: '#502c49', marginBottom: '1rem'}} name="about" id="about" cols="30" rows="10" onChange={onChangeEdit}/><br />
                <button style={{textDecoration: 'none', backgroundColor: '#879635', padding: '0.5rem 1rem', borderRadius: '10px', color: 'lightgray', fontSize: '1.5rem', border: 'none', marginLeft: '-0.5rem' }}>Save</button>
              </form>
            </div>
          ) : 
          (
            <div style={{ width: '40rem', textAlign: 'right' }}>
              <img src={process.env.PUBLIC_URL + 'imgs/' + imageName} alt="" style={{ width: '10rem', height: '10rem', borderRadius: '50%', marginLeft: '70%', marginTop: '-5rem' }} />
              <h3 style={{ color: '#502c49', fontSize: '1.5rem', margin: '1rem 1rem 1rem 0' }}>{user.name}</h3>
              <h4 style={{ color: '#502c49', fontSize: '1.2rem', margin: '1rem 1rem 1rem 0' }}>{user.email}</h4>
              <h4 style={{ color: '#363d10', fontSize: '1.2rem', margin: '2rem 1rem 0.4rem 0' }}>About:</h4>
              <p>{user.about ? user.about : 'add something about you'}</p>
            </div>
          )
        }
      </div>
      <ProgramsComponent title='My Programs' />
      <Footer />
    </div>
  )
}

export default Profile