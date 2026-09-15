import { useState, useEffect } from "react";
import { Award, ExternalLink, ArrowLeft, Search, X } from "lucide-react";
import { Link } from "react-router-dom";

const issuerLogoDomains = {
  "Oracle": "oracle.com",
  "Anthropic": "anthropic.com",
  "LinkedIn": "linkedin.com",
  "LinkedIn Learning Community": "linkedin.com",
  "IBM Cognitive Class": "ibm.com",
  "OpenCV University": "opencv.org",
  "KNIME": "knime.com",
  "Anaconda": "anaconda.com",
  "Microsoft": "microsoft.com",
  "Worldchefs — World Association of Chefs' Societies": "worldchefs.org",
};

export const CertificationIssuerLogo = ({ issuer }) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const domain = issuerLogoDomains[issuer];

  if (!domain || logoFailed) {
    return <Award className="w-6 h-6 text-primary" />;
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${issuer} logo`}
      className="w-7 h-7 md:w-8 md:h-8 object-contain rounded-md"
      onError={() => setLogoFailed(true)}
      decoding="async"
    />
  );
};


export const certifications = [
  {
    id: 1,
    title: "Oracle AI Database Certified Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2026",
    description: "Foundations-level certification covering Oracle AI Database concepts. Expires Sep 2028.",
    icon: <Award className="w-6 h-6" />,
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DB7635917C2E198F0CEF058CB37F71325EEA0B220050B0902AFB685D1346A346",
    category: "cloud-database",
  },
  {
    id: 2,
    title: "Basic Proficiency in KNIME Analytics Platform",
    issuer: "KNIME",
    date: "Sep 2026",
    description: "Certification validating basic proficiency in the KNIME Analytics Platform for data science workflows.",
    icon: <Award className="w-6 h-6" />,
    link: "https://www.credly.com/badges/23b432ef-b4b1-4368-9bd5-85f4e305c315/linked_in_profile",
    category: "data-science",
  },
  {
    id: 3,
    title: "Vision Language Models (VLM) Bootcamp",
    issuer: "OpenCV University",
    date: "Aug 2026",
    description: "Bootcamp covering Vision Language Models and multimodal computer vision techniques.",
    icon: <Award className="w-6 h-6" />,
    link: "https://courses.opencv.org/certificates/7fb71e58c9fe4cdf8e0108295038e15b",
    category: "computer-vision",
  },
  {
    id: 4,
    title: "OpenCV Bootcamp",
    issuer: "OpenCV University",
    date: "Aug 2026",
    description: "Bootcamp covering core computer vision fundamentals with OpenCV.",
    icon: <Award className="w-6 h-6" />,
    link: "https://courses.opencv.org/certificates/426f0528d3b24394b86b1a90fbdfa4bb",
    category: "computer-vision",
  },
  {
    id: 5,
    title: "Certificate of Completion: AI Fluency for Small Businesses",
    issuer: "Anthropic",
    date: "Jul 2026",
    description: "Certificate of completion in AI fluency for small business contexts and practical AI adoption.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 6,
    title: "Certificate of Completion: AI Fluency for K-12 Educators",
    issuer: "Anthropic",
    date: "Jul 2026",
    description: "Certificate of completion in AI fluency tailored for K-12 educators.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 7,
    title: "Certificate of Completion: AI Fluency for Nonprofits",
    issuer: "Anthropic",
    date: "Jul 2026",
    description: "Certificate of completion in AI fluency for nonprofit organizations.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 8,
    title: "Certificate of Completion: AI Fluency for Educators",
    issuer: "Anthropic",
    date: "Jul 2026",
    description: "Certificate of completion in AI fluency for educators.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 9,
    title: "Certificate of Completion: AI Fluency for Builders",
    issuer: "Anthropic",
    date: "Jul 2026",
    description: "Certificate of completion in AI fluency for builders and technical practitioners.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 10,
    title: "Certificate of Completion: AI Capabilities and Limitations",
    issuer: "Anthropic",
    date: "Jul 2026",
    description: "Training focused on understanding AI capabilities, limitations, and responsible use of AI systems.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 11,
    title: "Certificate of Completion: AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Certificate of completion covering the foundations of the AI Fluency framework.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 12,
    title: "Certificate of Completion: Introduction to Claude Cowork",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Certificate of completion covering Claude Cowork fundamentals for AI-assisted knowledge work.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 13,
    title: "Certificate of Completion: Claude Code 101",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Certificate of completion covering the fundamentals of Claude Code.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 14,
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Hands-on certificate covering practical, applied use of Claude Code.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 15,
    title: "Certificate of Completion: Claude 101",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Certificate of completion covering the fundamentals of using Claude.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 16,
    title: "Building with the Claude API",
    issuer: "Anthropic",
    date: "May 2026",
    description: "Certificate of completion covering building applications with the Claude API.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "anthropic",
  },
  {
    id: 17,
    title: "Certification Microsoft Office Specialist — Word 2016",
    issuer: "Microsoft",
    date: "Dec 2021",
    description: "Certification validating proficiency in Microsoft Word 2016.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "office-tools",
  },
  {
    id: 18,
    title: "Certification Microsoft Office Specialist — Excel 2016",
    issuer: "Microsoft",
    date: "Dec 2021",
    description: "Certification validating proficiency in Microsoft Excel 2016.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "office-tools",
  },
  {
    id: 19,
    title: "Food Heroes Facilitator",
    issuer: "Worldchefs — World Association of Chefs' Societies",
    date: "Oct 2025",
    description: "Facilitator certification for the Food Heroes program with Worldchefs. Skills: Project Management.",
    icon: <Award className="w-6 h-6" />,
    link: null,
    category: "volunteering",
  },
];

const CERTIFICATION_MONTHS = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// Precise ordering for certificates issued in the same month.
// This preserves the real recency order requested for the August 2026 additions.
const certificationRecencyOverrides = {};

const getCertificationRecency = (cert) => {
  if (certificationRecencyOverrides[cert.id]) {
    return certificationRecencyOverrides[cert.id];
  }

  const issuedDate = cert.date.split("·")[0].trim();
  const monthYear = issuedDate.match(/^([A-Z][a-z]{2})\s+(\d{4})$/);
  if (monthYear && CERTIFICATION_MONTHS[monthYear[1]] !== undefined) {
    return Date.UTC(Number(monthYear[2]), CERTIFICATION_MONTHS[monthYear[1]], 1);
  }

  const yearOnly = issuedDate.match(/^(\d{4})$/);
  if (yearOnly) {
    return Date.UTC(Number(yearOnly[1]), 0, 1);
  }

  return 0;
};

export const certificationsNewestFirst = [...certifications].sort(
  (a, b) => getCertificationRecency(b) - getCertificationRecency(a)
);

const categories = [
  { id: "all", name: "All Certifications" },
  { id: "anthropic", name: "Anthropic" },
  { id: "cloud-database", name: "Cloud & Database" },
  { id: "data-science", name: "Data Science" },
  { id: "computer-vision", name: "Computer Vision" },
  { id: "office-tools", name: "Office Tools" },
  { id: "volunteering", name: "Volunteering" },
];

export const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat.id === 'all') {
      acc[cat.id] = certifications.length;
    } else if (cat.id === 'anthropic') {
      acc[cat.id] = certifications.filter(cert => cert.issuer === 'Anthropic').length;
    } else {
      acc[cat.id] = certifications.filter(cert => cert.category === cat.id).length;
    }
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const normalize = (text) => text.toLowerCase().replace(/[^\w\s]/g, '').trim();
  const normalizedQuery = normalize(searchQuery);
  const filteredCertifications = certificationsNewestFirst.filter((cert) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "anthropic"
        ? cert.issuer === "Anthropic"
        : cert.category === selectedCategory);
    if (normalizedQuery === "") return matchesCategory;
    return (
      matchesCategory &&
      (normalize(cert.title).includes(normalizedQuery) ||
        normalize(cert.description).includes(normalizedQuery) ||
        normalize(cert.issuer).includes(normalizedQuery))
    );
  });

  return (
    <div className="min-h-screen overflow-hidden pt-20 md:pt-24 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Top Bar */}
        <div className="relative flex items-center mb-6">
          {/* Back Button */}
          <Link
            to="/"
            className="absolute left-0 inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Back Home
          </Link>

          {/* Search Bar */}
          <div className="flex justify-center w-full">
            <div className="max-w-md animate-fade-in" style={{ animationDelay: '50ms' }}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search certificates by keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 md:pl-12 pr-10 md:pr-12 py-2.5 md:py-3 rounded-xl
                           glass border border-border/50
                           text-sm md:text-base bg-transparent placeholder:text-muted-foreground
                           focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                           transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center"
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Certifications
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              certifications.
            </span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            All certifications and training programs that validate my expertise in data science, AI, and engineering.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-12 animate-fade-in animation-delay-300">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all relative group ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
              <span className={`absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] bg-primary text-primary-foreground rounded-full transition-opacity duration-300 ${
                selectedCategory === cat.id
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}>
                {categoryCounts[cat.id]}
              </span>
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-16">
          {filteredCertifications.length > 0 ? (
            filteredCertifications.map((cert, idx) => (
              cert.link ? (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass p-4 md:p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in hover:scale-105 block"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                      <CertificationIssuerLogo issuer={cert.issuer} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1.5 md:space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  key={cert.id}
                  className="group glass p-4 md:p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                      <CertificationIssuerLogo issuer={cert.issuer} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1.5 md:space-y-2">
                      <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 text-center py-12">
              <p className="text-muted-foreground">
                No certifications found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12 animate-fade-in animation-delay-500">
          <p className="text-xs md:text-sm text-muted-foreground">
            Continuously learning and expanding my skillset through courses, workshops, and hands-on projects.
          </p>
        </div>
      </div>
    </div>
  );
};