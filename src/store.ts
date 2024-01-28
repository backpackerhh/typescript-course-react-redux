import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import todosReducer from "./reducers/todosReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
