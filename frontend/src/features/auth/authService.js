import axios from 'axios';

const API_URL = '/api/v1/users';

// Sign Up user
const signUp = async (userData) => {
  const response = await axios.post(API_URL, userData);

  console.log(response.data);
  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(JSON.stringify(response.data));
  }

  return response.data;
}

// Sign Up user
const signIn = async (userData) => {
  const response = await axios.post(API_URL + '/signIn', userData);

  console.log(response.data);
  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(JSON.stringify(response.data));
  }

  return response.data;
}

// Sign Off user
const signOff = () => {
  console.log('sign Off from authService');
  localStorage.removeItem('user');
}

// Update user
const updateMe = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.put(`${API_URL}/me`, userData, config);

  return response.data;
}

// Get Me 
const getMe = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.get(`${API_URL}/me`, config);

  return response.data;
}

// Forgot Password
const forgotMyPassword = async (userData) => {
  const response = await axios.put(`${API_URL}/forgotPassword`, userData);

  return response.data;  
}


const authService = {
  signUp,
  signOff,
  signIn,
  updateMe,
  getMe,
  forgotMyPassword
}

export default authService;