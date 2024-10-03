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
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
