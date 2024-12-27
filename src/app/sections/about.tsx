'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';

const AboutSection: React.FC = () => {

    const texts = [
        "I am a Computer Engineer from Turkey.",
        "I love to code for Frontend Development.",
        "Let's build something aesthetic!"
    ];
    const [displayedText, setDisplayedText] = useState(""); 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false); 
    const speed = 100; 
    const deleteSpeed = 50; 
    const delay = 1500; 

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            
            if (displayedText.length < texts[currentIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(
                        (prev) => prev + texts[currentIndex].charAt(displayedText.length)
                    );
                }, speed);
            } else {
                
                timeout = setTimeout(() => setIsDeleting(true), delay);
            }
        } else {
            
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -1));
                }, deleteSpeed);
            } else {
                
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length); 
            }
        }

        return () => clearTimeout(timeout); 
    }, [displayedText, isDeleting, texts, currentIndex, speed, deleteSpeed, delay]);

    return (
                    
        <div className={styles['about-container']}>
           

            <div className={styles['text-paragraf']}>
                <div style={{ textShadow: 'none' }} className="group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6 hover:translate-y-12">
                    <div className="group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-[rgb(1_16_27/_var(--tw-bg-opacity,_1))] text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-[10deg] before:rounded-2xl before:absolute before:content[''] before:bg-[rgb(10_150_150/_var(--tw-bg-opacity,_1))]
 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
                        <span className="text-2xl font-bold">Burak Kurtulush</span>
                            <p className="text-amber-300 font-thin">- Jr. Frontend Developer -</p>
                        </div>
                    </div>
                <div>
                    <h2 style={{ fontSize: "5vh", color: 'white', textShadow: 'none' }}>Hello!</h2>
                    <p style={{ color: '#FCD34D', textShadow: 'none', fontSize: "5vh" }}>
                        {displayedText}
                        <span>|</span> 
                    </p>
                    <h3 style={{ color: 'white', textShadow: 'none', fontSize: "3vh" }}>I am a passionate computer engineer with a focus on UI/UX and Front-end development, dedicated to crafting innovative and user-centric websites.</h3>
                </div>

                <button className={styles['custom-button']}>Contact Me</button>
            </div>

            <div className={styles.imgbg }>
            <img src="../media/pp-removebg1.png" alt="Profile Image" className={styles['profile-image']} />
            </div>

           


            </div>
       
    );
};

export default AboutSection;
