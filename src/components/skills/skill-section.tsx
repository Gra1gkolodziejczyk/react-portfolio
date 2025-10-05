import { SkillColumn } from "@/components/skills/skill-column.tsx";
import { useTranslation } from "react-i18next";
import { useTranslatedSkills } from "@/hooks/useTranslatedSkills";

export default function SkillsSection() {
  const { t } = useTranslation();
  const groups = useTranslatedSkills();
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        {t('skills.title')}</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((g) => (
          <SkillColumn key={g.title} title={g.title} items={g.items} />
        ))}
      </div>
    </section>
  );
}