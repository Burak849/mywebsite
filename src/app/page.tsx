﻿'use client';

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/about";
import ExperienceSection from "./sections/experiences";
import ProjectSection from "./sections/projects";
import Footer from "./components/Footer";
import SkillSection from "./sections/skills";
import Education from "./sections/education";



export default function Home() {

    return (
        <>
            <AboutSection />
            <ExperienceSection />
            <Education />
            <SkillSection />
            <ProjectSection />
            
        </>
    );
}
