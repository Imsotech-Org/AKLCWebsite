import axios from 'axios';

const API_URL = '/api/v1/systemImages';

// Create system image
const createSystemImage = async (systemImageData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, systemImageData, config);

  return response.data;
}

// Get all system images
const getSystemImages = async (token) => {
 const config = {
   headers: {
     Authorization: `Bearer ${token}`
   }
 }

 const response = await axios.get(API_URL, config);

 return response.data;
}


const systemImageService = {
  createSystemImage,
  getSystemImages
}

export default systemImageService;