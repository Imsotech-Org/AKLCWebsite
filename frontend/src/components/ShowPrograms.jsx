import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteProgram, getPrograms} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';

const ShowPrograms = () => {
    const {programs, isError, isSuccess, message} = useSelector((state) => state.programs);
    const [programId, setProgramId] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if(isError){
          toast.error(message);
        }
    
        dispatch(getPrograms());
    }, [dispatch, isError, isSuccess, message]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteProgram(programId));
    }

    return (
        <div>
            <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10', marginTop: '3rem'}}>Current programs:</h4>
            {
                programs.map((item, index) => {
                    return (
                        <div style={{backgroundColor: 'lightgray', padding: '1.5rem'}}>
                            <div style={{display: 'flex'}}>
                                <img src={`${process.env.PUBLIC_URL}programsImgs/${item.programImage}`} alt="" style={{width: '8rem', borderRadius: '10px'}} />
                                <div style={{marginLeft: '1rem'}}>
                                    <h4 style={{margin: '0.4rem 0'}}>{item.title}</h4>
                                    <h4 style={{margin: '0.4rem 0'}}>Price: ${item.price}</h4>
                                    <h5 style={{margin: '0.4rem 0'}}>Description: {item.description}</h5>
                                    <h5 style={{margin: '0.4rem 0'}}>Topics: {item.firstTopics}</h5>
                                    <h5 style={{margin: '0.4rem 0'}}>Program's more topics: {item.longTopics}</h5>
                                </div>
                            </div>
                            <form onSubmit={onSubmit}>
                                <button onClick={() => setProgramId(item._id)}>Delete Program</button>
                            </form>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowPrograms