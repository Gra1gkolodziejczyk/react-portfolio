import Layout from "./layout.tsx"
import HeroSection from "./hero/hero-section.tsx"


function Home() {
  return (
    <Layout id="home" children={
     <HeroSection />
    }>
    </Layout>
  )
}

export default Home;
