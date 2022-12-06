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

// Sign Off user
const signOff = () => {
  console.log('sign Off from authService');
  localStorage.removeItem('user');
}


const authService = {
  signUp,
  signOff
}

export default authService;