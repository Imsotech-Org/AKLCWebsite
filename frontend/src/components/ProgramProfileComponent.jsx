import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPrograms} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';

const ProgramProfileComponent = () => {
    const {programs, isError, isSuccess, message} = useSelector((state) => state.programs);
    const {user} = useSelector((state) => state.auth);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
        if(isError){
          toast.error(message);
        }
        dispatch(getPrograms());
    }, [dispatch, isError, isSuccess, message]);
  
    return (
      <div className='programsContainer' style={{paddingBottom: '4rem'}}>
        <h2>My Program</h2>
        {
          user.plan ? (
            programs.map((item, index) => {
              if(user.plan === item._id){
                return (
                  <div style={{display: 'flex', backgroundColor: '#879635', margin: '1rem 4rem 0 4rem', padding: '2rem 3rem', borderRadius: '10px'}} key={index}>
                    <img style={{width: '11rem', marginRight: '3rem', borderRadius: '10px'}} src={`${process.env.PUBLIC_URL}programsImgs/${item.programImage}`} alt="" />
                    <div>
                      <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>{item.title}</h3>
                      <p style={{fontSize: '1.2rem', textAlign: 'left'}}>{item.description}</p>
                    </div>
                  </div>
                )
              }else {
                return "";
              }
            })
          ) : (
            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>No Programs</h3>
          )
        }
      </div>
    )
}

export default ProgramProfileComponent