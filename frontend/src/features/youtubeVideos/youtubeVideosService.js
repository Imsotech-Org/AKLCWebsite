import axios from "axios";

const API_URL = '/api/v1/youtubeVideos';

// Create a youtubeVideo
const createYoutubeVideo = async (youtubeData) => {
    const response = await axios.post(API_URL, youtubeData);
  
    return response.data;
}

// Get youtubevideos
const getYoutubeVideos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

const youtubeVideoService = {
    createYoutubeVideo,
    getYoutubeVideos,
}
  
export default youtubeVideoService;