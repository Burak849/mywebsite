"use client";

import "./globals.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const trailLength = 10;
    const [positions, setPositions] = useState<{ x: number; y: number }[]>(
        Array(trailLength).fill({ x: 0, y: 0 })
    );

    useEffect(() => {
        let animationFrame: number;

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX: x, clientY: y } = event;
            animationFrame = requestAnimationFrame(() => {
                setPositions((prevPositions) => [
                    { x, y },
                    ...prevPositions.slice(0, trailLength - 1),
                ]);
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, [trailLength]);

    useEffect(() => {
        const sections = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");
                        entry.target.classList.remove("hide");
                    } else {

                        entry.target.classList.add("hide");
                        entry.target.classList.remove("show");
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);


    useEffect(() => {
        const backToTopButton = document.getElementById("back-to-top") as HTMLButtonElement;

        if (backToTopButton) {
            const handleScroll = () => {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    backToTopButton.style.display = "block";
                } else {
                    backToTopButton.style.display = "none";
                }
            };

            window.addEventListener("scroll", handleScroll);

            backToTopButton.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);



    return (
        <html lang="en">
            <body>

                {/* Background Animation */}
                <div className="bg-animation">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div id="stars4"></div>
                </div>


                {/* Layout Components */}
                <Sidebar />
                <main>{children}</main>
                <Footer />

                <button id="back-to-top" className="back-to-top"><FaAngleDoubleUp /></button>


                <svg
                    className="svg-overlay"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    {positions.slice(1).map((pos, index) => (
                        <line
                            key={index}
                            x1={positions[index].x}
                            y1={positions[index].y}
                            x2={pos.x}
                            y2={pos.y}
                            stroke="#FCD34D"
                            strokeWidth="10"
                            strokeOpacity={0.8}
                            strokeLinecap="round"
                            className="svg-line"
                        />
                    ))}
                </svg>
            </body>
        </html>
    );
}
