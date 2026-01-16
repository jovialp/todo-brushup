import type { Todo } from "@/types";

type Props = {
  readonly todos: Todo[];
  readonly onToggle: (id: string) => void;
  readonly onDelete?: (id: string) => void;
};

export function TodoList({ todos, onToggle, onDelete }: Props) {
  return (
    <ul className="mt-5">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between p-5 bg-gray-100 rounded-md mb-2"
        >
          <div className={`flex gap-5 ${todo.completed ? "line-through" : ""}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            {todo.title}
          </div>
          {onDelete && (
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
}
