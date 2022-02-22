import React , { useState, createContext, useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// => have to use the version npm i react-router-dom@5.3.0


export const UserContext = createContext({
  isLogged: true,
});


export default function Login() {
  const history = useHistory();

  // const [isLogged, setLogged] = useState(false);
  const { isLogged, setLogged } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setAuth = (data) => {
    //go to Home
    history.push('/');
    setLogged( isLogged );  
  }

  return (
    <form onSubmit={handleSubmit(setAuth)}>
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

      
      <button className="button" type="submit" onClick={setAuth}>SE CONNECTER</button>
    </form>
  );
}

