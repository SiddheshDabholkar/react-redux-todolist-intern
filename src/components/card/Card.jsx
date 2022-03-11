import React, { useState } from "react";
import "./Card.scss";
import Button from "../button/Button";
import { FcTodoList } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/todo/todo.action";

export default function Card({ id, todo }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className="Card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="CardTop">
        <FcTodoList />
      </div>
      <div className="CardMid">
        <span>{todo}</span>
      </div>
      <div className="CardBottom">
        {isHovered && (
          <Button
            w="100%"
            bg="red"
            bc="transparent"
            color="#fff"
            br="10px"
            onClick={() => dispatch(deleteTodo(id))}
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}
