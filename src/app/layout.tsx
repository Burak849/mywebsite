"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const trailRef = useRef<HTMLDivElement[]>([]);
    const trailLength = 10;
    const [positions, setPositions] = useState<{ x: number; y: number }[]>(
        Array(trailLength).fill({ x: 10, y: 10 })
    );

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX: x, clientY: y } = event;
            setPositions((prevPositions) => {
                const newPositions = [{ x, y }, ...prevPositions.slice(0, trailLength - 1)];
                return newPositions;
            });
        };

        const handleMouseLeave = () => {
            setPositions(Array(trailLength).fill({ x: -100, y: -100 }));
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [trailLength]);

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
        <html lang="en">
            <body>
                <div className="bg-animation">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div id="stars4"></div>
                </div>

                <Sidebar />
                <main>{children}</main>
                <Footer />

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
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleMouseOut(index)}
                            className="svg-line"
                        />
                    ))}
                </svg>
            </body>
        </html>
    );
}
