import React, { useReducer } from "react";
import "./Todo.scss";
import Input from "../components/Input/Input";
import Button from "../components/button/Button";
import useForm from "../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/todo/todo.action";
import Card from "../components/card/Card";

export default function Todo() {
  const { formData, handleInputChange } = useForm({
    todo: "",
  });
  const todos = useSelector((state) => state.todo);
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  return (
    <main className="Todo">
      <nav className="TodoNav">
        <div className="TodoNavLeft">
          <span className="TodoNavLeftHead">Todo</span>
        </div>
        <div className="TodoNavRight">
          <span className="TodoNavRightSpan">
            logged in as <b>{user.name}</b>
          </span>
          <Button
            p="10px"
            br="10px"
            bc="transparent"
            c="pointer"
            bg="red"
            color="#fff"
          >
            Logout
          </Button>
        </div>
      </nav>
      <section></section>
    </main>
  );
}
