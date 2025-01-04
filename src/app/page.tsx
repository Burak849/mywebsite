'use client';

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Sidebar";
import AboutSection from "./sections/about";
import ExperienceSection from "./sections/experiences";
import ProjectSection from "./sections/projects";
import Footer from "./components/Footer";
import SkillSection from "./sections/skills";
import Education from "./sections/education";
import Counter from "./components/Counter";




export default function Home() {

    return (
        <>
            

            <AboutSection />
            <Counter/>
            <ExperienceSection />
            <Education />
            <SkillSection />
            <ProjectSection />
            
        </>
    );
}
