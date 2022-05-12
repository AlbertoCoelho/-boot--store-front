import axios from "axios";

export const api = axios.create({
  // baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  baseURL: "https://mongodb-deploy-cardgamestore.herokuapp.com",
});

export const makeSignUp = async (formData) => {
  await api.post("/sign-up", formData);
};

export const makeLogin = async (formData) => {
  const token = await api.post("/login", formData);
  return token;
};

export const getProducts = async () => {
  return await api.get("/products");
};

export const addProductToCart = async (product) => {
  // const token = localStorage.getItem("token");
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  return await api.post("/cart", product);
};
