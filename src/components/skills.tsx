import Layout from "@/components/layout.tsx";
import SkillsSection from "@/components/skills/skill-section.tsx";

function Skills() {
  return (
    <Layout id="skills" children={
      <SkillsSection />
    }>
    </Layout>
  )
}

export default Skills;
