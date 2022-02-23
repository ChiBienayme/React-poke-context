import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// => have to use the version npm i react-router-dom@5.3.0

import { UserContext } from "../App";

export default function Login() {
  const { setAuth, isLogged } = useContext(UserContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (_data) => {
    setAuth();
    // console.log(data);
    history.push("/"); //go to homepage
  };

  return  isLogged ? (
    <div>
      <h4>You are logged in! Do you want to log out?</h4>
      <button className="button" onClick={onSubmit}>
        Log out
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      {/* UserName */}
      <input
        type="text"
        placeholder="User Name"
        {...register("userName", {
          required: true,
          maxLength: 15,
        })}
      />
      <p>Invalid user name</p>
      {errors.userName && <span>Maximum 15 characters</span>}

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: true,
          maxLength: 6,
        })}
      />
      <p>Invalid password</p>
      {errors.password && <span>Minimum 6 characters</span>}

      <button className="button" type="submit">
        Log in
      </button>
    </form>
  );
}
