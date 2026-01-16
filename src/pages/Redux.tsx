import { TodoInput, TodoList } from "@/components";
import { addTodo, deleteTodo, toggleTodo } from "@/store/redux/legacy/actions";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import type { Todo } from "@/types";
import { fetchTodos } from "@/store/redux/legacy/thunks";

const Redux = () => {
  const reduxTodos = useAppSelector(
  state => state.legacyTodos
);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Redux</h1>
      <button
        className="mb-5 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {fetchTodos(dispatch);}}
      >
        Fetch Todos
      </button>
      <TodoInput
        onAdd={(title: string) => {
          dispatch(
            addTodo({ id: crypto.randomUUID(), title, completed: false })
          );
        }}
      />
      <TodoList
        todos={reduxTodos.todos as Todo[]}
        onToggle={(id: string) => dispatch(toggleTodo(id))}
        onDelete={(id: string) => dispatch(deleteTodo(id))}
      />
    </div>
  );
};

export default Redux;
