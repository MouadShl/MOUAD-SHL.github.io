import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certifications } from "@/sections/Certifications";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Skills } from "@/pages/Skills";
import { CertificationsPage } from "@/pages/CertificationsPage";
import { NotFound } from "@/pages/NotFound";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageLoader } from "@/components/PageLoader";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { AskMouadAI } from "@/components/AskMouadAI";
import { AskMouadProjectSEO } from "@/components/AskMouadProjectSEO";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen overflow-x-hidden">
          <AskMouadProjectSEO />
          <ParticlesBackground />
          <PageLoader />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ScrollToTop />
          <AskMouadAI />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;