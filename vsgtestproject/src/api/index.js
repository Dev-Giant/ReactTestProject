import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_BASE_API_URL;

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

export const fetchCryptoData = async () => {
  return await api.get();
};