import type { Todo } from "@/types";
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  TOGGLE_TODO,
} from "./actionTypes";

interface TodoAction {
  type: string;
  payload: Todo | string;
}

const initialState: { todos: Todo[]; loading: boolean; error: boolean } = {
  todos: [],
  loading: false,
  error: false,
};

export default function todoReducer(state = initialState, action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload as Todo] };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { todos: action.payload, loading: false, error: false };
    case FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
