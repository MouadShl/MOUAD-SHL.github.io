import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "fr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;

    const pageTitle =
      language === "fr"
        ? "Mouad Souhal | Data Scientist & Ingénieur Data"
        : "Mouad Souhal | Data Scientist & Data Engineer";
    const pageDescription =
      language === "fr"
        ? "Portfolio de Mouad Souhal, Data Scientist spécialisé en NLP, Machine Learning et Data Engineering, avec une expérience concrète dans des pipelines de données à grande échelle."
        : "Portfolio of Mouad Souhal, a Data Scientist specializing in NLP, Machine Learning, Data Engineering, and Business Intelligence, with hands-on experience building large-scale data pipelines.";

    document.title = pageTitle;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute("content", pageDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", pageDescription);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", language === "fr" ? "fr_FR" : "en_US");
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const translations = {
    fr: {
      nav: {
        about: "À propos",
        projects: "Projets",
        demos: "Démos de projets",
        skills: "Compétences",
        certifications: "Certifications",
        experience: "Expérience",
        contact: "Contact",
      },
      hero: {
        badge: "Data Scientist & Ingénieur Data",
        headline: "Construire des solutions",
        headlineHighlight: "intelligentes",
        headlineSuffix: "pour un impact réel.",
        description: "Bonjour, je suis Mouad Souhal — Data Scientist diplômé de SUP’MTI Rabat, spécialisé en NLP, Machine Learning et Data Engineering. Chez Ziwig Morocco, j’ai construit un pipeline de bout en bout analysant plus de 300 000 messages patients sur l’endométriose, avec des dashboards Power BI adoptés par la direction. Je conçois des systèmes de données fiables, orientés impact, du scraping jusqu’au dashboard final.",
        contact: "Me contacter",
        downloadCV: "Télécharger le CV",
        follow: "Suivez-moi :",
        technologies: "Stack IA principale",
        stackDescription: "Technologies que j’utilise pour concevoir, entraîner, intégrer et déployer des systèmes IA modernes.",
        available: "Actuellement disponible",
        availableForWork: "Disponible pour travailler",
        yearsExp: "Année d’expérience",
        fiverrTitle: "Fiverr — Me contacter pour une mission",
        scroll: "Défiler",
      },
      about: {
        title: "À propos de moi",
        headline: "Transformer les données en",
        headlineHighlight: "solutions intelligentes.",
        description1: "Diplômé d’un cycle d’Ingénieur en Data Science à SUP’MTI Rabat, j’ai réalisé mon PFE chez Ziwig Morocco, où j’ai conçu un pipeline complet d’intelligence des données couvrant 46 sources (forums médicaux, réseaux sociaux, app stores, articles scientifiques) pour analyser plus de 300 000 messages patients autour de l’endométriose.",
        description2: "Mon expertise technique couvre Python, le Machine Learning, le NLP (CamemBERT, RoBERTa, BERTopic, spaCy), l’ingénierie de données (Kafka, PySpark, ETL) et la Business Intelligence (Power BI, DAX, Streamlit). Je possède également des bases en développement full-stack avec Laravel, JavaScript et MySQL, acquises lors de mes précédentes expériences chez COPE et CNER.",
        description3: "Mon PFE chez Ziwig Morocco a débouché sur 2 dashboards Power BI interactifs adoptés par la direction pour orienter les décisions produit et marché. Je recherche désormais une opportunité en CDI comme Data Scientist ou Data Engineer, en priorité dans l’industrie du sport automobile.",
        mission: "Ma mission est de transformer des données brutes et dispersées en pipelines fiables et en décisions concrètes pour les équipes produit et métier.",
        highlights: {
          ai: "Data Science & ML",
          aiDesc: "Construire des modèles prédictifs avec Python, Scikit-learn, XGBoost et SHAP pour la classification, la prédiction de risque et l’aide à la décision.",
          mlops: "NLP & Traitement du Langage",
          mlopsDesc: "Analyser des conversations réelles en plusieurs langues avec CamemBERT, RoBERTa, BERTopic et spaCy pour l’analyse de sentiment et le topic modeling.",
          bigdata: "Data Engineering",
          bigdataDesc: "Construire des pipelines de collecte et de traitement à grande échelle avec Apache Kafka, PySpark, ETL et web scraping multi-source.",
          fullstack: "Business Intelligence",
          fullstackDesc: "Concevoir des data warehouses en schéma en étoile et des dashboards Power BI interactifs qui transforment les données en décisions.",
        },
      },
      experience: {
        title: "Parcours professionnel",
        headline: "L’expérience façonnée par",
        headlineHighlight: "l’innovation & l’impact.",
        description: "Un parcours allant de la formation d’ingénieur à la conception de systèmes d’intelligence artificielle, de vision par ordinateur et de data science appliqués à des problématiques réelles.",
      },
      projects: {
        title: "Travaux sélectionnés",
        headline: "Des projets IA qui",
        headlineHighlight: "créent de l’impact.",
        description: "Une sélection de mes travaux en Data Science, intelligence artificielle et Machine Learning — de l’analyse de données aux systèmes intelligents et applications IA.",
        viewAll: "Voir tous les projets & démos",
      },
      certifications: {
        title: "Certifications",
        headline: "Certifications",
        headlineHighlight: "professionnelles",
        description: "Une sélection de certifications et formations qui valident mes compétences en Data Science, intelligence artificielle et ingénierie.",
        viewAll: "Voir toutes les certifications",
      },
      testimonials: {
        title: "Citations inspirantes",
        headline: "Sagesse de",
        headlineHighlight: "leaders de l’industrie.",
      },
      contact: {
        title: "Entrer en contact",
        headline: "Construisons",
        headlineHighlight: "quelque chose de génial.",
        description: "Vous avez un projet ou une opportunité en tête ? Envoyez-moi un message et discutons de la manière dont nous pouvons travailler ensemble.",
        name: "Nom",
        email: "E-mail",
        message: "Message",
        send: "Envoyer le message",
        sending: "Envoi...",
        success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        error: "Échec de l’envoi du message. Veuillez réessayer plus tard.",
        contactInfo: "Informations de contact",
        available: "Disponible pour des opportunités",
        availableDesc: "Ouvert aux opportunités en CDI en tant que Data Scientist ou Data Engineer, en priorité dans l’industrie du sport automobile.",
        fiverrCta: "Profil Fiverr",
      },
      footer: {
        copyright: "© {year} Mouad Souhal. Tous droits réservés.",
      },
    },
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        demos: "Project Demos",
        skills: "Skills",
        certifications: "Certifications",
        experience: "Experience",
        contact: "Contact",
      },
      hero: {
        badge: "State-Certified Data Science Engineer",
        headline: "Building intelligent",
        headlineHighlight: "AI solutions",
        headlineSuffix: "for real-world impact.",
        description: "Hi, I’m Mouad Souhal — a Data Scientist from SUP’MTI Rabat specializing in NLP, Machine Learning, and Data Engineering. At Ziwig Morocco, I built an end-to-end pipeline analyzing over 300,000 patient messages on endometriosis, delivering Power BI dashboards adopted by leadership. I design reliable, impact-driven data systems, from scraping to final dashboard.",
        contact: "Contact Me",
        downloadCV: "Download CV",
        follow: "Follow me:",
        technologies: "Core AI Engineering Stack",
        stackDescription: "Technologies I use to design, train, integrate, and deploy modern AI systems.",
        available: "Currently Available",
        availableForWork: "Available for work",
        yearsExp: "Year of Experience",
        fiverrTitle: "Fiverr — Hire me",
        scroll: "Scroll",
      },
      about: {
        title: "About Me",
        headline: "Transforming data into",
        headlineHighlight: "intelligent solutions.",
        description1: "I hold an Engineering degree in Data Science from SUP’MTI Rabat and completed my graduation project (PFE) at Ziwig Morocco, where I built a complete data intelligence pipeline across 46 sources (medical forums, social networks, app stores, scientific articles) to analyze over 300,000 patient messages on endometriosis.",
        description2: "My technical expertise covers Python, Machine Learning, NLP (CamemBERT, RoBERTa, BERTopic, spaCy), data engineering (Kafka, PySpark, ETL), and Business Intelligence (Power BI, DAX, Streamlit). I also have full-stack development experience with Laravel, JavaScript and MySQL from my earlier roles at COPE and CNER.",
        description3: "My PFE at Ziwig Morocco led to 2 interactive Power BI dashboards adopted by leadership to guide product and market decisions. I am now seeking a full-time opportunity as a Data Scientist or Data Engineer, prioritizing the motorsport industry.",
        mission: "My mission is to turn raw, scattered data into reliable pipelines and clear decisions for product and business teams.",
        highlights: {
          ai: "Data Science & ML",
          aiDesc: "Building predictive models with Python, Scikit-learn, XGBoost, and SHAP for classification, risk prediction, and decision support.",
          mlops: "NLP & Language Processing",
          mlopsDesc: "Analyzing real, multilingual conversations with CamemBERT, RoBERTa, BERTopic, and spaCy for sentiment analysis and topic modeling.",
          bigdata: "Data Engineering",
          bigdataDesc: "Building large-scale collection and processing pipelines with Apache Kafka, PySpark, ETL, and multi-source web scraping.",
          fullstack: "Business Intelligence",
          fullstackDesc: "Designing star-schema data warehouses and interactive Power BI dashboards that turn data into decisions.",
        },
      },
      experience: {
        title: "Career Journey",
        headline: "Experience shaped by",
        headlineHighlight: "innovation & impact.",
        description: "A journey from engineering education to building applied artificial intelligence, computer vision, and data science systems for real-world challenges.",
      },
      projects: {
        title: "Featured Work",
        headline: "AI Projects that",
        headlineHighlight: "drive innovation.",
        description: "A selection of my work in Data Science, AI, and Machine Learning — from data analysis projects to intelligent systems and applications.",
        viewAll: "View All Projects & Demos",
      },
      certifications: {
        title: "Certifications",
        headline: "Professional",
        headlineHighlight: "Certifications",
        description: "A selection of certifications and training programs that validate my expertise in Data Science, AI, and engineering.",
        viewAll: "View All Certifications",
      },
      testimonials: {
        title: "Inspirational Quotes",
        headline: "Wisdom from",
        headlineHighlight: "industry leaders.",
      },
      contact: {
        title: "Get In Touch",
        headline: "Let’s build",
        headlineHighlight: "something great.",
        description: "Have a project or opportunity in mind? Send me a message and let’s discuss how we can work together.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! I’ll get back to you soon.",
        error: "Failed to send message. Please try again later.",
        contactInfo: "Contact Information",
        available: "Available for opportunities",
        availableDesc: "Open to full-time opportunities as a Data Scientist or Data Engineer, prioritizing the motorsport industry.",
        fiverrCta: "Fiverr Profile",
      },
      footer: {
        copyright: "© {year} Mouad Souhal. All rights reserved.",
      },
    },
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};