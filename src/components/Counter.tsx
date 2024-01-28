import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount, decrement } from "../slices/counterSlice";
import { RootState } from "../store";

export const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button aria-label="Increment value by 2" onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};
