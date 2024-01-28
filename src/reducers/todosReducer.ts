import { createReducer } from "@reduxjs/toolkit";
import { Todo, fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } from "actions/fetchTodosAction";

interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTodosRequest, (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    })
    .addCase(fetchTodosSuccess, (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        todos: action.payload,
      };
    })
    .addCase(fetchTodosFailure, (state, action) => {
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload,
      };
    });
});

export default todosReducer;
