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
  const __data = {
    id: 1,
    colorCode: 1,
    storageCode: 2,
  };
  // const body = JSON.stringify(data)
  // console.log('addToCart json  ---> ', JSON.stringify(data) )

  const { data } = await axios.post(`${BASE_URL}api/cart/`, {
    body: JSON.stringify(__data),
  });
  return data;

  /*
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}api/cart/`, {
      method: "POST",
      body: JSON.stringify(dataToSend),
    })
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
  */
};
