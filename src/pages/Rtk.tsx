import { TodoInput, TodoList } from "@/components";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { addTodo, deleteTodo, toggleTodo } from "@/store/redux/rtk/slices/todoSlice";
import { fetchTodos } from "@/store/redux/rtk/thunks/fetchTodos";
import type { Todo } from "@/types";

const Rtk = () => {
  const reduxTodos: Todo[] = useAppSelector(state => state.rtkTodos.items);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Redux Toolkit</h1>
      
            <button
              className="mb-5 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => {dispatch(fetchTodos());}}
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
        todos={reduxTodos}
        onToggle={(id: string) => dispatch(toggleTodo(id))}
        onDelete={(id: string) => dispatch(deleteTodo(id))}
      />
    </div>
  );
};

export default Rtk;
