import Layoyt from "./layout.tsx";
import EducationSection from "@/components/education/education-section.tsx";

function Education() {
  return (
    <Layoyt id="education" children={
      <EducationSection />
    }>
    </Layoyt>
  )
}

export default Education;
