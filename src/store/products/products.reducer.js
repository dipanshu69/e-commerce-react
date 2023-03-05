import SHOP_DATA from "../../shop-data";
import PRODUCT_ACTION_TYPES from "./products.types";


const INITIAL_STATE = {
  product: {
    SHOP_DATA,
  },
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_ACTION_TYPES.ADD_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};
