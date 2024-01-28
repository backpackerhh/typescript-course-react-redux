import { Counter } from "./Counter";

interface AppProps {
  greet: string;
}

export const App: React.FC<AppProps> = ({ greet }) => {
  return (
    <div>
      {greet}
      <Counter />
    </div>
  );
};
