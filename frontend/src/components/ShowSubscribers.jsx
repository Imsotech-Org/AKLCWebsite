import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getRegisters, deleteRegisters} from '../features/registers/registersSlice'
import {toast} from 'react-toastify';

const ShowSubscribers = () => {

    const {registers, isError, isSuccess, message} = useSelector((state) => state.registers);
    const [registersId, setRegistersId] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if(isError){
        toast.error(message);
        }

        dispatch(getRegisters());
    }, [dispatch, isError, isSuccess, message]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteRegisters(registersId));
        dispatch(getRegisters());
    }

    return (
        <div>
            <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10', marginTop: '3rem'}}>Current subscribers:</h4>
            {
                registers.map((item, index) => {
                    return (
                        <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <form onSubmit={onSubmit}>
                            <button style={{width: '6rem', height: '3rem'}} onClick={() => setRegistersId(item._id)}>Delete</button>
                            </form>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowSubscribers