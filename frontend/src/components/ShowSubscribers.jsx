import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteSubscriber, getSubscribers} from '../features/subscriberslists/subscriberslistsSlice';
import {toast} from 'react-toastify';

const ShowSubscribers = () => {

    const {subscriberlists, isError, isSuccess, message} = useSelector((state) => state.subscriberlists);
    const [subscribersId, setSubscribersId] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if(isError){
        toast.error(message);
        }

        dispatch(getSubscribers());
    }, [dispatch, isError, isSuccess, message]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteSubscriber(subscribersId));
        dispatch(getSubscribers());
    }

    return (
        <div>
            <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10', marginTop: '3rem'}}>Current subscribers:</h4>
            {
                subscriberlists[0] ? (
                    subscriberlists[0]?.subscribers.map((item, index) => {
                        return (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <form onSubmit={onSubmit}>
                                <button style={{width: '6rem', height: '3rem'}} onClick={() => setSubscribersId(item._id)}>Delete</button>
                                </form>
                            </div>
                            )
                        })
                ) : (
                    <p>No Subscribers</p>
                )
            }
        </div>
    )
}

export default ShowSubscribers