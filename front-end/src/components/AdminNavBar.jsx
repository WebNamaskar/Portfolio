import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router";

const AdminNavBar = ({ name }) => {

  const {setIsAuthenticated, setAdmin} = useContext(Context);
  const navigateTo = useNavigate()

  const handleLogout = async() => {
    try{
        const response = await axios.get(`https://portfolio-8y16.onrender.com/api/v1/admin/logout`,{
            withCredentials:true
        })
        toast.success(response.data.message)
        setIsAuthenticated(false)
        setAdmin({})
        navigateTo("/")
    } catch(error){
        toast.error(error.response.data.message)
    }
  };

  return (
    <nav className="bg-slate-400 p-4 shadow-lg  ">
      <ul className="flex justify-around items-center font-serif text-white font-bold text-xl h-full">
        <div>logo</div>
        <div className="flex justify-center items-center">
          <div className="mr-4">{name}</div>
          <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100"
          onClick={handleLogout}>
            Logout
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default AdminNavBar;
