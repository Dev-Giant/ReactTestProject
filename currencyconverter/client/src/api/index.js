import axios from 'axios';

const API_ENDPOINT = 'http://localhost:8080';

export const getRate = async (currency1, currency2) => {
  let id = currency1 + '-' + currency2;
  return await axios.get(`${API_ENDPOINT}/rates/${id}`);
};