export interface ProjectDataRaw {
    id: string;
    titleKey: string;
    roleKey: string;
    cover: string;
    techs: Array<{ name: string; iconSrc: string }>;
    siteUrl: string;
    start: string;
    end?: string;
    endKey?: string;
}

export const projectsData: ProjectDataRaw[] = [
    {
        id: "biume",
        titleKey: "projects.biume.title",
        roleKey: "projects.role.ceo",
        cover: "/biume.png",
        techs: [
            { name: "React", iconSrc: "/react.svg" },
            { name: "Tailwind CSS", iconSrc: "/tailwindcss.svg" },
            { name: "Nest.js", iconSrc: "/nestjs.svg" },
            { name: "Drizzle", iconSrc: "/drizzle.svg" },
            { name: "TypeScript", iconSrc: "/typescript.svg" },
            { name: "PostgreSQL", iconSrc: "/postgresql.svg" },
            { name: "Redis", iconSrc: "/redis.svg" },
            { name: "Jest", iconSrc: "/jest.svg" },
            { name: "Docker", iconSrc: "/docker.svg" },
            { name: "Kubernetes", iconSrc: "/kubernetes.svg" },
            { name: "AWS", iconSrc: "/amazon_web_services.svg" },
            { name: "Stripe", iconSrc: "/stripe.svg" },
        ],
        siteUrl: "https://biume.com/",
        start: "01/09/2024",
        endKey: "projects.biume.end",
    },
    {
        id: "wedrivit-platform",
        titleKey: "projects.wedrivit.title",
        roleKey: "projects.role.alternant",
        cover: "/wedrivit.png",
        techs: [
            { name: "Next", iconSrc: "/nextjs.svg" },
            { name: "TypeScript", iconSrc: "/typescript.svg" },
            { name: "Scss", iconSrc: "/sass.svg" },
            { name: "GraphQL", iconSrc: "/graphql.svg" },
            { name: "Prisma", iconSrc: "/prisma.svg" },
            { name: "MySQL", iconSrc: "/mysql.svg" },
            { name: "Stripe", iconSrc: "/stripe.svg" },
            { name: "Docker", iconSrc: "/docker.svg" },
            { name: "AWS", iconSrc: "/amazon_web_services.svg" },
        ],
        siteUrl: "https://wedrivit.com/",
        start: "18/09/2022",
        end: "18/11/2025",
    },
    {
        id: "retrobalade-platform",
        titleKey: "projects.retrobalade.title",
        roleKey: "projects.role.alternant",
        cover: "/retrobalade.png",
        techs: [
            { name: "Laravel", iconSrc: "/laravel.svg" },
            { name: "Blade", iconSrc: "/blade.png" },
            { name: "Scss", iconSrc: "/sass.svg" },
            { name: "MySQL", iconSrc: "/mysql.svg" },
            { name: "Stripe", iconSrc: "/stripe.svg" },
            { name: "AWS", iconSrc: "/amazon_web_services.svg" },
            { name: "Docker", iconSrc: "/docker.svg" },
        ],
        siteUrl: "https://www.retrobalades.com/",
        start: "18/09/2022",
        end: "18/11/2025",
    },
    {
      id: "shop-ta-board",
      titleKey: "projects.shoptaboard.title",
      roleKey: "projects.role.personal",
      cover: "e-commerce.png",
      techs: [
        { name: "React", iconSrc: "/react.svg" },
        { name: "Tailwindcss", iconSrc: "/tailwindcss.svg" },
        { name: "TypeScript", iconSrc: "/typescript.svg" },
        { name: "Nest", iconSrc: "/nestjs.svg" },
        { name: "PostgreSQL", iconSrc: "/postgresql.svg" },
        { name: "Vercel", iconSrc: "vercel.svg" },
      ],
      siteUrl: "https://shop-ta-board.vercel.app/",
      start: "01/10/2025",
      end: "12/10/2025",
    },
    {
        id: "villamaurice",
        titleKey: "projects.villamaurice.title",
        roleKey: "projects.role.freelance",
        cover: "/sereniluxe.png",
        techs: [
            { name: "Next", iconSrc: "/nextjs.svg" },
            { name: "TypeScript", iconSrc: "/typescript.svg" },
            { name: "Tailwindcss", iconSrc: "/tailwindcss.svg" },
            { name: "Framer Motion", iconSrc: "/motion.svg" },
            { name: "Vercel", iconSrc: "/vercel.svg" },
            { name: "Next-Intl", iconSrc: "/nextintl.png" }
        ],
        siteUrl: "https://www.sereniluxe.com/",
        start: "01/03/2025",
        end: "01/04/2025",
    },
    {
        id: "prosperia",
        titleKey: "projects.prosperia.title",
        roleKey: "projects.role.freelance",
        cover: "/prosperia.png",
        techs: [
            { name: "Wordpress", iconSrc: "/wordpress.svg" },
        ],
        siteUrl: "https://prosperia-invest.com/",
        start: "01/01/2025",
        end: "01/03/2025",
    },
];
