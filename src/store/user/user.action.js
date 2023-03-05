import { createActions } from "../../utils/reducers/reducer.utils";
import  USER_ACTION_TYPES  from "./user.types";



export const setCurrentUser = (user) => {
     createActions(USER_ACTION_TYPES.SET_CURRENT_USER, user);
  };
