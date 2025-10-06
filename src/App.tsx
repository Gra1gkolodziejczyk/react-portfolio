import { useEffect } from "react"
import Navbar from "./components/navbar/navbar.tsx"
import Home from "./components/home.tsx"
import AboutMe from "./components/about-me.tsx"
import Education from "@/components/education.tsx";
import Skills from "./components/skills.tsx"
import Projects from "./components/projects.tsx"
import Contact from "./components/contact.tsx"
import { useTranslation } from "react-i18next"
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
