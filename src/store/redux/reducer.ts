import { combineReducers } from "redux";
import legacyTodoReducer from "./legacy/reducer";
import rtkTodoReducer from "./rtk/slices/todoSlice";

export const rootReducer = combineReducers({
  legacyTodos: legacyTodoReducer,
  rtkTodos: rtkTodoReducer,
});