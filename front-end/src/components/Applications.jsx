import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const { data } = await axios.get(
        `https://portfolio-8y16.onrender.com/api/v1/user/getapplication`,
        {
          withCredentials: true,
        }
      );
      setApplications(data.applications);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteApplication = async(id) => {
    try{
      const response = await axios.delete(`https://portfolio-8y16.onrender.com/api/v1/user/deleteapplication/${id}`,{withCredentials:true})
      setApplications(applications.filter(application => application.id !== id))
      toast.success(response.data.message)
    } catch (error){
      console.log(error)
    }
  }
  

  useEffect(() => {
    fetchApplications();
  }, [applications]);

  return (
    <div className="container bg-slate-600 h-[90.2vh] overflow-y-auto p-3 mx-auto">
      <div className=" my-8 p-4">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="hidden sm:table-header-group">
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Query</th>
              <th className="py-3 px-6">Delete</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => {
              return (
                <tr
                className="border-b hover:bg-gray-100 flex flex-col sm:table-row sm:flex-row"
                  key={index}
                >
                  <td className="py-4 px-6 before:content-['Name:'] before:font-semibold sm:before:content-none">
                    {application.name}
                  </td>
                  <td className="py-4 px-6 before:content-['Email:'] before:font-semibold sm:before:content-none">
                    {application.email}
                  </td>
                  <td className="py-4 px-6 before:content-['Query:'] before:font-semibold sm:before:content-none">
                    {application.query}
                  </td>
                  <td className="py-4 px-6 before:content-['Query:'] before:font-semibold sm:before:content-none">
                    <button
                    onClick={()=>{deleteApplication(application._id)}}>
                    <lord-icon
                      src="https://cdn.lordicon.com/hwjcdycb.json"
                      trigger="hover"
                      style={{ width: 25, height: 25 }}
                      
                    ></lord-icon>

                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
