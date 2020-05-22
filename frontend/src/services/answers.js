import axios from 'axios';

const baseURL = 'https://polar-woodland-94575.herokuapp.com';

const service = axios.create({
  baseURL,
  withCredentials: true,
});

export const CREATE_ANSWER = async data => {
  return await service.post('/createAnswer', data);
};
export const GET_ANSWERS = async () => {
  return await service.get('/viewAnswers');
};
export const GET_ANSWER = async questionId => {
  return await service.get(`/viewAnswer/${questionId}`);
};
