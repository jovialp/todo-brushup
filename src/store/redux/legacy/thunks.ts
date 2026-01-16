import { fetchTodosApi } from "@/api/todoApi";
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./actionTypes";
import { type Dispatch } from "redux";

export const fetchTodos = async (dispatch: Dispatch) => {
  try {
    dispatch({ type: FETCH_START });
    const data = await fetchTodosApi();
    dispatch({ type: FETCH_SUCCESS, payload: data });
  } catch {
    dispatch({ type: FETCH_ERROR });
  }
};
