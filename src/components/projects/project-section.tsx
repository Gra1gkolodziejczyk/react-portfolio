import type { Project } from "@/types/project.type.ts";
import ProjectCard from "@/components/projects/project-card.tsx";

const sample: Project[] = [
  {
    id: "biume",
    title: "Biume - Plateforme type Doctolib pour les animaux",
    role: "CEO | Développeur Full-Stack",
    cover: "/biume.png",
    techs: [
      {name: "React", iconSrc: "/react.svg"},
      {name: "Tailwind CSS", iconSrc: "/tailwindcss.svg"},
      { name: "Nest.js", iconSrc: "/nestjs.svg" },
      {name: "Drizzle", iconSrc: "/drizzle.svg"},
      {name: "TypeScript", iconSrc: "/typescript.svg"},
      {name: "PostgreSQL", iconSrc: "/postgresql.svg"},
      {name: "Redis", iconSrc: "/redis.svg"},
      {name: "Jest", iconSrc: "/jest.svg"},
      {name: "Docker", iconSrc: "/docker.svg"},
      {name: "Kubernetes", iconSrc: "/kubernetes.svg"},
      {name: "AWS", iconSrc: "/amazon_web_services.svg"},
      {name: "Stripe", iconSrc: "/stripe.svg"},
    ],
    siteUrl: "https://biume.com/",
    start: "01/09/2024",
    end: "jusqu'à maintenant",
  },
  {
    id: "wedrivit-platform",
    title: "Wedrivit – Plateforme de location de voitures de collection",
    role: "Alternant | Développeur Full‑Stack",
    cover: "/wedrivit.png",
    techs: [
      { name: "Next", iconSrc: "/nextjs.svg" },
      { name: "TypeScript", iconSrc: "/typescript.svg" },
      { name: "Scss", iconSrc: "/sass.svg" },
      {name: "GraphQL", iconSrc: "/graphql.svg" },
      { name: "Prisma", iconSrc: "/prisma.svg" },
      { name: "MySQL", iconSrc: "/mysql.svg" },
      { name: "Stripe", iconSrc: "/stripe.svg" },
      { name: "Docker", iconSrc: "/docker.svg" },
      {name: "AWS", iconSrc: "/amazon_web_services.svg" },
    ],
    siteUrl: "https://wedrivit.com/",
    start: "18/09/2022",
    end: "18/11/2025",
  },
  {
    id: "retrobalade-platform",
    title: "Retrobalade – Plateforme de location de voitures de collection",
    role: "Alternant | Développeur Full‑Stack",
    cover: "/retrobalade.png",
    techs: [
      { name: "laravel", iconSrc: "/laravel.svg" },
      { name: "blade", iconSrc: "/blade.png" },
      { name: "scss", iconSrc: "/sass.svg" },
      { name: "mysql", iconSrc: "/mysql.svg" },
      { name: "stripe", iconSrc: "/stripe.svg" },
      { name: "aws", iconSrc: "/amazon_web_services.svg" },
      { name: "docker", iconSrc: "/docker.svg" },
    ],
    siteUrl: "https://www.retrobalades.com/",
    start: "18/09/2022",
    end: "18/11/2025",
  },
  {
    id: "Villa Maurice",
    title: "Villa Maurice | Sereniluxe",
    role: "Freelance | Développeur Frontend",
    cover: "/sereniluxe.png",
    techs: [
      { name: "Next", iconSrc: "/nextjs.svg" },
      { name: "TypeScript", iconSrc: "/typescript.svg" },
      { name: "Tailwindcss", iconSrc: "/tailwindcss.svg" },
      { name: "Framer Motion", iconSrc: "/motion.svg" },
      { name: "Vercel", iconSrc: "vercel.svg" },
      { name: "Next-Inlt", iconSrc: "/nextintl.png" }
    ],
    siteUrl: "https://www.sereniluxe.com/",
    start: "01/03/2025",
    end: "01/04/2025",
  },
  {
    id: "Prosperia",
    title: "Prosperia - Plateforme dinvestissement / rachat d'entreprise",
    role: "Freelance | Développeur Frontend",
    cover: "/prosperia.png",
    techs: [
      { name: "Wordpress", iconSrc: "/wordpress.svg" },
    ],
    siteUrl: "https://prosperia-invest.com/",
    start: "01/01/2025",
    end: "01/03/2025",
  },
];

export default function ProjectsSection({ projects = sample }: { projects?: Project[] }) {
  return (
    <section aria-labelledby="projects-title" className="w-full">
      <h2 id="projects-title" className="mb-6 text-2xl font-bold text-primary">
        Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
