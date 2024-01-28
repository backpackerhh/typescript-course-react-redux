import { useState } from "react";
import { render } from "react-dom";

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

render(<App greet="Hi there!" />, document.querySelector("#root"));
