import axios from "axios";

const IProducts = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  try {
    const { data } = await IProducts.get("/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default IProducts;
