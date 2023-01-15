import axios from 'axios';

const API_URL = '/api/v1/programs';

// Create program
const createProgram = async (programData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  
    const response = await axios.post(API_URL, programData, config);
  
    return response.data;
}

// Delete Program
const deleteProgram = async (programId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + '/' + programId, config);
    console.log(response);
}
  
// Get all programs
const getPrograms = async () => {
  
   const response = await axios.get(API_URL);
  
   return response.data;
}
  
// Get prgram
const getProgram = async (programId) => {
   
    const response = await axios.get(API_URL + '/' + programId);
   
    return response.data;
}

const programsService = {
    createProgram,
    deleteProgram,
    getPrograms,
    getProgram
  }
  
  export default programsService;