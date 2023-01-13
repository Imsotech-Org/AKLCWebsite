import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {MdPhotoSizeSelectActual} from 'react-icons/md';
import {createProgram, getPrograms, reset} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';
import axios from 'axios';

const CreateProgram = () => {
    const {programs, program, isError, isSuccess, isLoading, message} = useSelector((state) => state.programs);

    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');

    const [programData, setProgramData] = useState({
        programImage: '',
        title: '',
        price: '',
        description: '',
        firstTopics: '',
        moreTopics: false,
        longTopics: ''
    })

    const dispatch = useDispatch();

    const onChangeUploadImage = (e) => {
        if(e.target.name === 'programImage'){
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
            setProgramData((prevState) => ({
                ...prevState,
                programImage: `programsImage_${e.target.files[0].name}`
            }))
        }else{
            setProgramData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }
    }
    
    const onUploadImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('programImage', file);
    
        try {
          console.log('Just before axios');
          const res = await axios.post('/uploadProgramsImg', formData, {
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
    
    
        dispatch(createProgram(programData));
        toast.success('Program Created');
    }

    return (
        <div style={{marginTop: '2rem'}}>
            <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10'}}>Create program:</h4>
            <form onSubmit={onUploadImage} style={{width: '100%'}}>
                <div style={{display: 'flex'}}>
                    <div style={{display: 'block', marginRight: '2rem'}}>
                        <div className="systemImageUpContainer">
                            <label name='programImage'>
                                {fileName} <br />
                                <div style={{backgroundColor: '#F3F1F3', width: '7rem', height: '7rem'}}>
                                <label htmlFor="programImage"><MdPhotoSizeSelectActual style={{cursor: 'pointer',padding: '15% 15% 0 0', height: '5rem', width: '5rem', color: '#363D10'}}/></label>
                                <input onClick={() => console.log('hi')} style={{visibility: 'hidden'}} type="file" filename='programImage' name='programImage' id='programImage' onChange={onChangeUploadImage}/>
                                </div>
                            </label>
                        </div>
                        <div style={{display: 'block'}}>
                            <label htmlFor="title">
                                Title<br/>
                                <input style={{ width: '15rem', height: '2.7rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="text" name="title" id="title" onChange={onChangeUploadImage}/>
                            </label><br />
                            <label htmlFor="price">
                                Price<br/>
                                <input style={{ width: '15rem', height: '2.7rem', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} type="text" name="price" id="price" onChange={onChangeUploadImage}/>
                            </label><br />
                        </div>
                    </div>
                    <div style={{display: 'block', width: '100%'}}>
                        <label htmlFor="description">
                            Description<br/>
                            <textarea style={{ height: '3.5rem', width: '100%', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} id="description" name="description" rows="4" onChange={onChangeUploadImage}>
                                
                            </textarea>
                        </label><br />
                        <label htmlFor="description">
                            First Topics (Please separate topics by inserting a '-' between them)<br/>
                            <textarea style={{ height: '3.5rem', width: '100%', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} id="firstTopics" name="firstTopics" rows="4" onChange={onChangeUploadImage}>
                                
                            </textarea>
                        </label><br />
                        <label htmlFor="description">
                            More Topics (Please separate topics by inserting a '-' between them)<br/>
                            <textarea style={{ height: '3.5rem', width: '100%', background: '#F3F1F3', border: '1px solid #363D10', borderRadius: '15px', marginBottom: '1rem', marginTop: '0.2rem'}} id="longTopics" name="longTopics" rows="4" onChange={onChangeUploadImage}>
                                
                            </textarea>
                        </label><br />
                        <input type="radio" id='moreTopics' name='moreTopics' hidden value={programData.longTopics ? true : false} onChange={onChangeUploadImage} />
                    </div>
                </div>
                <button style={{textDecoration: 'none', backgroundColor: '#879635', padding: '0.5rem 1rem', borderRadius: '10px', color: '#F3F1F3', fontSize: '1.5rem', border: 'none', width: '100%'}}>Create Program</button>
            </form>
        </div>
    )
}

export default CreateProgram