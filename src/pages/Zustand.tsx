import { TodoInput, TodoList } from "@/components";
import { useTodoStore } from "@/store/zustand/todoStore";

const Zustand = () => {
  const { todos, fetchTodos, addTodo, toggleTodo, deleteTodo } = useTodoStore();
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Redux Toolkit</h1>

      <button
        className="mb-5 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          fetchTodos();
        }}
      >
        Fetch Todos
      </button>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={(id: string) => toggleTodo(id)}
        onDelete={(id: string) => deleteTodo(id)}
      />
    </div>
  );
};

export default Zustand;
