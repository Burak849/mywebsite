// src/pages/about.tsx
import React from 'react';
import styles from '../styles/About.module.css'; // CSS module importu

const AboutSection = () => {
    return (
        <div className={styles['paragraf']}>
            <div>
                Hello, My name is Burak Kurtulush. I am 25 years old software engineer from Turkiye. Currently, I live in Malta.
                I am a passionate web developer with a deep interest in creating engaging and functional user experiences.
                Over the years, I have honed my skills in various programming languages and frameworks, constantly seeking to improve and adapt to the ever-evolving tech landscape.
                I thrive on solving complex problems and love the challenge of building applications that not only meet client needs but also push the boundaries of creativity and innovation.
                Outside of coding, I enjoy exploring new technologies, reading about industry trends, and collaborating with like-minded individuals who share my enthusiasm for building great things.
                Whether it is through my personal projects or working as part of a team, I am always eager to learn and contribute to meaningful work.
            </div>
            <img src="../media/ppp.jpg" alt="Profile" className={styles['profile-image']} />
        </div>
    );
};

export default AboutSection;
