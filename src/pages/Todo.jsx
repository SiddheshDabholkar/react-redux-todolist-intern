import React from "react";
import Button from "../components/button/Button";
import useForm from "../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todo.action";
import Card from "../components/card/Card";
import "./Todo.scss";
import { logout } from "../redux/auth/auth.action";

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
            onClick={() => dispatch(logout(user.id))}
          >
            Logout
          </Button>
        </div>
      </nav>
      <section className="TodoSection">
        <div className="TodoSectionTop">
          <input
            name="todo"
            placeholder="enter todo over here"
            value={formData.todo}
            className="TodoSectionTopInput"
            onChange={handleInputChange}
          />
          <Button
            p="6px 8px"
            br="10px"
            bc="transparent"
            c="pointer"
            onClick={() => dispatch(addTodo(formData))}
          >
            Add
          </Button>
        </div>
        <div className="TodoSectionBottom">
          {todos.map((t) => (
            <Card {...t} />
          ))}
        </div>
      </section>
    </main>
  );
}
