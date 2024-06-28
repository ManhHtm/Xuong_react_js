const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_PRODUCTS":
      return { ...state, products: [...state.products, action.payload] };

    case "UPDATE_PRODUCTS":
      return {
        ...state,
        products: state.products.map((products) =>
          products.id === action.payload.id ? action.payload : products
        ),
      };
    case "DELETE_PRODUCTS":
      return {
        ...state,
        products: state.products.filter(
          (products) => products.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default productReducer;
