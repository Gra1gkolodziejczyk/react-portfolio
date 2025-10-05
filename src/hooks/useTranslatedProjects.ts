import { useTranslation } from "react-i18next";
import { projectsData } from "@/data/projects.data";
import type { Project } from "@/types/project.type";

export function useTranslatedProjects(): Project[] {
    const { t } = useTranslation();

    return projectsData.map((project) => ({
        id: project.id,
        title: t(project.titleKey),
        role: t(project.roleKey),
        cover: project.cover,
        techs: project.techs,
        siteUrl: project.siteUrl,
        start: project.start,
        end: project.endKey ? t(project.endKey) : project.end || '',
    }));
}