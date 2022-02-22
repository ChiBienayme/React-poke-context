
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// => have to use the version npm i react-router-dom@5.3.0

export default function Login() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //go to Home
    history.push('/');
  }

  return (
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
      {errors.userName && <span>Please enter a username</span>}

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
      {errors.password && <span>Please enter a password</span>}

      
      <input type="submit" value="SE CONNECTER"/>
    </form>
  );
}

