import React, { useEffect} from 'react';
import ProgramItem from './ProgramItem';
import {useSelector, useDispatch} from 'react-redux';
import {getPrograms} from '../features/programs/programsSlice';
import {toast} from 'react-toastify';

const ProgramsComponent = ({title = 'Products and Programs'}) => {

  const {programs, isError, isSuccess, message} = useSelector((state) => state.programs);
  // const [programId, setProgramId] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
      if(isError){
        toast.error(message);
      }
  
      dispatch(getPrograms());
  }, [dispatch, isError, isSuccess, message]);

  return (
    <div className='programsContainer'>
      <h2>{title}</h2>
      {
        programs.map((item, index) => {
          return (<ProgramItem key={index} programImage={item.programImage} programName={item.title} programPrice={item.price} programDescription={item.description} programTopics={item.firstTopics}/>)
        })
      }
      <h5 style={{textAlign: 'left', padding: '2rem', color: '#879635', fontSize: '1.5rem'}}>Money back guaranteed *</h5>
    </div>
  )
}

export default ProgramsComponent