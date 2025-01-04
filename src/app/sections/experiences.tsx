import React from 'react';
import styles from '../styles/Experience.module.css';
import { relative } from 'path';

const ExperienceSection = () => {
    return (

        <section className={styles.sectioncont} id="about">
            <h1 style={{ cursor: 'default', position: 'relative', textAlign: 'center', fontSize: '5vh', display: 'flex', justifyContent: 'center', color: 'white' }}>About <span style={{ color: '#FCD34D', marginLeft: 10 }}>Me</span></h1>
                    <br/>
        <div className={styles['spesifik']}>


                <img src="../media/about-bg.gif" alt="About BG" className={styles['gif']} />
                <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2vh', cursor: 'default' }} >
                    My name is Burak Kurtulush, and I am a 25-year-old recently graduated Computer Engineer. My passion lies in coding, particularly in frontend development, but I am actively honing my skills in full-stack development. I hold dual citizenship, which grants me the privilege to live and work in both Europe and Turkey.
                    <br/>
                    <br/>
                    I have spent several months in various countries, allowing me to immerse myself in diverse cultures. This unique exposure has not only broadened my worldview but also inspired my curiosity to explore even more.
                    <br/>
                    <br />

                    Beyond my professional interests, I enjoy playing football, maintaining my fitness routine, and expressing creativity through acoustic guitar. Additionally, I am an avid language enthusiast and constantly seek opportunities to improve my linguistic abilities.
                    <br/>
                    <br />

                    In my spare time, I delve into photography, capturing moments and landscapes that tell stories. I also have a keen interest in cooking, where I experiment with international cuisines. Lastly, I enjoy solving puzzles and challenges, such as escape rooms and logic games, as they sharpen my problem-solving skills while providing fun and excitement.
                </p>

            
        </div>
        </section>
        

        
    );
};

export default ExperienceSection;
