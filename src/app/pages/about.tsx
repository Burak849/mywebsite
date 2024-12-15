'use client';

import React from 'react';
import styles from '../styles/About.module.css';
import Tooltip from '../components/Tooltip';


const AboutSection: React.FC = () => {
   

    return (
        <div className={styles['about-container']}>
            <div className={styles['neon-text']}>
                <h3>Hello, It's me.</h3>
                <h1>My name is Burak Kurtulush.</h1>
                <h2>I am a Front-end Developer from Turkiye.</h2>
            <div className={styles['tooltip-pos']}>
            <Tooltip/>
            </div>
            </div>
            <img src="../media/ppp.jpg" alt="Profile Image" className={styles['profile-image']} />
        </div>
    );
};

export default AboutSection;
