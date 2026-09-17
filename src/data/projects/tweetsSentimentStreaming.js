export const tweetsSentimentStreamingProject = {
  id: 3,
  slug: "realtime-twitter-sentiment-streaming",
  title: "Real-Time Twitter Sentiment Analysis (Big Data)",
  description:
    "A real-time streaming pipeline for tweet sentiment analysis using Apache Kafka and Spark Structured Streaming, with MongoDB storage, NLP sentiment classification, and full containerization with Docker.",
  image: "assets/images/projects/tweets-sentiment/main.png",
  tags: ["Apache Kafka", "Spark Structured Streaming", "MongoDB", "Docker", "NLP"],
  link: "/projects/realtime-twitter-sentiment-streaming",
  github: "https://github.com/MouadShl/tweets-sentiment-analysis-bigdata.git",
  company: "Personal Project",
  period: "2025 - 2026",
  location: "Morocco",
  role: "Data Engineer",

  overview: {
    keyContributions: [
      "Built a Kafka-based real-time ingestion layer for tweet streams",
      "Implemented Spark Structured Streaming jobs for real-time processing",
      "Applied NLP sentiment classification to incoming tweets",
      "Persisted processed data in MongoDB",
      "Containerized the full pipeline with Docker",
    ],
  },

  problemStatement: {
    title: "Real-Time Sentiment Analysis at Scale",
    description:
      "Understanding public sentiment on social media requires ingesting and analyzing high-velocity, continuous data streams rather than static batches.",
    challenges: [
      "Ingesting a continuous stream of tweets without bottlenecks",
      "Processing and classifying sentiment in near real time",
      "Persisting both raw and processed data reliably",
      "Making the pipeline portable and reproducible",
    ],
  },

  solution:
    "Built a streaming architecture where tweets flow through Kafka into Spark Structured Streaming for real-time NLP sentiment classification, with results persisted in MongoDB, all containerized with Docker for portability.",

  keyAchievements: [
    "Delivered a working Kafka-to-Spark-to-MongoDB streaming pipeline",
    "Implemented real-time NLP sentiment classification",
    "Fully containerized the pipeline with Docker",
  ],

  techStack: ["Apache Kafka", "Spark Structured Streaming", "MongoDB", "Docker", "Python", "NLP"],

  modules: [
    {
      id: 1,
      name: "Real-Time Ingestion",
      description: "Kafka-based ingestion of live tweet streams.",
      details: "Tweets are published to Kafka topics and consumed continuously downstream.",
      metrics: { ingestion: "Kafka", mode: "Real-time" },
    },
    {
      id: 2,
      name: "Streaming Sentiment Analysis",
      description: "Spark Structured Streaming with NLP classification.",
      details: "Incoming tweets are processed and classified for sentiment in near real time.",
      metrics: { engine: "Spark", task: "Sentiment classification" },
    },
    {
      id: 3,
      name: "Storage & Containerization",
      description: "MongoDB storage, fully containerized with Docker.",
      details: "Processed data is persisted in MongoDB, with the entire pipeline running in Docker containers.",
      metrics: { storage: "MongoDB", deployment: "Docker" },
    },
  ],

  dataset: {
    name: "Live Tweet Stream",
    source: "Twitter",
    volume: "Continuous streaming data",
    annotation: "Sentiment classification (NLP)",
  },

  challenges: {
    streamingPipeline: {
      problem: "Coordinating Kafka ingestion and Spark processing reliably.",
      solution: "Built a containerized architecture connecting Kafka, Spark, and MongoDB end to end.",
      status: "Resolved",
    },
  },

  results: {
    pipeline: "End-to-end streaming",
    processing: "Real-time",
    storage: "MongoDB",
    deployment: "Dockerized",
  },
};
