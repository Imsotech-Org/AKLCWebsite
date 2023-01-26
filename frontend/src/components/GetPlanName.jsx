import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import { getProgram } from '../features/programs/programsSlice';

const GetPlanName = ({id}) => {

    const {program, isError, isSuccess, message} = useSelector((state) => state.programs);

    const dispatch = useDispatch();

    useEffect(() => {
        if(isError){
        toast.error(message);
        }

        dispatch(getProgram(id));
    }, [dispatch, isError, isSuccess, message, id]);


  return (
    <div><p>{program.title}</p></div>
  )
}

export default GetPlanName