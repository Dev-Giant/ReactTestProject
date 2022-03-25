import axios from 'axios';

const API_ENDPOINT = 'http://localhost:8080/message';

export const fetchMessages = async () => {
  return await axios.get(`${API_ENDPOINT}/all`);
};

export const fetchSingleMessage = async id => {
  return await axios.get(`${API_ENDPOINT}/${id}`);
};

export const createMessage = async message => {
  return await axios.post(API_ENDPOINT,{
    description: message
  });
};