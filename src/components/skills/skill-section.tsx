import { SkillColumn, type SkillColumnData } from "@/components/skills/skill-column.tsx";

const defaultGroups: SkillColumnData[] = [
  {
    title: "Outils",
    items: [
      { name: "Git", iconSrc: "/gitHub_dark.svg", rating: 5, years: 5 },
      { name: "IntelliJ IDEA", iconSrc: "/intellijidea.svg", rating: 4, years: 4 },
      { name: "Postman", iconSrc: "/postman.svg", rating: 4, years: 5 },
      { name: "Stripe", iconSrc: "/stripe.svg", rating: 4, years: 2 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", iconSrc: "/react.svg", rating: 5, years: 4 },
      { name: "Next.js", iconSrc: "/nextjs.svg", rating: 4, years: 3 },
      { name: "Nuxt", iconSrc: "/nuxt.svg", rating: 3, years: 1 },
      { name: "TypeScript", iconSrc: "/typescript.svg", rating: 5, years: 4 },
      { name: "Tailwind CSS", iconSrc: "/tailwindcss.svg", rating: 5, years: 4 },
      { name: "scss", iconSrc: "/sass.svg", rating: 5, years: 3 },
      { name: "Zod", iconSrc: "/zod.svg", rating: 4, years: 2 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "NestJS", iconSrc: "/nestjs.svg", rating: 4, years: 3 },
      { name: "GraphQL", iconSrc: "/graphql.svg", rating: 4, years: 3 },
      { name: "Prisma", iconSrc: "/prisma_dark.svg", rating: 5, years: 4 },
      { name: "Laravel", iconSrc: "/laravel.svg", rating: 4, years: 2 },
      { name: "Jest", iconSrc: "/jest.svg", rating: 4, years: 3 },
      { name: "Vitest", iconSrc: "/vitest.svg", rating: 4, years: 3 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", iconSrc: "/postgresql.svg", rating: 5, years: 4 },
      { name: "Redis", iconSrc: "/redis.svg", rating: 3, years: 2 },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Vercel", iconSrc: "/vercel_dark.svg", rating: 5, years: 3 },
      { name: "AWS", iconSrc: "/amazon_web_services_dark.svg", rating: 3, years: 2 },
      { name: "Docker", iconSrc: "/docker.svg", rating: 4, years: 3 },
      { name: "Kubernetes", iconSrc: "/kubernetes.svg", rating: 3, years: 1 },
    ],
  },
];

export default function SkillsSection({ groups = defaultGroups }: { groups?: SkillColumnData[] }) {
  return (
    <section aria-labelledby="skills-title" className="w-full">
      <h2 id="skills-title" className="text-2xl font-bold mb-6 text-primary">Compétences</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((g) => (
          <SkillColumn key={g.title} title={g.title} items={g.items} />
        ))}
      </div>


      <p className="mt-4 text-xs text-black dark:text-white">*Survolez une carte pour voir l'expérience (étoiles + années). Tout est contenu dans la carte.</p>
    </section>
  );
}
