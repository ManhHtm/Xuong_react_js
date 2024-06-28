import { createContext, useEffect, useReducer } from "react";
import IProducts from "../axios/axios";
import productReducer from "../reducers/ProductsReducer";

export const ProductsContext = createContext();
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, { products: [] });
  useEffect(() => {
    (async () => {
      try {
        const { data } = await IProducts.get("/products");
        dispatch({ type: "SET_PRODUCTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
