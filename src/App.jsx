import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import SkillsSection from "./pages/SkillsSection";
import ProjectsSection from "./pages/ProjectsSection";
import ParcoursSection from "./pages/ParcoursSection";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <>
      <Navbar dark={dark} onToggleTheme={toggle} />
      <main>
        <HeroSection dark={dark} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ParcoursSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}