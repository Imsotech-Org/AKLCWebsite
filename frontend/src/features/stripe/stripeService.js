import axios from "axios";

const API_URL = '/api/v1/stripe';

// Create a stripe
const createStripe = async (stripeData) => {
    const response = await axios.post(API_URL + '/create-checkout-session', stripeData);
    console.log(response.data);
    return response.data;
}

const registersService = {
    createStripe
}
  
export default registersService;