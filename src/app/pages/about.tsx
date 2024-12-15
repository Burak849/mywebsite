'use client';

import React from 'react';
import styles from '../styles/About.module.css';


const AboutSection: React.FC = () => {
   

    return (
        <div className={styles['about-container']}>

           

            <div className={styles['neon-text']}>
                <h3>Hello, It's me.</h3>
                <h1>My name is Burak Kurtulush.</h1>
                <h2>I am a Software Engineer from Turkiye.</h2>
            
                    <button className={styles['custom-button']}>Contact Me</button>
            </div>
            <img src="../media/ppp.jpg" alt="Profile Image" className={styles['profile-image']} />

           


        </div>
    );
};

export default AboutSection;
