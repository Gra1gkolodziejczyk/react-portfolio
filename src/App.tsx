import Navbar from "./components/navbar/navbar.tsx"
import Home from "./components/home.tsx"
import AboutMe from "./components/about-me.tsx"
import Skills from "./components/skills.tsx"
import Projects from "./components/projects.tsx"
import Contact from "./components/contact.tsx"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
