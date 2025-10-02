import Layout from "@/components/layout.tsx";
import ProjectSection from "@/components/projects/project-section.tsx";

function Projects() {
  return (
    <Layout children={
      <ProjectSection />
    }>
    </Layout>
  )
}

export default Projects;
