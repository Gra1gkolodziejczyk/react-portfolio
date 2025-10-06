import { SkillCard, type SkillCardProps } from "@/components/skills/skill-card.tsx";

export type SkillColumnProps = {
  title: string;
  items: SkillCardProps[];
};


export function SkillColumn({ title, items }: SkillColumnProps) {
  return (
    <section className="rounded-3xl p-5">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary text-center sm:text-left">{title}</h3>
      <div className="grid grid-cols-1 gap-3 justify-items-center sm:grid-cols-2 sm:justify-items-stretch">
        {items.map((it) => (
          <div className="group" key={it.name}>
            <SkillCard {...it} />
          </div>
        ))}
      </div>
    </section>
  );
}

export type SkillColumnData = SkillColumnProps;
