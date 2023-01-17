import axios from "axios";

const API_URL = '/api/v1/podcasts';

// Create a podcast
const createPodcast = async (podcastData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  
    const response = await axios.post(API_URL, podcastData, config);
  
    return response.data;
}

// Delete a Podcast
const deletePodcast = async (podcastId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + '/' + podcastId, config);
    console.log(response);
}

// Get all podcasts
const getPodcasts = async () => {
    const response = await axios.get(API_URL);

    return response.data;
}

// Get podcast
const getPodcast = async (podcastId) => {
 
    const response = await axios.get(API_URL + '/' + podcastId);
   
    return response.data;
}

const podcastService = {
    createPodcast,
    deletePodcast,
    getPodcasts,
    getPodcast
}
  
export default podcastService;