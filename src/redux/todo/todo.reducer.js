import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS } from "./todo.types";
import { getInitialState } from "../../utils/getInitialState";

export const todoReducer = (state = getInitialState("todos", []), action) => {
  switch (action.type) {
    case ADD_TODO:
      const { todo } = action.payload;
      const newtodo = {
        id: Math.random(),
        todo,
      };
      state = [...state, newtodo];
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    case DELETE_TODO:
      let id = action.payload;
      const newList = state.filter((s) => Number(s.id) !== Number(id));
      localStorage.setItem("todos", JSON.stringify(newList));
      return newList;
    case EDIT_TODO:
      let { id: sameId, todo: newTitle } = action.payload;
      const newState = state.map((s) => {
        if (s.id === sameId) {
          let newObj = { id: s.id, todo: newTitle };
          return newObj;
        } else {
          return s;
        }
      });
      return newState;
    case GET_TODOS:
      return state;
    default:
      return state;
  }
};
