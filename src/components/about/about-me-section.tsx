import AboutItem from "./about-item.tsx";
import {useTranslation} from "react-i18next";

function AboutMeSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        {t('about.title')}
      </h2>

      <p className="mb-6 text-base leading-relaxed text-black dark:text-white">
        {t('about.description')}
      </p>


      <ul className="space-y-4">
        <AboutItem src="/webstorm.svg" alt="Logo WebStorm IDEA">
          {t('about.point1')}
        </AboutItem>

        <AboutItem src="/btc.svg" alt="Logo Bitcoin">
          {t('about.point2')}
        </AboutItem>

        <AboutItem src="/piment.png" alt="Icône Piment">
          {t('about.point3')}
        </AboutItem>

        <AboutItem src="/snowboard.png" alt="Snowboard">
          {t('about.point4')}
        </AboutItem>
      </ul>

    </section>
  );
}

export default AboutMeSection;
