import React, { useState } from 'react';
import './ContactForm.css'; 
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const navigateTo = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`http://hemant:4000/api/v1/user/postapplication`,formData,{
        withCredentials:true,
        headers:{
          'Content-Type': 'application/json',
        }
      })
      setFormData({
        name: '',
        email: '',
        query: '',
      })
      toast.success(response.data.message)
      navigateTo('/')
    }catch(error){
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="contact-container" id='contactus'>
      <h2>CONTACT</h2>
      <p>Get in touch with us to bring your digital vision to life – we’re here to help!</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Enter your name*</label>
        <input className='border'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          
        />

        <label htmlFor="email">Enter your email*</label>
        <input className='border'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          
        />
        <label htmlFor="query">Your message*</label>
        <textarea className='border'
          id="query"
          name="query"
          value={formData.query}
          onChange={handleChange}
          
        />
      <div className='submit'>

        <button type="submit">SUBMIT</button>
      </div>

      </form>
    </div>
  );
};

export default Contact;