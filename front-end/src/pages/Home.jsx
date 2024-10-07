import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  ">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default Home
