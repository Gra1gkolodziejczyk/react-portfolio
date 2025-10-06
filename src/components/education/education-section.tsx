import { useTranslatedEducation } from "@/hooks/useTranslatedEducation";
import EducationTimeline from "./education-timeline";
import { useTranslation } from "react-i18next";

function EducationSection() {
  const education = useTranslatedEducation();
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        {t('education.title')}
      </h2>
        <EducationTimeline education={education} />
    </section>
  );
}

export default EducationSection;
