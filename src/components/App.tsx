import { Counter } from "./Counter";
import { TodoList } from "./TodoList";

interface AppProps {
  greet: string;
}

export const App: React.FC<AppProps> = ({ greet }) => {
  return (
    <div>
      {greet}
      <Counter />
      <TodoList />
    </div>
  );
};
