import Layout from "./layout.tsx"
import HeroSection from "./hero/hero-section.tsx"


function Accueil() {
  return (
    <Layout children={
     <HeroSection />
    }>
    </Layout>
  )
}

export default Accueil;
