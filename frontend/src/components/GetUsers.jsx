import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAll, updateMe} from '../features/auth/authSlice';
import { getPrograms } from '../features/programs/programsSlice';
import {toast} from 'react-toastify';
import GetPlanName from './GetPlanName';

const GetUsers = () => {

    const {users, isError, isSuccess, message} = useSelector((state) => state.auth);
    const {programs} = useSelector((state) => state.programs);
    const [editMode, setEditMode] = useState(true);
    const [userData, setUserData] = useState({
        plan: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if(isError){
        toast.error(message);
        }

        dispatch(getAll());
        dispatch(getPrograms());
    }, [dispatch, isError, isSuccess, message]);

    const onChangesSubmit = (e) => {
        e.preventDefault();

        dispatch(updateMe(userData));
        toast.success('Update')
    }

  return (
    <div>
        <h4 style={{fontSize: '1.4rem', margin: '1rem 0', color: '#363D10', marginTop: '3rem'}}>Current Users Accounts:</h4>
        <button onClick={() => setEditMode((prevState) => !prevState)}>Edit Mode</button>
        {
            editMode ? (
                users.map((item, index) => {
                    return (
                        <form onSubmit={onChangesSubmit}>
                            <input disabled type="text" name="name" id="name" value={item.name} />
                            <input disabled type="email" name="email" id="email" value={item.email} />
                            {
                                item.plan ? (
                                    <select name="plan" id="plan" onChange={(e) => setUserData({plan: e.target.value})}>
                                        {
                                            programs.map((program, index) => {
                                                if(program.id === item.plan){
                                                    return (<option selected value={`${program._id}`}>{program.title}</option>)
                                                }else {
                                                    return (<option value={`${program._id}`}>{program.title}</option>)
                                                }
                                            })
                                        }
                                        <option value="">No Plan</option>
                                    </select>
                                ) : (
                                    <select name="plan" id="plan" onChange={(e) => setUserData({plan: e.target.value})}>
                                        {
                                            programs.map((program, index) => {
                                                if(program.id === item.plan){
                                                    return (<option selected value={`${program._id}`}>{program.title}</option>)
                                                }else {
                                                    return (<option value={`${program._id}`}>{program.title}</option>)
                                                }
                                            })
                                        }
                                        <option selected value="">No Plan</option>
                                    </select>
                                )
                            }
                            <button>Save Changes</button>
                        </form>
                    )
                })
            ) : (
                users.map((item, index) => {
                    return (
                        <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            {item.plan ? <GetPlanName id={item.plan}/> : <p>No Plan</p>}
                        </div>
                    )
                })
            )
        }
    </div>
  )
}

export default GetUsers