import { createAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodosRequest = createAction<void>(ActionTypes.fetchTodosRequest);
export const fetchTodosSuccess = createAction<Todo[], ActionTypes.fetchTodosSuccess>(ActionTypes.fetchTodosSuccess);
export const fetchTodosFailure = createAction<string, ActionTypes.fetchTodosFailure>(ActionTypes.fetchTodosFailure);

export const fetchTodos = (url: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchTodosRequest());

    try {
      const response = await fetch(url);
      const todos: Todo[] = await response.json();

      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchTodosFailure(error.message));
      }
    }
  };
};
