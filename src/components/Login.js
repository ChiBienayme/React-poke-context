import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="User Name"
        {...register("userName", {
          required: "Required",
          pattern: {
            value: /^[A-Za-z]\w{,15}$/,
            message: "Maximum 15 characters",
          },
        })}
      />
      <span>{errors.userName && errors.userName.message}</span>
      <p>Invalid user name</p>

      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Required",
          pattern: {
            value: /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,}$/,
            message:
              "Minimum 6 characters which contain at least 1 numeric digit and a special character",
          },
        })}
      />
      <span>{errors.password && errors.password.message}</span>
      <p>Invalid password</p>


      <p>{data}</p>
      <input type="submit" value="SE CONNECTER" />
    </form>
  );
}

export default Login;
