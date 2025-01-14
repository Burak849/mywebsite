import React from 'react';
import styles from '../styles/Experience.module.css';
import Image from 'next/image';


const ExperienceSection = () => {
    return (

        <section className={`${styles.sectioncont} fade-in`} id="about">
            <h1 style={{ cursor: 'default', position: 'relative', textAlign: 'center', fontSize: '5vh', display: 'flex', justifyContent: 'center', color: 'white' }}>About <span style={{ color: '#FCD34D', marginLeft: 10 }}>Me</span></h1>
                    <br/>
        <div className={styles['spesifik']}>

                 <Image src="/media/about-bg.gif" alt="About BG" className={styles['gif']} width={233}  height={136} unoptimized/>

                <div className={styles.paragraphclass}>
                    <p>My name is Burak Kurtulush. I am a 24 years-old recently graduated Software Engineer. My passion lies in coding, particularly in frontend development, but I am actively honing my skills in full-stack development. I am a dual citizenship holder, which grants me the privilege to reside and work in both Europe and Turkey.</p>
                    <br/>
                    <p>I have spent several months in various countries (USA, Germany, Ireland ..), allowing me to immerse myself in diverse cultures and stressful situations. This unique exposure has not only broadened my worldview but also inspired my curiosity to explore even more.</p>
                    <br/>
                    <p>Beyond my professional interests, I enjoy playing football, maintaining my fitness routine, and expressing creativity through acoustic guitar. Additionally, I am an avid language enthusiast and constantly seek opportunities to improve my linguistic abilities.</p>
                    <br/>
                    <p>In my spare time, I delve into photography, capturing moments and landscapes that tell stories. I also have a keen interest in cooking, where I experiment with international cuisines. Lastly, I enjoy solving puzzles and challenges, such as escape rooms and logic games, as they sharpen my problem-solving skills while providing fun and excitement.</p>
                </div>

            
        </div>
        </section>
        

        
    );
};

export default ExperienceSection;
