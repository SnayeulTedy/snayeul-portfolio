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
    <div className={`min-h-screen transition-colors duration-300 ${dark ? "bg-[#060A12] text-white" : "bg-[#F0F4FF] text-[#0A1628]"}`}>
      <Navbar dark={dark} onToggleTheme={toggle} />
      <main>
        <HeroSection dark={dark} />
        <AboutSection dark={dark} />
        <SkillsSection dark={dark} />
        <ProjectsSection dark={dark} />
        <ParcoursSection dark={dark} />
        <ContactSection dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  );
}