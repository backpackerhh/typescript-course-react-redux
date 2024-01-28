import { useState } from "react";
import { createRoot } from "react-dom/client";

interface AppProps {
  greet: string;
}

const App: React.FC<AppProps> = ({ greet }) => {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const onDecrement = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}

      <div>{greet}</div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App greet="Hi there!" />);
