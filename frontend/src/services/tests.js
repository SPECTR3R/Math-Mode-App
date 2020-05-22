import axios from "axios";

const baseURL = 'https://polar-woodland-94575.herokuapp.com';

const service = axios.create({
  baseURL,
  withCredentials: true,
});

export const CREATE_TEST = async (data) => {
  return await service.post("/createTest", data);
};
export const GET_TESTS = async () => {
  return await service.get("/viewTests");
};
export const GET_TEST = async (questionId) => {
  return await service.get(`/viewTest/${questionId}`);
};

export const DELETE_TEST = async (questionId) => {
  return await service.delete(`deleteTest/${questionId}`);
};