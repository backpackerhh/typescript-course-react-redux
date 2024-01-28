import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchTodos } from "../actions/fetchTodosAction";

export const TodoList: React.FC = () => {
  const { todos, loading, error } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos("https://jsonplaceholder.typicode.com/todos?_limit=5"));
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "Completed" : "Not completed"}
          </li>
        ))}
      </ul>
    </div>
  );
};
