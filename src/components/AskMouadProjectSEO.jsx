import { useEffect } from "react";

const SEO = {
  lang: "en",
  locale: "en_US",
  alternateLocale: "fr_FR",
  title: "Mouad Souhal | Data Scientist & Data Engineer",
  description:
    "Portfolio of Mouad Souhal, a Data Scientist specializing in NLP, Machine Learning, Data Engineering, and Business Intelligence.",
  keywords:
    "Mouad Souhal, Data Scientist, Data Analyst, Data Engineer, Machine Learning, NLP, Python, Power BI, Morocco",
  canonical: "https://mouadshl.github.io/",
  image:
    "https://mouadshl.github.io/assets/images/profile/mouad_souhal_profile.png",
  imageAlt: "Mouad Souhal - Data Scientist & Data Engineer",
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
  useEffect(() => {
    document.documentElement.lang = SEO.lang;
    document.title = SEO.title;
    setCanonical(SEO.canonical);

    upsertMeta("name", "description", SEO.description);
    upsertMeta("name", "keywords", SEO.keywords);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", SEO.title);
    upsertMeta("property", "og:description", SEO.description);
    upsertMeta("property", "og:url", SEO.canonical);
    upsertMeta("property", "og:image", SEO.image);
    upsertMeta("property", "og:image:alt", SEO.imageAlt);
    upsertMeta("property", "og:locale", SEO.locale);
    upsertMeta("property", "og:locale:alternate", SEO.alternateLocale);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", SEO.title);
    upsertMeta("name", "twitter:description", SEO.description);
    upsertMeta("name", "twitter:image", SEO.image);
    upsertMeta("name", "twitter:image:alt", SEO.imageAlt);
  }, []);

  return null;
}
