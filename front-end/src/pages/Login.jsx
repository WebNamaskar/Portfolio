import React, { useContext, useEffect } from "react";
import { Context } from "../main";
import axios from "axios";
import { useNavigate } from "react-router";
import AdminDashboard from "./AdminDashboard";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, setAdmin } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/admin/getAdmin",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return <>
  {
    !isAuthenticated ? <LoginForm/> : <AdminDashboard/>
  }
  </>;
};

export default Login;
