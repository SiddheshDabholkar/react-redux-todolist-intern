import React from "react";
import Lottie from "react-lottie";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import data from "./../assets/todofile.json";
import "./Home.scss";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: data,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="HomeLeft">
        <h1 className="HomeLeftText">Todo</h1>
        <span className="HomeLeftSmall">
          All in one place to keep track of your task
        </span>
      </div>
      <div className="HomeRight">
        <div className="HomeRightTop">
          <Lottie options={defaultOptions1} />
        </div>
        <div className="HomeRightBottom">
          <Button
            color="#fff"
            bg="blue"
            bc="transparent"
            p="10px"
            c="pointer"
            br="10px"
            m="0px 10px"
            onClick={() => navigate("/auth/signin")}
          >
            Signin
          </Button>
          <Button
            color="#fff"
            bg="blue"
            br="10px"
            bc="transparent"
            p="10px 5px"
            c="pointer"
            onClick={() => navigate("/auth/register")}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
