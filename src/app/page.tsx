'use client';

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./pages/about";
import ExperienceSection from "./pages/experiences";
import ProjectSection from "./pages/projects";
import Footer from "./components/Footer";
import SkillSection from "./pages/skills";

export default function Home() {

    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement[]>([]);
    const trailLength = 10;
    const [positions, setPositions] = useState<{ x: number; y: number }[]>(
        Array(trailLength).fill({ x: 10, y: 10 })
    );

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX: x, clientY: y } = event;
            setPositions((prevPositions) => {
                const newPositions = [{ x, y }, ...prevPositions.slice(0, trailLength - 5)];
                return newPositions;
            });

            if (cursorRef.current) {
                cursorRef.current.style.opacity = "1";
                cursorRef.current.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
            }
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = "0";
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const handleHover = (index: number) => {
        const trailElement = trailRef.current[index];
        if (trailElement) {
            trailElement.style.stroke = "#ffffff"; 
            trailElement.style.strokeWidth = "12"; 
        }
    };

    const handleMouseOut = (index: number) => {
        const trailElement = trailRef.current[index];
        if (trailElement) {
            trailElement.style.stroke = "#ffea00"; 
            trailElement.style.strokeWidth = "10"; 
        }
    };
    return (
        <>
            <Navbar />
            <AboutSection />
            <SkillSection />
            <ExperienceSection />
            <ProjectSection />
            <Footer />

            <div className='bg-animation'>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>

            <svg
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    zIndex: -1,
                    width: "100%",  
                    height: "100%",

                }}
            >
                {positions.slice(1).map((pos, index) => (
                    <line
                        key={index}
                        x1={positions[index].x}
                        y1={positions[index].y}
                        x2={pos.x}
                        y2={pos.y}
                        stroke="#ffea00"
                        strokeWidth="10"
                        strokeOpacity={1} 
                        strokeLinecap="round"  
                        onMouseEnter={() => handleHover(index)} 
                        onMouseLeave={() => handleMouseOut(index)} 
                        style={{
                            filter: "drop-shadow(0px 0px 1px white)",
                        }}
                    />
                ))}
            </svg>
        </>
    );
}
