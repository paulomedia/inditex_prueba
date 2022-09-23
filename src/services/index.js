import axios from "axios";
const BASE_URL = "https://front-test-api.herokuapp.com/";
const PATH = {
  PRODUCT: "api/product/",
  CART: "api/cart/",
};

export const getProducts = async () => {
  const { data } = await axios.get(`${BASE_URL}${PATH.PRODUCT}`);
  return data;
};

export const getProduct = async (id) => {
  const { data } = await axios.get(`${BASE_URL}${PATH.PRODUCT}${id}`);
  return data;
};

export const addToCart = async (params) => {
  const { data } = await axios.post(`${BASE_URL}${PATH.CART}`, params);
  return data;
};
