﻿'use client';

import { useEffect, useState } from "react";
import AboutSection from "./sections/about";
import ExperienceSection from "./sections/experiences";
import ProjectSection from "./sections/projects";
import SkillSection from "./sections/skills";
import Education from "./sections/education";
import Counter from "./components/Counter";
import Loader from "./components/Loader";



export default function Home() {

    const [loading, setLoading] = useState(true);
 

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Loader />}

            <section className= "fade-in">

                <AboutSection />
                <Counter />
                <ExperienceSection />
                <Education />
                <SkillSection />
                <ProjectSection />

            </section>

        </>
    );
}
