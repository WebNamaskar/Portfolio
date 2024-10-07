import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router";

const LoginForm = () => {

    const {setIsAuthenticated} = useContext(Context)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigateTo = useNavigate()

  const handleSubmit = async(e) => {
    console.log(email,password,confirmPassword)
    e.preventDefault();
    try{
        const response = await axios.post(`https://portfolio-8y16.onrender.com/api/v1/admin/login`,{email,password,confirmPassword},{
            withCredentials:true,
            headers:{
                "Content-Type":"application/json"
            }
        })
        toast.success(response.data.message)
        setIsAuthenticated(true)
        navigateTo("/dashboard/v1/admin")

    } catch(error){
        toast.error(error.response.data.message)
        setIsAuthenticated(false)
    }
  };



  return (
    <>
      <div className="bg-slate-400 h-screen w-screen flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-500 rounded-md flex justify-center items-center flex-col w-full md:w-1/2
        p-5"
        >
          <h1 className="text-3xl text-white font-bold mb-4">Login</h1>
          <div className="mb-4 flex flex-col w-full">
            <label
              htmlFor="email"
              className="mb-2 text-white font-bold text-xl"
            >
              Enter Your Email
            </label>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="p-2 mb-4 rounded-md "
            ></input>
          </div>
          <div className="mb-4 flex flex-col w-full">
            <label
              htmlFor="password"
              className="mb-2 text-white font-bold text-xl"
            >
              Enter Your Password
            </label>
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="p-2 mb-4 rounded-md "
            ></input>
          </div>
          <div className="mb-4 flex flex-col w-full">
            <label
              htmlFor="confirmPassword"
              className="mb-2 text-white font-bold text-xl"
            >
              Confirm Your Password
            </label>
            <input
              type="password"
              placeholder="confirm Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="p-2 mb-4 rounded-md "
            ></input>
          </div>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-400 hover:shadow-2xl" type="submit">
            Login Button
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
