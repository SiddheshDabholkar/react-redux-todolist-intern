import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS } from "./todo.types";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};
export const getAllTodo = (todos) => {
  return {
    type: GET_TODOS,
    payload: todos,
  };
};
