import { BriefcaseBusiness, GraduationCap, CheckCircle2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ziwigLogo from "@/assets/images/logos/ziwig.svg";
import copeLogo from "@/assets/images/logos/cope.svg";
import cnerLogo from "@/assets/images/logos/cner.svg";
import supMtiLogo from "@/assets/images/logos/sup_mti.png";
import ofpptLogo from "@/assets/images/logos/ofppt.svg";
import alAnjalLogo from "@/assets/images/logos/al_anjal.svg";

const workExperiences = [
  {
    period: {
      en: "Feb 2026 — Aug 2026",
      fr: "Fév 2026 — Août 2026",
    },
    role: {
      en: "Data Scientist (PFE)",
      fr: "Data Scientist (PFE)",
    },
    company: {
      en: "Ziwig Morocco",
      fr: "Ziwig Morocco",
    },
    companyDetail: {
      en: "Healthtech — endometriosis platform",
      fr: "Healthtech — plateforme endométriose",
    },
    companyLink: null,
    description: {
      en: "Designed and built an end-to-end data intelligence pipeline across 46 sources (medical forums, social networks, app stores, scientific articles) to turn patient conversations into product and market decisions.",
      fr: "Conception et développement d'un pipeline d'intelligence des données de bout en bout sur 46 sources (forums médicaux, réseaux sociaux, app stores, articles scientifiques) pour transformer les conversations patients en décisions produit et marché.",
    },
    highlights: {
      en: [
        "Multi-source, multilingual (FR/EN) scraping: 301,707 messages collected and indexed",
        "Bilingual sentiment analysis (CamemBERT, RoBERTa) + BERTopic topic modeling and spaCy NER",
        "SQL Server star-schema warehouse + Python ETL: 289,300 posts after cleaning and deduplication",
        "2 interactive Power BI dashboards (Patient Insights & Market Insights) adopted by leadership",
      ],
      fr: [
        "Scraping multi-source et multilingue (FR/EN) : 301 707 messages collectés et indexés",
        "Analyse de sentiment bilingue (CamemBERT, RoBERTa) + topic modeling BERTopic et NER spaCy",
        "Data Warehouse SQL Server en étoile + ETL Python : 289 300 posts après nettoyage et déduplication",
        "2 dashboards Power BI interactifs (Patient Insights & Market Insights) adoptés par la direction",
      ],
    },
    technologies: ["Python", "CamemBERT", "RoBERTa", "BERTopic", "SQL Server", "Power BI"],
    current: true,
    logo: ziwigLogo,
    logoClassName: "w-full h-full object-contain bg-white p-2.5",
  },
  {
    period: {
      en: "May 2023 — Jun 2023",
      fr: "Mai 2023 — Juin 2023",
    },
    role: {
      en: "Full Stack Developer",
      fr: "Développeur Full Stack",
    },
    company: {
      en: "COPE",
      fr: "COPE",
    },
    companyDetail: {
      en: "Centre d'Orientation et de Planification de l'Éducation",
      fr: "Centre d'Orientation et de Planification de l'Éducation",
    },
    companyLink: null,
    description: {
      en: "Built a notes management web application, handling both the database design and the back-end functionality.",
      fr: "Développement d'un site web de gestion de notes, avec conception de la base de données et des fonctionnalités back-end de l'application.",
    },
    highlights: {
      en: [
        "Full-stack notes management app built with Laravel, JavaScript and MySQL",
        "Designed the database schema and back-end logic",
      ],
      fr: [
        "Application de gestion de notes développée avec Laravel, JavaScript et MySQL",
        "Conception du schéma de base de données et de la logique back-end",
      ],
    },
    technologies: ["Laravel", "JavaScript", "MySQL"],
    current: false,
    logo: copeLogo,
    logoClassName: "w-full h-full object-contain bg-white p-2.5",
  },
  {
    period: {
      en: "Apr 2022 — May 2022",
      fr: "Avr 2022 — Mai 2022",
    },
    role: {
      en: "IT Developer",
      fr: "Développeur Informatique",
    },
    company: {
      en: "CNER",
      fr: "CNER",
    },
    companyDetail: {
      en: "Centre National d'Études et de Recherches Routières",
      fr: "Centre National d'Études et de Recherches Routières",
    },
    companyLink: "https://equipement.gov.ma/CNER",
    description: {
      en: "Complete redesign of the official CNER website, migrating a static site to a modern version.",
      fr: "Refonte complète du site officiel du CNER, migration d'un site statique vers une version moderne.",
    },
    highlights: {
      en: [
        "Front-end development in HTML, CSS, JavaScript/jQuery with API integration",
        "Object-oriented HTML for page structuring",
      ],
      fr: [
        "Développement front-end en HTML, CSS, JavaScript/jQuery avec intégration d'API",
        "Programmation orientée objet en HTML pour la structuration des pages",
      ],
    },
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    current: false,
    logo: cnerLogo,
    logoClassName: "w-full h-full object-contain bg-white p-2.5",
  },
];

const education = [
  {
    period: {
      en: "Oct 2023 — Jul 2026",
      fr: "Oct 2023 — Juil 2026",
    },
    degree: {
      en: "Engineering Degree in Data Science (GI-IDS)",
      fr: "Diplôme d'Ingénieur en Data Science (GI-IDS)",
    },
    school: "SUP MTI Rabat",
    logo: supMtiLogo,
    detail: {
      en: "Engineering Cycle — Data Science / IoT specialization",
      fr: "Cycle d'ingénieur — spécialisation Data Science / IoT",
    },
    description: {
      en: "Engineering curriculum covering Data Science, Machine Learning, NLP, Data Engineering and Business Intelligence.",
      fr: "Formation d'ingénieur couvrant la Data Science, le Machine Learning, le NLP, la Data Engineering et la Business Intelligence.",
    },
    schoolLink: "https://supmti.ac.ma/",
    technologies: ["Data Science", "Machine Learning", "NLP", "BI"],
  },
  {
    period: {
      en: "Sep 2020 — Jul 2023",
      fr: "Sept 2020 — Juil 2023",
    },
    degree: {
      en: "Specialized Technician — Full Stack Development",
      fr: "Technicien Spécialisé — Développement Full Stack",
    },
    school: "OFPPT Hay Riad, Rabat",
    logo: ofpptLogo,
    detail: {
      en: "Full Stack Web Development",
      fr: "Développement Web Full Stack",
    },
    description: {
      en: "Specialized technician diploma in full-stack web development, covering front-end, back-end, and database fundamentals.",
      fr: "Diplôme de technicien spécialisé en développement web full-stack, couvrant le front-end, le back-end et les bases de données.",
    },
    schoolLink: null,
    technologies: ["Web Development", "Databases", "Full Stack"],
  },
  {
    period: {
      en: "Sep 2019 — Jul 2020",
      fr: "Sept 2019 — Juil 2020",
    },
    degree: {
      en: "Baccalauréat, Physical Sciences (Mention Bien)",
      fr: "Baccalauréat Sciences Physiques (Mention Bien)",
    },
    school: "Al Anjal Lycée, Témara",
    logo: alAnjalLogo,
    detail: {
      en: "Physical Sciences track",
      fr: "Filière Sciences Physiques",
    },
    description: {
      en: "High school diploma, Physical Sciences track, with distinction (Mention Bien).",
      fr: "Baccalauréat, filière Sciences Physiques, obtenu avec mention Bien.",
    },
    schoolLink: null,
    technologies: ["Physics", "Mathematics"],
  },
];

export const Experience = () => {
  const { t, language } = useLanguage();
  const locale = language === "fr" ? "fr" : "en";

  const sectionCopy =
    locale === "fr"
      ? {
          experienceLabel: "Expérience professionnelle",
          experienceTitle: "Une expérience orientée vers des systèmes de données",
          experienceHighlight: "concrets.",
          experienceDescription:
            "Expérience professionnelle en Data Science, du pipeline NLP à grande échelle au développement full-stack.",
          educationLabel: "Formation",
          educationTitle: "Parcours académique",
          educationDescription:
            "Une formation d'ingénieur centrée sur la Data Science, le Machine Learning et les fondamentaux techniques nécessaires pour construire des systèmes de données fiables.",
          current: "Actuel",
        }
      : {
          experienceLabel: "Professional Experience",
          experienceTitle: "Experience focused on building practical data",
          experienceHighlight: "systems.",
          experienceDescription:
            "Professional experience in Data Science, from large-scale NLP pipelines to full-stack development.",
          educationLabel: "Education",
          educationTitle: "Academic background",
          educationDescription:
            "An engineering foundation in Data Science, Machine Learning, and the technical disciplines required to build reliable data systems.",
          current: "Current",
        };

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 text-primary text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            <BriefcaseBusiness className="w-4 h-4" />
            <span>{sectionCopy.experienceLabel}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
            {sectionCopy.experienceTitle}{" "}
            <span className="font-serif italic font-normal text-foreground">
              {sectionCopy.experienceHighlight}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl animate-fade-in animation-delay-200">
            {sectionCopy.experienceDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 md:gap-7">
          {workExperiences.map((exp, idx) => (
            <article
              key={exp.role.en}
              className="group glass rounded-3xl border border-border/60 hover:border-primary/40 transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <div className="p-5 sm:p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    {exp.companyLink ? (
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-primary/20 bg-background/70 flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
                        aria-label={`${exp.company[locale]} website`}
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company[locale]} logo`}
                          className={exp.logoClassName}
                        />
                      </a>
                    ) : (
                      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-primary/20 bg-background/70 flex-shrink-0">
                        <img
                          src={exp.logo}
                          alt={`${exp.company[locale]} logo`}
                          className={exp.logoClassName}
                        />
                      </div>
                    )}

                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold leading-tight text-foreground">
                        {exp.role[locale]}
                      </h3>
                      {exp.companyLink ? (
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-1 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{exp.company[locale]}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 mt-1 text-xs md:text-sm text-muted-foreground">
                          {exp.company[locale]}
                        </span>
                      )}
                      <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                        {exp.companyDetail[locale]}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="text-[11px] md:text-xs font-medium text-primary bg-primary/8 border border-primary/15 rounded-full px-2.5 py-1 whitespace-nowrap">
                      {exp.period[locale]}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs text-emerald-500 font-medium">
                        <span className="relative flex w-2 h-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                          <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
                        </span>
                        {sectionCopy.current}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-foreground/75">
                  {exp.description[locale]}
                </p>

                <div className="mt-5 space-y-2.5">
                  {exp.highlights[locale].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-border/50 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-surface/70 border border-border/60 text-[10px] md:text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <div className="max-w-4xl mb-9 md:mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-xs md:text-sm font-medium tracking-wider uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>{sectionCopy.educationLabel}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-3 text-secondary-foreground">
              {sectionCopy.educationTitle}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
              {sectionCopy.educationDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-7">
            {education.map((item) => (
              <article
                key={item.degree.en}
                className="glass rounded-3xl border border-border/60 hover:border-primary/35 transition-all duration-300 p-5 sm:p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  {item.schoolLink ? (
                    <a
                      href={item.schoolLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-primary/20 bg-white flex-shrink-0 p-2"
                      aria-label={`${item.school} website`}
                    >
                      <img
                        src={item.logo}
                        alt={`${item.school} logo`}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  ) : (
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-primary/20 bg-white flex-shrink-0 p-2">
                      <img
                        src={item.logo}
                        alt={`${item.school} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] md:text-xs font-medium text-primary">
                      {item.period[locale]}
                    </span>
                    <h4 className="text-lg md:text-xl font-semibold mt-1 leading-tight">
                      {item.degree[locale]}
                    </h4>
                    {item.schoolLink ? (
                      <a
                        href={item.schoolLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-1.5 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.school}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 mt-1.5 text-xs md:text-sm text-muted-foreground">
                        {item.school}
                      </span>
                    )}
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                      {item.detail[locale]}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-foreground/75">
                  {item.description[locale]}
                </p>

                <div className="mt-5 pt-5 border-t border-border/50 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-surface/70 border border-border/60 text-[10px] md:text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
