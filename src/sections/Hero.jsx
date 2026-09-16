import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin } from "lucide-react";
import { CVDownloadButton } from "../components/CVDownloadButton";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "Python",
  "Scikit-learn",
  "XGBoost",
  "CamemBERT",
  "RoBERTa",
  "BERTopic",
  "spaCy",
  "Apache Kafka",
  "PySpark",
  "SQL Server",
  "Power BI",
  "Streamlit",
];

const socialButtonClass =
  "w-8 h-8 md:w-9 md:h-9 rounded-full shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <img
          src={`${import.meta.env.BASE_URL}assets/images/hero/hero-bg.jpg`}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-14 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 md:gap-12 items-center">
          <div className="relative animate-fade-in animation-delay-300 order-1">
            <div className="relative max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 rounded-[2rem] border border-primary/25" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-2xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/profile/mouad_souhal_profile.png`}
                  alt="Mouad Souhal"
                  className="w-full aspect-[4/5] object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width="400"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-xl bg-background/70 backdrop-blur-md border border-border/40 px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-medium">
                      {t("hero.availableForWork")}
                    </span>
                  </div>
                  <div className="text-right leading-none">
                    <div className="text-base md:text-lg font-bold text-primary">1+</div>
                    <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wide">
                      {t("hero.yearsExp")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 order-2">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass text-xs md:text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t("hero.badge")}
              </span>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {t("hero.headline")}
                <br />
                <span className="text-primary glow-text">
                  {t("hero.headlineHighlight")}
                </span>
                <br />
                <span className="font-serif italic font-normal text-foreground">
                  {t("hero.headlineSuffix")}
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                {t("hero.description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex-1 sm:flex-none"
              >
                {t("hero.contact")} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <CVDownloadButton />
            </div>

            <div className="flex items-center gap-3 md:gap-4 animate-fade-in animation-delay-400">
              <span className="text-xs md:text-sm text-muted-foreground">
                {t("hero.follow")}
              </span>

              <a
                href="https://github.com/MouadShl"
                aria-label="GitHub"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialButtonClass} bg-[#181717] text-white border border-[#181717]`}
              >
                <Github className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.2} />
              </a>

              <a
                href="https://www.linkedin.com/in/mouad-souhal/"
                aria-label="LinkedIn"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialButtonClass} bg-[#0A66C2] text-white border border-[#0A66C2]`}
              >
                <Linkedin className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 animate-fade-in animation-delay-600">
          <div className="text-center mb-4 md:mb-5">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t("hero.technologies")}
            </p>
            <p className="mt-1.5 text-xs md:text-sm text-muted-foreground">
              {t("hero.stackDescription")}
            </p>
          </div>

          <div className="relative overflow-hidden border-y border-primary/10 py-3 md:py-4">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee w-max">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={`${skill}-${idx}`} className="flex-shrink-0 px-1.5 md:px-2">
                  <span className="inline-flex items-center rounded-full border border-primary/15 bg-background/45 backdrop-blur-sm px-3.5 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-foreground/80 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-6 flex justify-center animate-fade-in animation-delay-800">
          <button
            type="button"
            onClick={scrollToAbout}
            aria-label={t("hero.scroll")}
            className="group inline-flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">
              {t("hero.scroll")}
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/15 bg-background/40 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:-translate-y-0.5">
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};