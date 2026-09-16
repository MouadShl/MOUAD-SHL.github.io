export const ziwigNlpPipelineProject = {
  id: 1,
  slug: "ziwig-nlp-intelligence-pipeline",
  title: "Ziwig NLP Intelligence Pipeline (PFE)",
  description:
    "An end-to-end data intelligence pipeline built for Ziwig Morocco's endometriosis healthtech platform: multilingual web scraping, bilingual NLP sentiment analysis, a star-schema data warehouse, and Power BI dashboards adopted by leadership.",
  image: "assets/images/projects/ziwig-nlp-pipeline/main.svg",
  tags: [
    "NLP",
    "CamemBERT",
    "RoBERTa",
    "BERTopic",
    "SQL Server",
    "Power BI",
    "ETL",
  ],
  link: "/projects/ziwig-nlp-intelligence-pipeline",
  github: null,
  company: "Ziwig Morocco",
  period: "Feb 2026 - Aug 2026",
  location: "Morocco",
  role: "Data Scientist (PFE / Graduation Project)",

  overview: {
    keyContributions: [
      "Built a universal multi-source, multilingual (FR/EN) web scraping framework across 46 sources",
      "Collected and indexed 301,707 patient messages from medical forums, social networks, app stores, and scientific articles",
      "Implemented bilingual sentiment analysis with CamemBERT (French) and RoBERTa (English)",
      "Applied BERTopic topic modeling and spaCy NER to surface symptoms, support-ticket irritants, and strategic clusters",
      "Designed a SQL Server star-schema data warehouse with a Python ETL pipeline, indexing 289,300 posts after cleaning and deduplication",
      "Computed per-source and per-country KPIs with market-opportunity scoring for France, the US, and the UK",
      "Delivered 2 interactive Power BI dashboards (Patient Insights & Market Insights) adopted by leadership",
    ],
  },

  problemStatement: {
    title: "Turning Scattered Patient Conversations into Product Decisions",
    description:
      "Endometriosis patient discussions are scattered across dozens of forums, social platforms, and app stores in multiple languages, making it hard to identify recurring symptoms, product pain points, and market opportunities.",
    challenges: [
      "Collecting reliable data from 46 heterogeneous sources in multiple languages",
      "Cleaning and deduplicating hundreds of thousands of noisy, unstructured messages",
      "Running accurate sentiment analysis across French and English patient conversations",
      "Structuring the results into a data warehouse usable for BI reporting",
      "Making the findings actionable for non-technical product and market teams",
    ],
  },

  solution:
    "Built a full pipeline from multi-source scraping to a star-schema SQL Server warehouse, layering bilingual sentiment models and topic modeling on top, then surfacing the results in Power BI dashboards used directly by leadership for product and market decisions.",

  keyAchievements: [
    "301,707 messages collected and indexed across 46 sources",
    "289,300 posts indexed in the warehouse after cleaning and deduplication",
    "Bilingual sentiment models deployed for French and English conversations",
    "2 Power BI dashboards delivered and adopted by leadership",
    "Market-opportunity scoring built for France, the US, and the UK",
  ],

  techStack: [
    "Python",
    "CamemBERT",
    "RoBERTa",
    "BERTopic",
    "spaCy",
    "SQL Server",
    "Power BI",
    "DAX",
    "Web Scraping",
    "BeautifulSoup",
    "ETL",
  ],

  modules: [
    {
      id: 1,
      name: "Multi-Source Web Scraping",
      description:
        "Universal, multilingual scraping framework covering 46 sources.",
      details:
        "Collected patient conversations from medical forums, social networks, app stores, and scientific articles in French and English.",
      metrics: {
        sources: "46",
        messages: "301,707",
        languages: "FR / EN",
      },
    },
    {
      id: 2,
      name: "Bilingual NLP & Topic Modeling",
      description:
        "Sentiment analysis and topic discovery on patient conversations.",
      details:
        "CamemBERT and RoBERTa handle French and English sentiment respectively, while BERTopic and spaCy NER surface symptom clusters and support irritants.",
      metrics: {
        models: "CamemBERT + RoBERTa",
        topics: "BERTopic",
        entities: "spaCy NER",
      },
    },
    {
      id: 3,
      name: "Data Warehouse & Dashboards",
      description:
        "Star-schema warehouse feeding two Power BI dashboards.",
      details:
        "A Python ETL pipeline indexes cleaned, deduplicated posts into a SQL Server star schema, powering Patient Insights and Market Insights dashboards.",
      metrics: {
        warehouse: "SQL Server (star schema)",
        indexed: "289,300 posts",
        dashboards: "2 (Power BI)",
      },
    },
  ],

  dataset: {
    name: "Endometriosis Patient Conversations",
    source: "46 sources: medical forums, social networks, app stores, scientific articles",
    volume: "301,707 messages collected · 289,300 indexed after cleaning",
    annotation: "Bilingual sentiment labels (FR/EN) and topic clusters via BERTopic",
  },

  challenges: {
    multiSourceScraping: {
      problem: "Collecting consistent data from 46 heterogeneous, multilingual sources.",
      solution: "Built a universal scraping framework configurable per source and language.",
      status: "Resolved",
    },
    bilingualSentiment: {
      problem: "Accurately analyzing sentiment across two languages with different models.",
      solution: "Deployed CamemBERT for French and RoBERTa for English conversations.",
      status: "Resolved",
    },
    stakeholderAdoption: {
      problem: "Making large-scale NLP results usable for non-technical stakeholders.",
      solution: "Delivered 2 interactive Power BI dashboards adopted directly by leadership.",
      status: "Delivered",
    },
  },

  results: {
    messagesCollected: "301,707",
    postsIndexed: "289,300",
    dashboards: "2 (Power BI)",
    adoption: "Adopted by leadership",
  },
};
