import { createActions } from "../../utils/reducers/reducer.utils";
import PRODUCT_ACTION_TYPES from "./products.types";


export const setProduct = product => {
    createActions(PRODUCT_ACTION_TYPES.ADD_PRODUCT, product);
}

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     setProducts(categoryMap);
  //   };
  //   getCategoriesMap();
  // });
