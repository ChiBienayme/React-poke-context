import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";


export function Login(){
  const{register, handleSubmit} = useForm();
  const [data, setData] = useState("");

  
  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

      <h1>Login</h1>

      <input {...register("userName")} placeholder="Username" />
      <p>Invalid user name</p>

      <input {...register("userName")} placeholder="Username" />
      <p>Invalid password</p>

      <p>{data}</p>
      <input type="submit" value="SE CONNECTER"/> 
    
    </form>
  )
  
}

export default Login;