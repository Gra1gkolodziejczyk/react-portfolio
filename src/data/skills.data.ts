export interface SkillColumnDataRaw {
    titleKey: string;
    items: Array<{
        name: string;
        iconSrc: string;
        rating: number;
        years: number;
    }>;
}

export const skillsData: SkillColumnDataRaw[] = [
    {
        titleKey: "skills.categories.tools",
        items: [
            { name: "Github", iconSrc: "github_light.svg", rating: 5, years: 5 },
            { name: "WebStorm IDEA", iconSrc: "/webstorm.svg", rating: 4, years: 4 },
            { name: "Postman", iconSrc: "/postman.svg", rating: 4, years: 5 },
            { name: "Stripe", iconSrc: "/stripe.svg", rating: 4, years: 2 },
        ],
    },
    {
        titleKey: "skills.categories.frontend",
        items: [
            { name: "Angular", iconSrc: '/angular.svg', rating: 5, years: 2 },
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
        titleKey: "skills.categories.backend",
        items: [
            { name: "Spring Boot", iconSrc: '/spring.svg', rating: 5, years: 2 },
            { name: "NestJS", iconSrc: "/nestjs.svg", rating: 4, years: 3 },
            { name: "GraphQL", iconSrc: "/graphql.svg", rating: 4, years: 3 },
            { name: "Prisma", iconSrc: "/prisma_dark.svg", rating: 5, years: 4 },
            { name: "Drizzle", iconSrc: "/drizzle.svg", rating: 4, years: 2 },
            { name: "Laravel", iconSrc: "/laravel.svg", rating: 4, years: 2 },
            { name: "Jest", iconSrc: "/jest.svg", rating: 4, years: 3 },
            { name: "Vitest", iconSrc: "/vitest.svg", rating: 4, years: 3 },
        ],
    },
    {
        titleKey: "skills.categories.mobile",
        items: [
            { name: "React-Native", iconSrc: "/react.svg", rating: 4, years: 2 },
            { name: "Expo", iconSrc: "/expo.svg", rating: 5, years: 2 },
            { name: "Flutter", iconSrc: "/flutter.svg", rating: 4, years: 3 },
        ],
    },
    {
        titleKey: "skills.categories.database",
        items: [
            { name: "PostgreSQL", iconSrc: "/postgresql.svg", rating: 5, years: 4 },
            { name: "Redis", iconSrc: "/redis.svg", rating: 3, years: 2 },
            { name: "MySQL", iconSrc: "/mysql.svg", rating: 5, years: 3 },
        ],
    },
    {
        titleKey: "skills.categories.devops",
        items: [
            { name: "Vercel", iconSrc: "/vercel_dark.svg", rating: 5, years: 3 },
            { name: "AWS", iconSrc: "/amazon_web_services_dark.svg", rating: 3, years: 2 },
            { name: "Docker", iconSrc: "/docker.svg", rating: 4, years: 3 },
            { name: "Kubernetes", iconSrc: "/kubernetes.svg", rating: 3, years: 1 },
        ],
    },
];
