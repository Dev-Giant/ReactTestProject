import axios from 'axios';

const API_ENDPOINT = 'localhost:8080';

export const getRate = async (currency1, currency2) => {
  return await axios.get(`${API_ENDPOINT}/${currency1}-${currency2}`);
};