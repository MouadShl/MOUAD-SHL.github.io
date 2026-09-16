import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PROJECT_PATH = "/projects/ask-mouad-ai-portfolio-intelligence";

const DEFAULT_SEO = {
  lang: "fr",
  locale: "fr_FR",
  alternateLocale: "en_US",
  title: "Mouad Souhal | AI/ML & Data Science Engineer",
  description:
    "Portfolio of Mouad Souhal, Data Science and AI/ML Engineer specializing in RAG systems, LLM applications, Computer Vision, Machine Learning, MLOps, and Data Engineering.",
  keywords:
    "Mouad Souhal, AI Engineer, Machine Learning Engineer, Data Science Engineer, RAG, LLM, Computer Vision, MLOps, Python, Morocco",
  canonical: "https://mouadshl.github.io/",
  image:
    "https://mouadshl.github.io/assets/images/profile/mouad_souhal_profile.png?v=20260904-3",
  imageAlt: "Mouad Souhal - AI/ML & Data Science Engineer",
};

const PROJECT_SEO = {
  lang: "en",
  locale: "en_US",
  alternateLocale: "fr_FR",
  title: "Ask Mouad AI | Evidence-Grounded RAG Portfolio Copilot",
  description:
    "Production AI portfolio copilot by Mouad Souhal built with Hybrid RAG, FastAPI, Gemini, BM25, FastEmbed, RRF, grounding and multilingual retrieval.",
  keywords:
    "Ask Mouad AI, Mouad Souhal, Hybrid RAG, RAG portfolio copilot, FastAPI, Gemini, BM25, FastEmbed, Reciprocal Rank Fusion, Grounded AI, Multilingual AI",
  canonical:
    "https://mouadshl.github.io/projects/ask-mouad-ai-portfolio-intelligence",
  image:
    "https://mouadshl.github.io/assets/images/projects/ask-mouad-ai/main.png",
  imageAlt:
    "Ask Mouad AI - evidence-grounded portfolio copilot integrated into Mouad Souhal's portfolio",
};

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (href) => {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
};

export function AskMouadProjectSEO() {
  const location = useLocation();

  useEffect(() => {
    const normalizedPath = location.pathname.replace(/\/$/, "") || "/";
    const seo = normalizedPath === PROJECT_PATH ? PROJECT_SEO : DEFAULT_SEO;

    document.documentElement.lang = seo.lang;
    document.title = seo.title;
    setCanonical(seo.canonical);

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", seo.canonical);
    upsertMeta("property", "og:image", seo.image);
    upsertMeta("property", "og:image:alt", seo.imageAlt);
    upsertMeta("property", "og:locale", seo.locale);
    upsertMeta("property", "og:locale:alternate", seo.alternateLocale);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", seo.image);
    upsertMeta("name", "twitter:image:alt", seo.imageAlt);
  }, [location.pathname]);

  return null;
}
