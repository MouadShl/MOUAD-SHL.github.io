import { ziwigNlpPipelineProject } from "./ziwigNlpPipeline";
import { creditDefaultRiskProject } from "./creditDefaultRisk";
import { tweetsSentimentStreamingProject } from "./tweetsSentimentStreaming";
import { vehicleDetectionYoloProject } from "./vehicleDetectionYolo";

// Organized by relevance - most significant / most recent project first
export const projectsData = [
  ziwigNlpPipelineProject,          // PFE - Ziwig Morocco
  creditDefaultRiskProject,
  tweetsSentimentStreamingProject,
  vehicleDetectionYoloProject,
];

const projectPresentation = {
  "ziwig-nlp-intelligence-pipeline": {
    primaryDomain: "Data Science & NLP",
    projectFocus: ["NLP", "Data Engineering", "Business Intelligence"],
  },
  "credit-default-risk-prediction": {
    primaryDomain: "Machine Learning",
    projectFocus: ["Classification", "Explainable AI", "Model Deployment"],
  },
  "realtime-twitter-sentiment-streaming": {
    primaryDomain: "Data Engineering",
    projectFocus: ["Streaming", "NLP", "Big Data"],
  },
  "traffic-vehicle-detection-yolov8": {
    primaryDomain: "Computer Vision",
    projectFocus: ["Object Detection", "Computer Vision"],
  },
};

export const getProjectBySlug = (slug) => {
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return undefined;

  const presentation = projectPresentation[project.slug];
  return presentation ? { ...project, ...presentation } : project;
};

export const getProjectById = (id) => {
  return projectsData.find((p) => p.id === id);
};
