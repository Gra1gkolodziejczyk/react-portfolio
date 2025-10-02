import Navbar from "./components/navbar/navbar.tsx"
import Accueil from "./components/accueil.tsx"
import AboutMe from "./components/about-me.tsx"
import Skills from "./components/skills.tsx"
import Projects from "./components/projects.tsx"
import Contact from "./components/contact.tsx"

function App() {
  return (
    <>
      <Navbar />
      <Accueil />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
