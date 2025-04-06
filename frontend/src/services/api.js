import axios from 'axios';

const API_URL = 'http://localhost:5000/api/items';

const api = {
  getItems: async () => {
    return await axios.get(API_URL);
  },
  getItemById: async (id) => {
    return await axios.get(`${API_URL}/${id}`);
  },
  createItem: async (data) => {
    return await axios.post(API_URL, data);
  },
  placeBid: async (itemId, amount) => {
    return await axios.post(`${API_URL}/${itemId}/bid`, { amount });
  }
};

export default api;