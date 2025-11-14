import TechStack from "./tech-stack.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useTranslation} from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 h-full">
        <div className="mx-auto max-w-[1000px] px-2 lg:px-4 flex flex-col justify-center">
          <p className="text-lg text-black dark:text-white">{t('hero.title')}</p>

          <h1 className="text-4xl sm:text-7xl font-extrabold text-primary">
            {t('hero.myName')}
          </h1>

          <h2 className="text-4xl sm:text-7xl font-extrabold text-black dark:text-white">
            {t('hero.subtitle')}
          </h2>

          <p className="mt-4 text-lg text-black dark:text-white">
            {t('hero.description')}
          </p>

          <div className="mt-6">
            <div className="flex flex-col gap-3 md:hidden">
              <p className="font-bold text-lg">{t('hero.techStack')}</p>
              <TechStack
                names={[
                  "react",
                  "angular",
                  "tailwindcss",
                  "typeScript",
                  "spring",
                  "nestJS",
                  "prisma",
                  "stripe",
                  "amazon_web_services",
                  "docker",
                  "kubernetes",
                  "jest",
                ]}
                size={32}
                theme="auto"
                gapClassName="gap-2"
              />
              <p className="font-bold text-black dark:text-white">{t('hero.more')}</p>
            </div>

            <div className="hidden md:flex flex-row gap-4 items-center">
              <p className="font-bold text-lg sm:pt-1">{t('hero.techStack')}</p>
              <TechStack
                names={[
                  "angular",
                  "react",
                  "nextjs",
                  "tailwindcss",
                  "typeScript",
                  "spring",
                  "nestJS",
                  "prisma",
                  "stripe",
                  "amazon_web_services",
                  "docker",
                  "kubernetes",
                  "jest",
                ]}
                size={32}
                theme="auto"
                gapClassName="gap-2"
              />
              <p className="font-bold text-black dark:text-white">{t('hero.more')}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button
              className="cursor-pointer text-white hover:text-white"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t('hero.seeProject')}
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img
            src="/moi.png"
            alt="Avatar de Graig"
            className="w-72 md:w-80 aspect-square object-cover rounded-full border-8 border-primary p-2 shadow-2xl max-xl:hidden lg:block"
          />
        </div>
      </section>
    </>
  );
}
