import { fetchTodosApi } from "@/api/todoApi";
import type { Todo } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetch",
  async () => {
    return await fetchTodosApi();
  }
);