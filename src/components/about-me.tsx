import Layout from "@/components/layout.tsx";
import AboutMeSection from "@/components/about/about-me-section.tsx";

function AboutMe() {
  return (
    <Layout children={
      <AboutMeSection />
    }>
    </Layout>
  )
}

export default AboutMe;
