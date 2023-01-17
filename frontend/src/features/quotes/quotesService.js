import axios from "axios";

const API_URL = '/api/v1/quotes';

// Create a quote
const createQuote = async (quoteData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  
    const response = await axios.post(API_URL, quoteData, config);
  
    return response.data;
}

// Get quotes
const getQuotes = async () => {
    const response = await axios.get(API_URL);

    return response.data;
}

// Get quote
const getQuote = async (quoteId) => {
 
    const response = await axios.get(API_URL + '/' + quoteId);
   
    return response.data;
}

// Delete quote
const deleteQuote = async (quoteId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + '/' + quoteId, config);
    console.log(response);
}

const quotesService = {
    createQuote,
    deleteQuote,
    getQuotes,
    getQuote
}
  
export default quotesService;