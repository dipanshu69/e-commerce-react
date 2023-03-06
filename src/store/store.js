import { compose, applyMiddleware } from "redux";
//import logger from "redux-logger";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

// const loggerMiddlerware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currentState: ", store.getState());

//   next(action);

//   console.log("nextState", store.getState());
// };

// const middleWares = [loggerMiddlerware];

// // const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
