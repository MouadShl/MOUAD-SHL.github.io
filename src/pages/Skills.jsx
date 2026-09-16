import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  Github,
  Server,
} from "lucide-react";

const skillCategories = [
  {
    id: "data-science-ml",
    name: "Data Science & Machine Learning",
    shortName: "Data Science & ML",
    eyebrow: "Predictive Modeling",
    icon: Brain,
    description:
      "From structured data and feature engineering to evaluated, explainable predictive models.",
    skills: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "SHAP",
      "Pandas",
      "NumPy",
    ],
    evidence: [
      {
        label: "Credit Default Risk Prediction",
        to: "/projects/credit-default-risk-prediction",
      },
    ],
  },
  {
    id: "nlp",
    name: "NLP & AI",
    shortName: "NLP & AI",
    eyebrow: "Language Understanding",
    icon: Bot,
    description:
      "Bilingual sentiment analysis and topic modeling at scale on real patient and customer conversations.",
    skills: [
      "Transformers",
      "CamemBERT",
      "RoBERTa",
      "BERTopic",
      "spaCy",
      "NLTK",
      "YOLOv8",
    ],
    evidence: [
      {
        label: "Ziwig NLP Intelligence Pipeline",
        to: "/projects/ziwig-nlp-intelligence-pipeline",
      },
      {
        label: "Traffic Vehicle Detection (YOLOv8)",
        to: "/projects/traffic-vehicle-detection-yolov8",
      },
    ],
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    shortName: "Data Engineering",
    eyebrow: "Pipelines at Scale",
    icon: Server,
    description:
      "Web scraping, streaming, and ETL pipelines built for large-scale, multi-source data collection.",
    skills: [
      "Apache Kafka",
      "PySpark",
      "ETL",
      "Web Scraping",
      "BeautifulSoup",
      "Requests",
    ],
    evidence: [
      {
        label: "Ziwig NLP Intelligence Pipeline",
        to: "/projects/ziwig-nlp-intelligence-pipeline",
      },
      {
        label: "Real-Time Twitter Sentiment Streaming",
        to: "/projects/realtime-twitter-sentiment-streaming",
      },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    shortName: "Databases",
    eyebrow: "Data Modeling",
    icon: Database,
    description:
      "Relational and NoSQL data modeling, including star-schema data warehousing.",
    skills: ["SQL Server", "MySQL", "MongoDB", "NoSQL", "Star Schema"],
    evidence: [
      {
        label: "Ziwig NLP Intelligence Pipeline",
        to: "/projects/ziwig-nlp-intelligence-pipeline",
      },
    ],
  },
  {
    id: "bi-visualization",
    name: "Business Intelligence & Visualization",
    shortName: "BI & Visualization",
    eyebrow: "Data to Decisions",
    icon: Eye,
    description:
      "Interactive dashboards translating data pipelines into decisions for non-technical stakeholders.",
    skills: ["Power BI", "DAX", "Streamlit", "Plotly", "Matplotlib", "Seaborn"],
    evidence: [
      {
        label: "Ziwig NLP Intelligence Pipeline",
        to: "/projects/ziwig-nlp-intelligence-pipeline",
      },
      {
        label: "Credit Default Risk Prediction",
        to: "/projects/credit-default-risk-prediction",
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & Environment",
    shortName: "Tools & Env",
    eyebrow: "Workflow",
    icon: Code2,
    description:
      "Version control, notebooks, and Agile collaboration across Windows and Linux.",
    skills: ["Git", "GitHub", "Jupyter", "VS Code", "Agile", "Windows", "Linux"],
    evidence: [],
  },
];

const engineeringWorkflow = [
  {
    step: "01",
    title: "Build",
    description: "Translate a real problem into a measurable AI system.",
  },
  {
    step: "02",
    title: "Evaluate",
    description: "Measure quality, failure modes, retrieval, or model behavior.",
  },
  {
    step: "03",
    title: "Deploy",
    description: "Package the system behind usable applications and workflows.",
  },
  {
    step: "04",
    title: "Monitor",
    description: "Keep performance, evidence, and operational limits visible.",
  },
];

const coreSignals = [
  "Data Science & ML",
  "NLP & AI",
  "Data Engineering",
  "Business Intelligence",
];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedEvidence, setExpandedEvidence] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setExpandedEvidence(null);
  };

  const filteredSkills =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((category) => category.id === selectedCategory);

  return (
    <div className="min-h-screen overflow-hidden pt-20 md:pt-24 pb-14 md:pb-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-5 md:mb-6"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          Back Home
        </Link>

        <section className="relative mb-6 md:mb-8">
          <div className="absolute -top-10 -left-10 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-4 right-0 w-36 h-36 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI Engineering Skills
            </div>

            <h1 className="mt-4 max-w-5xl text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.02] tracking-tight animate-fade-in animation-delay-100">
              From models to
              <span className="font-serif italic font-normal text-primary">
                {" "}intelligent systems.
              </span>
            </h1>

            <p className="mt-4 md:mt-5 max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
              A focused view of the technologies and engineering practices I use
              to design, evaluate, deploy, and improve AI products - backed by
              project evidence instead of a generic list of tools.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 animate-fade-in animation-delay-300">
              {coreSignals.map((signal) => (
                <span
                  key={signal}
                  className="px-3 py-1.5 rounded-full border border-border/70 bg-background/60 backdrop-blur-sm text-xs md:text-sm font-medium text-foreground/80"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-6 md:mb-8">
          <div className="glass rounded-2xl border border-border/50 p-3.5 md:p-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Capability map
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Filter the stack by the part of the AI lifecycle you want to inspect.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleCategoryChange("all")}
                  aria-pressed={selectedCategory === "all"}
                  className={`px-3.5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border/70 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  All Expertise
                </button>

                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(category.id)}
                    aria-pressed={selectedCategory === category.id}
                    className={`px-3.5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border/70 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {category.shortName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {filteredSkills.map((category, index) => {
              const Icon = category.icon;
              const isEvidenceExpanded = expandedEvidence === category.id;

              return (
                <article
                  key={category.id}
                  tabIndex={0}
                  className={`group relative overflow-hidden rounded-2xl border bg-background/55 backdrop-blur-md p-5 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                    category.featured
                      ? "border-primary/35 shadow-[0_0_0_1px_rgba(45,212,191,0.04)]"
                      : "border-border/60 hover:border-primary/35"
                  }`}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>

                        <div>
                          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-semibold text-primary">
                            {category.eyebrow}
                          </p>
                          <h2 className="mt-1 text-xl md:text-2xl font-bold leading-tight">
                            {category.name}
                          </h2>
                        </div>
                      </div>

                      <span className="hidden sm:inline-flex text-xs font-mono text-muted-foreground/60">
                        0{skillCategories.findIndex((item) => item.id === category.id) + 1}
                      </span>
                    </div>

                    <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface/60 px-2.5 py-1.5 text-[11px] md:text-xs font-medium text-foreground/80 transition-colors hover:border-primary/35 hover:text-primary"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Desktop: completely hidden at rest, revealed by card hover/focus. */}
                    <div className="hidden md:block overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-out group-hover:max-h-44 group-hover:opacity-100 group-focus-within:max-h-44 group-focus-within:opacity-100">
                      <div className="mt-5 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-semibold text-muted-foreground">
                            Evidence
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {category.evidence.map((item) =>
                            item.href ? (
                              <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs md:text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary/35 transition-all"
                              >
                                {item.label}
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs md:text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary/35 transition-all"
                              >
                                {item.label}
                                {item.meta && (
                                  <span className="hidden md:inline text-[10px] font-medium text-muted-foreground">
                                    · {item.meta}
                                  </span>
                                )}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Touch devices: a compact control opens the evidence on demand. */}
                    <div className="md:hidden mt-4 pt-3 border-t border-border/50">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedEvidence((current) =>
                            current === category.id ? null : category.id,
                          )
                        }
                        aria-expanded={isEvidenceExpanded}
                        aria-controls={`evidence-mobile-${category.id}`}
                        className="flex w-full items-center justify-between gap-3 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      >
                        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] font-semibold text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Project evidence
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 text-primary transition-transform duration-300 ${
                            isEvidenceExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      <div
                        id={`evidence-mobile-${category.id}`}
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isEvidenceExpanded
                            ? "max-h-44 opacity-100 mt-3"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <div className="flex flex-wrap gap-2 pt-1">
                          {category.evidence.map((item) =>
                            item.href ? (
                              <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/10 hover:border-primary/35 transition-all"
                              >
                                {item.label}
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/10 hover:border-primary/35 transition-all"
                              >
                                {item.label}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mb-14 md:mb-20">
          <div className="mb-6 md:mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Engineering workflow
            </p>
            <h2 className="mt-2 text-2xl md:text-4xl font-bold">
              Skills are useful when they connect into a
              <span className="font-serif italic font-normal text-foreground">
                {" "}working system.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
            {engineeringWorkflow.map((item, index) => (
              <div
                key={item.step}
                className="relative glass rounded-2xl border border-border/50 p-5 md:p-6 overflow-hidden group hover:border-primary/35 transition-all"
              >
                {index < engineeringWorkflow.length - 1 && (
                  <ArrowRight className="hidden xl:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 z-10" />
                )}
                <span className="text-xs font-mono text-primary">{item.step}</span>
                <h3 className="mt-3 text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-4 md:gap-6">
          <div className="glass rounded-2xl border border-border/50 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] font-semibold text-primary">
                  Engineering foundations
                </p>
                <h2 className="text-xl md:text-2xl font-bold">Built around fundamentals.</h2>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["Python", "SQL", "Git & GitHub", "Linux"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border/60 bg-background/45 px-3 py-3 text-center text-xs md:text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              I keep the fundamentals visible because strong AI systems still depend
              on reliable data handling, readable code, reproducible workflows, and
              interfaces that other people can actually use.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-primary">
                See the evidence
              </p>
              <h2 className="mt-2 text-xl md:text-2xl font-bold">
                Explore the systems behind the stack.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The project pages show architectures, implementation choices,
                measured results, limitations, and repositories.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/#projects"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all"
                >
                  Explore Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://github.com/MouadShl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/25 bg-background/55 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
