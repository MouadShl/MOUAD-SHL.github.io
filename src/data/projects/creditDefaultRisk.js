export const creditDefaultRiskProject = {
  id: 2,
  slug: "credit-default-risk-prediction",
  title: "Credit Default Risk Prediction - Moroccan Bank Portfolio",
  description:
    "An end-to-end machine learning pipeline predicting credit-card default risk for a Moroccan bank portfolio of 30,000 clients, comparing 7 models, optimizing XGBoost, adding SHAP explainability, and deploying via Streamlit.",
  image: "assets/images/projects/credit-default-risk/main.png",
  tags: ["XGBoost", "SHAP", "Streamlit", "Scikit-learn", "Machine Learning"],
  link: "/projects/credit-default-risk-prediction",
  github: "https://github.com/MouadShl/credit-risk-morocco.git",
  company: "Personal Project",
  period: "2025 - 2026",
  location: "Morocco",
  role: "Machine Learning Engineer",

  overview: {
    keyContributions: [
      "Prepared and engineered features from a 30,000-client Moroccan bank portfolio",
      "Trained and compared 7 machine learning models for default prediction",
      "Optimized an XGBoost model as the final production candidate",
      "Added model explainability with SHAP",
      "Deployed the model as an interactive Streamlit application",
    ],
  },

  problemStatement: {
    title: "Predicting Credit Card Default Risk",
    description:
      "Banks need reliable, explainable models to estimate the probability that a client will default on their credit card payments, to support risk-based decision-making.",
    challenges: [
      "Handling a large, realistic client dataset with imbalanced outcomes",
      "Comparing multiple model families to find the best trade-off of accuracy and interpretability",
      "Making the final model's decisions explainable to non-technical stakeholders",
      "Packaging the model into an accessible, interactive tool",
    ],
  },

  solution:
    "Built a full ML pipeline from data preparation to deployment: comparing 7 models, selecting and tuning XGBoost as the best performer, adding SHAP-based explainability, and wrapping the result in a Streamlit app for interactive exploration.",

  keyAchievements: [
    "Compared 7 machine learning models on a 30,000-client dataset",
    "Selected and optimized XGBoost as the final model",
    "Added SHAP explainability for individual predictions",
    "Deployed an interactive Streamlit application",
  ],

  techStack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "SHAP", "Streamlit"],

  modules: [
    {
      id: 1,
      name: "Data Preparation & Modeling",
      description: "Feature engineering and comparison of 7 ML models.",
      details:
        "Cleaned and engineered features from the client portfolio, then trained and benchmarked 7 different model families.",
      metrics: { clients: "30,000", models: "7 compared" },
    },
    {
      id: 2,
      name: "Optimization & Explainability",
      description: "XGBoost tuning and SHAP-based explainability.",
      details:
        "Selected XGBoost as the best-performing model and optimized it, then added SHAP to explain individual predictions.",
      metrics: { finalModel: "XGBoost", explainability: "SHAP" },
    },
    {
      id: 3,
      name: "Deployment",
      description: "Interactive Streamlit application.",
      details: "Packaged the trained model into a Streamlit app for interactive use.",
      metrics: { deployment: "Streamlit" },
    },
  ],

  dataset: {
    name: "Moroccan Bank Credit Portfolio",
    source: "Bank credit-card client data",
    volume: "30,000 clients",
    annotation: "Default / non-default labels",
  },

  challenges: {
    modelSelection: {
      problem: "Choosing the best model among several candidates.",
      solution: "Systematically compared 7 models before selecting and tuning XGBoost.",
      status: "Resolved",
    },
    explainability: {
      problem: "Making model predictions interpretable for risk decisions.",
      solution: "Integrated SHAP to explain individual predictions.",
      status: "Resolved",
    },
  },

  results: {
    modelsCompared: "7",
    finalModel: "XGBoost",
    explainability: "SHAP",
    deployment: "Streamlit",
  },
};
