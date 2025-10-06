import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Tes traductions
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About me',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact me',
        logo: 'Logo React'
      },
      hero: {
        title: 'Hello, I\'m ',
        myName: 'Graig KOLODZIEJCZYK',
        subtitle: 'I\'m a full-stack Web and Mobile developer.',
        description: 'I build complete and responsive applications, both mobile and web. Nothing stops me — I\'m an entrepreneur at heart and a lifelong self-taught learner.',
        techStack: 'Tech stack:',
        more: '... and much more',
        seeProject: 'See my projects'
      },
      about: {
        title: 'About me',
        description: 'At 24 years old, I hold a Master’s degree in Software Development (Bordeaux Ynov Campus) and an RNCP Level 7 certification. Over three years of work-study at Wedrivit — a classic car rental platform — I strengthened my skills in React, TypeScript, SEO, performance, quality, and tooling. In parallel, I’m developing Biume, a SaaS appointment scheduling platform for professionals in the animal health sector (a Doctolib-style solution for animals). I’m currently looking for a full-time position.',
        point1: "From brief to production: clean code, testing, CI/CD, and a performance obsession. Passionate about development since I was 15,\n" +
          "I discovered this world completely by chance — and I’ve never left it since.",
        point2: "Crypto expert: disciplined DCA, continuous ecosystem monitoring. Investing in various cryptocurrencies since I was 18.",
        point3: "Team spice 🌶: simple recipes that pack a punch — just like my interfaces.\n" +
          "Outside of coding, I love cooking for myself, my family, and my friends — it’s my way of making them happy.",
        point4: "Snowboarder 🏂: clean lines, controlled speed, full mastery — just like a production deployment.\n" +
          "I got into board sports before coding! In the summer I surf, and in the winter I snowboard.",
      },
      education: {
        title: 'My qualifications',
        diplomas: {
          master: {
            title: 'Master 2: Expert Software Developer',
            school: 'Ynov Campus',
            location: 'Bordeaux, 33000, France',
            period: '2021 - 2025',
          },
          rncp7: {
            title: 'RNCP39583 Title Level 7: Expert in Software Development',
            school: 'State Diploma',
            location: 'France',
            period: '2024 - 2025',
          }
        }
      },
      skills: {
        title: 'My skills',
        categories: {
          tools: 'Tools',
          frontend: 'Frontend',
          backend: 'Backend',
          mobile: 'Mobile',
          database: 'Database',
          devops: 'DevOps'
          }
        },
        projects: {
        title: 'My projects',
          role: {
          ceo: 'CEO | Full-Stack Developer',
            alternant: 'Intern | Full-Stack Developer',
            freelance: 'Freelance | Frontend Developer'
          },
          biume: {
            title: 'Biume - Doctolib-like Platform for Animals',
            end: 'present'
          },
          wedrivit: {
            title: 'Wedrivit – Classic Car Rental Platform'
          },
          retrobalade: {
            title: 'Retrobalade – Classic Car Rental Platform'
          },
          villamaurice: {
            title: 'Villa Maurice | Sereniluxe'
          },
          prosperia: {
            title: 'Prosperia - Investment Platform / Business Acquisition'
          }
        },
      contact: {
        title: 'Contact me',
        writeMe: 'Write me',
        copied: 'Copied',
        copy: 'Copy',
        emailDispo: "Available to chat — email, LinkedIn",
        openMail: "— open in your mailbox",
      },
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos de moi',
        skills: 'Compétences',
        projects: 'Projets',
        contact: 'Contactez-moi',
        logo: 'Logo React'
      },
      hero: {
        title: 'Bonjour je m\'appelle',
        myName: 'Graig KOLODZIEJCZYK',
        subtitle: 'Je suis développeur Full-Stack Web et Mobile.',
        description: 'Je construis des applications complètes et responsive, mobiles ou web. Rien ne m\'arrête, je suis un entrepreneur dans l\'âme et autodidacte depuis toujours.',
        techStack: 'Stack techniques :',
        more: '... et plus encore',
        seeProject: 'Voir mes projets',
      },
      about: {
        title: "À propos de moi",
        description: "Âgé de 24 ans, je suis diplômé d’un Master 2 « Expert en Développement Logiciel » (Bordeaux Ynov Campus) et titulaire d’un titre RNCP de niveau 7. Au cours de trois années d’alternance chez Wedrivit — plateforme de location de voitures de collection —, j’ai consolidé mes compétences en React, TypeScript, SEO, performance, qualité et outillage. En parallèle, je développe Biume, un SaaS de prise de rendez-vous pour les professionnels du secteurs santé animale (solution de type Doctolib pour les animaux). Je suis actuellement à la recherche d’un CDI.",
        point1: "Du brief au prod : clean code, tests, CI/CD et obsession de la perf.Passionné de développement depuis mes 15 ans, j'ai découvert ce monde totalement par hasard et je n'en suis toujours pas sortie.",
        point2: "Crypto-expert : DCA discipliné, veille de l’écosystème. Investissement dans différentes cryptomonnaies depuis mes 18 ans.",
        point3: "Team piment 🌶 : des recettes simples qui claquent — comme mes interfaces.\n" +
          "En dehors du code, je prends plaisir à cuisiner pour moi, ma famille et mes proches, c’est ma façon de leur faire plaisir.",
        point4: "Snowboarder 🏂 : trajectoires propres, vitesse maîtrisée, contrôle — comme la mise en prod.\n" +
          "J’ai commencé les sports de glisse avant le code ! Les beaux jours je surfe, l’hiver je fais du snowboard.",
      },
      education: {
        title: 'Mes diplômes',
        diplomas: {
          master: {
            title: 'Master 2: Expert développeur logiciel',
            school: 'Ynov Campus',
            location: 'Bordeaux, 33000, France',
            period: '2021 - 2025',
          },
          rncp7: {
            title: 'Titre RNCP39583 de niveau 7: Expert en développement logiciel',
            school: "Diplôme d'État",
            location: 'France',
            period: '2024 - 2025',
          }
        }
      },
      skills: {
        title: 'Mes compétences',
        categories: {
          tools: 'Outils',
          frontend: 'Frontend',
          backend: 'Backend',
          mobile: 'Mobile',
          database: 'Base de données',
          devops: 'DevOps'
          }
        },
        projects: {
        title: 'Mes projets',
          role: {
          ceo: 'CEO | Développeur Full-Stack',
            alternant: 'Alternant | Développeur Full-Stack',
            freelance: 'Freelance | Développeur Frontend'
          },
          biume: {
            title: 'Biume - Plateforme type Doctolib pour les animaux',
            end: "jusqu'à maintenant"
          },
          wedrivit: {
            title: 'Wedrivit – Plateforme de location de voitures de collection'
          },
          retrobalade: {
            title: 'Retrobalade – Plateforme de location de voitures de collection'
          },
          villamaurice: {
            title: 'Villa Maurice | Sereniluxe'
          },
          prosperia: {
            title: "Prosperia - Plateforme d'investissement / rachat d'entreprise"
          }
        },
      contact: {
        title: 'Contact',
        writeMe: "M'écrire",
        copied: 'Copié',
        copy: 'Copier',
        emailDispo: "Disponible pour échanger par email, LinkedIn",
        openMail: "— ouvrir dans la boite mail",
      },
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
