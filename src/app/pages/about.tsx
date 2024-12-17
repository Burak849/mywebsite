'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';

const AboutSection: React.FC = () => {

    const texts = [
        "I am a Software Engineer from Turkey.",
        "I love to code for Frontend Development",
        "Let's build something aesthetic!",
    ];
    const [displayedText, setDisplayedText] = useState(""); 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false); 
    const speed = 100; // Yazma hızı
    const deleteSpeed = 50; // Silme hızı
    const delay = 1500; // Yazma tamamlandığında bekleme süresi

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            // Yazma efekti
            if (displayedText.length < texts[currentIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(
                        (prev) => prev + texts[currentIndex].charAt(displayedText.length)
                    );
                }, speed);
            } else {
                // Tüm yazı yazıldığında bekle ve silmeye geç
                timeout = setTimeout(() => setIsDeleting(true), delay);
            }
        } else {
            // Silme efekti
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -1));
                }, deleteSpeed);
            } else {
                // Tüm metin silindiğinde bir sonraki metne geç
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length); 
            }
        }

        return () => clearTimeout(timeout); 
    }, [displayedText, isDeleting, texts, currentIndex, speed, deleteSpeed, delay]);

    return (
                    
        <div className={styles['about-container']}>
           

            <div className={styles['text-paragraf']}>

                <div>
                    <h2 style={{ fontSize: 34 }}>Hello, It's Burak.</h2>
                    <p style={{ color: 'white', textShadow: 'none', fontSize: 40 }}>
                        {displayedText}
                        <span>|</span> 
                    </p>
                    <h3 style={{ color: 'white', textShadow: 'none', fontSize: 22 }}>I am a passionate software engineer with a focus on AI and Front-end development, dedicated to crafting innovative and user-centric websites.</h3>
                </div>

                <button className={styles['custom-button']}>Contact Me</button>
            </div>
            <img src="../media/ppp.jpg" alt="Profile Image" className={styles['profile-image']} />

           


            </div>
       
    );
};

export default AboutSection;
