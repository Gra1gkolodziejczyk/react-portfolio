import Layout from "./layout.tsx"
import HeroSection from "./hero/hero-section.tsx"


function Home() {
  return (
    <Layout children={
     <HeroSection />
    }>
    </Layout>
  )
}

export default Home;
