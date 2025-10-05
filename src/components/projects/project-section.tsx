import ProjectCard from "@/components/projects/project-card.tsx";
import { useTranslation } from "react-i18next";
import { useTranslatedProjects } from "@/hooks/useTranslatedProjects";

export default function ProjectsSection() {
    const { t } = useTranslation();
    const projects = useTranslatedProjects();

    return (
        <section className="w-full">
            <h2 className="mb-6 text-2xl font-bold text-primary">
                {t('projects.title')}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </section>
    );
}