import axios from "axios";

const API_URL = '/api/v1/subscribers';

// Create a subscriber
const createSubscribers = async (subscriberData) => {
    const response = await axios.post(API_URL, subscriberData);
  
    return response.data;
}

// Delete a Subscribers
const deleteSubscriber = async (subId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + '/' + subId, config);
    console.log(response);
}

// Get all subscribers
const getSubscribers = async () => {
    const response = await axios.get(API_URL);

    return response.data;
}

const subscriberslistsService = {
    createSubscribers,
    deleteSubscriber,
    getSubscribers,
}
  
export default subscriberslistsService;