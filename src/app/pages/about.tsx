'use client';

import React from 'react';
import styles from '../styles/About.module.css';

const AboutSection: React.FC = () => {
   

    return (
                    
        <div className={styles['about-container']}>
           

            <div className={styles['text-paragraf']}>

                <div>
                    <h2 style={{ fontSize: 34 }}>Hello, It's Burak.</h2>
                    <h1 style={{ color: 'white', textShadow: 'none', fontSize: 40 }}>I am a Software Engineer from Turkiye.</h1>
                    <h3 style={{ color: 'white', textShadow: 'none', fontSize: 22 }}>I am a passionate software engineer with a focus on AI and Front-end development, dedicated to crafting innovative and user-centric websites.</h3>
                </div>

                <button className={styles['custom-button']}>Contact Me</button>
            </div>
            <img src="../media/ppp.jpg" alt="Profile Image" className={styles['profile-image']} />

           


            </div>
       
    );
};

export default AboutSection;
