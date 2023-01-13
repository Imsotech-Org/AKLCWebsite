import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteProgram, getPrograms, reset} from '../features/programs/programsSlice';
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
        console.log(programs);
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
                                <div>
                                    <h5>Program's name: {item.title}</h5>
                                    <h5>Program's price: ${item.price}</h5>
                                    <h5>Program's description: {item.description}</h5>
                                    <h5>Program's topics: {item.firstTopics}</h5>
                                    <h5>Program's more topics: {item.longTopics}</h5>
                                </div>
                            </div>
                            <form onSubmit={onSubmit}>
                                <button onClick={() => setProgramId(item._id)}>Test</button>
                            </form>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowPrograms