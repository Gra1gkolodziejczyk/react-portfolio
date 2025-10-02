import AboutItem from "./about-item.tsx";

function AboutMeSection() {
  return (
    <section aria-labelledby="about-me-title" className="w-full">
      <h2 id="about-me-title" className="text-2xl font-bold mb-6 text-primary">
        À propos de moi
      </h2>

      <p className="mb-6 text-base leading-relaxed text-black dark:text-white">
        J’ai 24 ans et je viens d’être diplômé d’un Master 2 « Expert en Développement
        Logiciel » à Bordeaux Ynov Campus. J’ai également obtenu un titre RNCP de niveau 7
        m’octroyant le titre d’ingénieur informatique (si ça c’est pas la classe 😄).
        Pendant 3 ans d’alternance chez <span className="font-semibold">Wedrivit</span> — une
        plateforme façon AirBnB mais pour la location de voitures de collection —
        j’ai acquis énormément de compétences sur les bonnes pratiques React, le SEO,
        TypeScript et bien d’autres sujets (performance, qualité, outillage).
        Aujourd’hui, je suis à la recherche d’un <span className="font-semibold">CDI</span>.
      </p>

      <ul className="space-y-4">
        <AboutItem src="/intellijidea.svg" alt="Logo IntelliJ IDEA">
          <strong>Du brief au prod : clean code, tests, CI/CD et obsession de la perf.</strong>
          Passionné de développement depuis mes 15 ans, j'ai découvert ce monde
          totalement par hasard et je n'en suis toujours pas sortie.
        </AboutItem>

        <AboutItem src="/btc.svg" alt="Logo Bitcoin">
          <strong>Crypto-expert :</strong> DCA discipliné, veille de l’écosystème.
          Investissement dans différentes cryptomonnaies depuis mes 18 ans.
        </AboutItem>

        <AboutItem src="/piment.png" alt="Icône Piment">
          <strong>Team piment 🌶 : des recettes simples qui claquent — comme mes interfaces.</strong>
          En dehors du code, je prends plaisir à cuisiner pour moi, ma famille et mes proches, c’est ma façon de leur faire plaisir.
        </AboutItem>

        <AboutItem src="/snowboard.png" alt="Snowboard">
          <strong>Snowboarder 🏂 : trajectoires propres, vitesse maîtrisée, contrôle — comme en prod. </strong>
          J’ai commencé les sports de glisse avant le code ! Les beaux jours je surfe, l’hiver je fais du snowboard.
        </AboutItem>
      </ul>

    </section>
  );
}

export default AboutMeSection;
