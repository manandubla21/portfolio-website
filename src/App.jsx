import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {BrowserRouter} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter className="bg-[#0a0612] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </BrowserRouter>
  )
}
