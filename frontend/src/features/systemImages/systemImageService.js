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
const getSystemImages = async () => {

 const response = await axios.get(API_URL);

 return response.data;
}

// Get system image
const getSystemImage = async (imageId) => {
 
  const response = await axios.get(API_URL + '/' + imageId);
 
  return response.data;
}

// Update system image
const updateSystemImage = async (systemImageData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  
  const response = await axios.put(API_URL + '/' + systemImageData.id, systemImageData.data, config);
  console.log('ID FOR UPDATE SYSTEM IMAGE IN SERVER IS: ' + systemImageData.id);
  console.log('THE DATA BEING PASSED IN SERVICE IS: ' + systemImageData.data);
  return response.data;
}

// Delete system image
const deleteSystemImage = async(imageId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + '/' + imageId, config);
 
  return response.data;
}


const systemImageService = {
  createSystemImage,
  getSystemImages,
  getSystemImage,
  updateSystemImage,
  deleteSystemImage
}

export default systemImageService;