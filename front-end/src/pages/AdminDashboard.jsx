import React, { useContext, useEffect } from 'react'
import { Context } from '../main'
import axios from 'axios';
import Applications from '../components/Applications';
import AdminNavBar from '../components/AdminNavBar';
import { useNavigate } from 'react-router';

const AdminDashboard = () => {

  const { isAuthenticated, setIsAuthenticated, setAdmin , admin} = useContext(Context);
  const navigateTo = useNavigate()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://portfolio-8y16.onrender.com/api/v1/admin/getadmin/me`,
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
  
  if(!isAuthenticated){
    navigateTo("/login/v1/admin")
  }

  return (
    <>
    <div className='bg-slate-600'>
      <AdminNavBar name={admin.name} />
      <Applications/>
    </div>
    </>
  )
}

export default AdminDashboard
