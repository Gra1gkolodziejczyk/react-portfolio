import { useTranslation } from "react-i18next";
import { skillsData } from "@/data/skills.data";
import type { SkillColumnData } from "@/components/skills/skill-column.tsx";

export function useTranslatedSkills(): SkillColumnData[] {
    const { t } = useTranslation();

    return skillsData.map((skill) => ({
        title: t(skill.titleKey),
        items: skill.items,
    }));
}