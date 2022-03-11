import React, { useEffect } from "react";
import "./Auth.scss";
import Lottie from "react-lottie";
import data from "./../assets/signinfile.json";
import Input from "../components/Input/Input";
import Button from "../components/button/Button";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { register, signin } from "../redux/auth/auth.action";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: data,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Auth() {
  const navigate = useNavigate();
  const { who } = useParams();
  const isSignIn = who === "signin" ? true : false;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    isLoggedIn && navigate("/todo");
  }, [isLoggedIn, navigate]);
  const dispatch = useDispatch();
  const { formData, handleInputChange } = useForm({
    name: "",
    password: "",
  });

  const { name, password } = formData;
  return (
    <div className="Auth">
      <div className="AuthLeft">
        <Lottie options={defaultOptions1} className="AuthLeftImg" />
      </div>
      <div className="AuthRight">
        <h1 className="AuthRightHead">{isSignIn ? "Sign in" : "Register"}</h1>
        <div className="AuthRightBottom">
          <Input
            placeholder="Enter username"
            value={name}
            name="name"
            onChange={handleInputChange}
          />
          <Input
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={handleInputChange}
          />
          <div className="AuthRightBottomButtons">
            <Button
              color="#fff"
              bg="blue"
              bc="transparent"
              p="10px"
              c="pointer"
              br="10px"
              m="0px 10px"
              onClick={(e) => {
                e.preventDefault();
                isSignIn
                  ? dispatch(signin(formData))
                  : dispatch(register(formData));
              }}
            >
              {isSignIn ? "signin" : "register"}
            </Button>
          </div>
          {!isSignIn ? (
            <Link to="/auth/signin" className="AuthRightBottomLinks">
              signin
            </Link>
          ) : (
            <Link to="/auth/register" className="AuthRightBottomLinks">
              don't have account? register instead
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
