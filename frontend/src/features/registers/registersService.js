import axios from "axios";

const API_URL = '/api/v1/registers';

// Create a register
const createRegisters = async (registerData) => {
    const response = await axios.post(API_URL, registerData);
  
    return response.data;
}

// Get registers
const getRegisters = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

// Delete quote
const deleteRegisters = async (registersId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + '/' + registersId, config);
    console.log(response);
}

const registersService = {
    createRegisters,
    getRegisters,
    deleteRegisters
}
  
export default registersService;