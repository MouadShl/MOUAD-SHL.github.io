export const vehicleDetectionYoloProject = {
  id: 4,
  slug: "traffic-vehicle-detection-yolov8",
  title: "Traffic Vehicle Detection (YOLOv8)",
  description:
    "A computer vision project detecting and classifying vehicles in traffic footage using YOLOv8 object detection.",
  image: "assets/images/projects/vehicle-detection/main.png",
  tags: ["YOLOv8", "Computer Vision", "Python"],
  link: "/projects/traffic-vehicle-detection-yolov8",
  github: "https://github.com/MouadShl/traffic-vehicle-detection-yolov8.git",
  company: "Personal Project",
  period: "2025 - 2026",
  location: "Morocco",
  role: "Computer Vision Engineer",

  overview: {
    keyContributions: [
      "Applied YOLOv8 object detection to traffic video footage",
      "Detected and classified vehicles in real-world traffic scenes",
    ],
  },

  problemStatement: {
    title: "Detecting Vehicles in Traffic Footage",
    description:
      "Traffic monitoring requires reliable, real-time detection and classification of vehicles from video footage.",
    challenges: [
      "Handling varied lighting and traffic density conditions",
      "Achieving reliable detection accuracy with a lightweight model",
    ],
  },

  solution:
    "Used YOLOv8 to detect and classify vehicles directly from traffic video footage.",

  keyAchievements: ["Built a working vehicle detection pipeline with YOLOv8"],

  techStack: ["YOLOv8", "Python", "Computer Vision"],

  modules: [
    {
      id: 1,
      name: "Vehicle Detection",
      description: "YOLOv8-based object detection on traffic video.",
      details: "Detects and classifies vehicles frame by frame in traffic footage.",
      metrics: { model: "YOLOv8", task: "Vehicle detection" },
    },
  ],

  dataset: {
    name: "Traffic Video Footage",
    source: "Traffic camera footage",
    volume: "Video frames",
    annotation: "Vehicle bounding boxes / classes",
  },

  challenges: {
    detectionAccuracy: {
      problem: "Reliable detection across varied traffic conditions.",
      solution: "Used YOLOv8 for fast, accurate object detection.",
      status: "Resolved",
    },
  },

  results: {
    model: "YOLOv8",
    task: "Vehicle detection & classification",
  },
};
