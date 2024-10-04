import React, { useContext, useEffect } from "react";
import { Context } from "../main";
import axios from "axios";
import { useNavigate } from "react-router";
import AdminDashboard from "./AdminDashboard";
import LoginForm from "../components/LoginForm";

const Login = () => {

  const {isAuthenticated, setIsAuthenticated, setAdmin , admin} = useContext(Context);
  const navigateTo = useNavigate()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/admin/getadmin/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.admin);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  if(isAuthenticated)
  {
    navigateTo("/dashboard/v1/admin")
  }
  
  return <>
  {
    <LoginForm/>
  }
  </>;
};

export default Login;
