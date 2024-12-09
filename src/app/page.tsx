import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutSection from "./pages/about";
import ExperienceSection from "./pages/experiences";
import ProjectSection from "./pages/projects";
import Footer from "./components/Footer";
import SkillSection from "./pages/skills";
export default function Home() {
    return (
        <>
            <Navbar />
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
            <SkillSection />
            <Footer />
        </>
    );
}
