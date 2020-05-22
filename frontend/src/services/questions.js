import axios from 'axios';

const baseURL = 'https://polar-woodland-94575.herokuapp.com';

const service = axios.create({
  baseURL,
  withCredentials: true,
});

export const CREATE_QUESTION = async data => {
  return await service.post('/createQuestion', data);
};
export const GET_QUESTIONS = async () => {
  return await service.get('/viewQuestions');
};
export const GET_QUESTION = async questionId => {
  return await service.get(`/viewQuestion/${questionId}`);
};
export const EDIT_QUESTION = async data => {
  return await service.patch(`/editQuestion/${data.questionId}`, data);
};
export const DELETE_QUESTION = async questionId => {
  return await service.delete(`deleteQuestion/${questionId}`);
};
