import axios from "axios";
const BASE_URL = "https://front-test-api.herokuapp.com/";

export const getProducts = async () => {
  const { data } = await axios.get(`${BASE_URL}api/product/`);
  return data;
};

export const getProduct = async (id) => {
  const { data } = await axios.get(`${BASE_URL}api/product/${id}`);
  return data;
};

export const addToCart = async (dataToSend) => {
  console.log("addToCart dataToSend  ---> ", dataToSend);
  const { data } = await axios.post(`${BASE_URL}api/cart/`, dataToSend);
  return data;
};
