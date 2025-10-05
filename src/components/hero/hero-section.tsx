import TechStack from "./tech-stack.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function HeroSection() {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 h-full">
        <div className="mx-auto max-w-[1000px] px-2 lg:px-4 flex flex-col justify-center">
          <p className="text-lg text-black dark:text-white">Bonjour, je m&apos;appelle</p>

          <h1 className="text-4xl sm:text-7xl font-extrabold text-primary">
            Graig KOLODZIEJCZYK
          </h1>

          <h2 className="text-4xl sm:text-7xl font-extrabold text-black dark:text-white">
            Je suis développeur Full-Stack Web et Mobile.
          </h2>

          <p className="mt-4 text-lg text-black dark:text-white">
            Je construis des applications complètes et responsive, mobiles ou web.
            Rien ne m&apos;arrête, je suis un entrepreneur dans l&apos;âme et autodidacte
            depuis toujours.
          </p>

          <div className="flex flex-row gap-4 mt-6 items-center">
            <p className="font-bold text-lg sm:pt-1">Stack techniques :</p>
            <TechStack
              names={[
                "react",
                "nextjs",
                "tailwindcss",
                "typeScript",
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
            <p className="font-bold text-black dark:text-white">… et plus encore</p>
            </div>

          <div className="flex gap-4 mt-6">
            <Button
              className="cursor-pointer text-white hover:text-white"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Voir mes projets
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
