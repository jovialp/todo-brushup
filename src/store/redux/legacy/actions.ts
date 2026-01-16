
import type { Todo } from "@/types";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: id,
});