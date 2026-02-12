import { useState } from "react";



function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoString, setTodoString] = useState<string>("");

  const addTodo = () => {
    if (todoString.length > 0) {
      setTodos([...todos,  todoString]);
      setTodoString("");
    }
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((todo, i) => index !==i  );
    console.log(index, updatedTodos);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h2>Todo App</h2>

      <input
        value={todoString}
        onChange={(e) => {
          setTodoString(e.target.value);
        }}
      />

      <button onClick={addTodo}>add</button>

      <ul>
        {todos?.map((todo, i) => {
          return (
            <li>
              {todo}
              <button
                onClick={() => {
                  deleteTodo(i);
                }}
                className="p-2 border ml-2"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoApp;
