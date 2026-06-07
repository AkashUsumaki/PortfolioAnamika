import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skill.jsx'
import Project from './components/Project.jsx'
import Certification from './components/Certification.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Education />
    <Skills />
    <Project />
    <Certification />
    <Contact />
    <Footer />
  </StrictMode>,
)
