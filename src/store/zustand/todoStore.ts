import { fetchTodosApi } from "@/api/todoApi";
import type { Todo } from "@/types";
import { create } from "zustand";

type TodoState = {
  todos: Todo[];
  loading: boolean;
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  loading: false,

  fetchTodos: async () => {
    set({ loading: true });
    const data = await fetchTodosApi();
    set({ todos: data, loading: false });
  },

  addTodo: (title) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: crypto.randomUUID(), title, completed: false },
      ],
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
    
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));
