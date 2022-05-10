import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`
});

export const makeSignUp = async (formData) => {
  await api.post("/sign-up",formData)
}

export const makeLogin = async (formData) => {
  const token = await api.post("/",formData);
  return token;
}