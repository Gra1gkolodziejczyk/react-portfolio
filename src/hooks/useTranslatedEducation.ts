import { useTranslation } from "react-i18next";
import { educationData } from "../data/education.data.ts";
import type { Education } from "../types/education.ts";

export function useTranslatedEducation(): Education[] {
  const { t } = useTranslation();

  return educationData.map((edu) => ({
    id: edu.id,
    title: t(edu.titleKey),
    school: t(edu.schoolKey),
    location: edu.locationKey ? t(edu.locationKey) : undefined,
    period: t(edu.periodKey),
  }));
}
