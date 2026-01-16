import { TodoInput, TodoList } from "@/components";
import type { Todo } from "@/types";
import { useState } from "react";

const JavaScript = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">JavaScript</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
};

export default JavaScript;
